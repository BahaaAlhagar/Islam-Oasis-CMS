<template>
	<div>
        <table v-if="fatwas.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- render all fatwas -->
                <tr v-for="fatwa in fatwas" :key="fatwa.id">

                    <!-- if the user chosed to show all languages -->
                    <td v-for="(locale, key) in locales">
                        <!-- render the fatwa contents depends in the supported language -->
                        <span v-for="translation in fatwa.translations" v-if="translation.locale == key">
                            {{ translation.question }}
                            <div class="pull-left">

                                <!-- edit button -->
                                <button @click="editFatwa(fatwa, translation)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>

                                <!-- delete button -->
                                <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>

                            </div>
                            <!-- translation publishing status -->
                            <div>
                                <i v-if="!translation.published"class="fa fa-close red" aria-hidden="true"></i>
                                <i v-if="translation.published"class="fa fa-check green" aria-hidden="true"></i>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, fatwa)">
                             <button @click="addTranslation(fatwa, key)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <button v-if="type == 1" @click="deleteFatwa(fatwa)" class="btn btn-danger">حذف الفتوى</button>
                        <button v-if="type == 2" @click="deleteFatwa(fatwa)" class="btn btn-danger">حذف السؤال</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-fatwa :type="type" :locales="locales"></add-fatwa>
        <!-- <add-fatwa-translation :type="type" :locales="locales"></add-fatwa-translation> -->
        <!-- <edit-fatwa :type="type" :locales="locales"></edit-fatwa> -->
    </div>
</template>


<script>

    import addFatwa from './addFatwa';
    // import addFatwaTranslation from './addFatwaTranslation';
    // import editFatwa from './editFatwa';

	export default {
        props: ['fatwas', 'locales', 'type'],
        methods: {
            localeCheck(key, fatwa){
                let trans = fatwa.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(fatwa, key){
                eventBus.$emit('addFatwaTranslation', fatwa, key);
            },
            editFatwa(fatwa, translation){
                eventBus.$emit('editFatwa', fatwa, translation);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/fatwatranslation/' + translation.id)
                        .then(response => eventBus.$emit('fatwaDeleted', response));
                }
            },
            deleteFatwa(fatwa){
                if(confirm('هل انت متأكد من حذف هذا المحتوى بترجماته؟')){
                    axios.delete('/admincp/fatwas/' + fatwa.id)
                        .then(response => eventBus.$emit('fatwaDeleted', response));
                }
            }
        },
        components: {
            addFatwa,
            // addFatwaTranslation,
            // editFatwa
        }
    }
</script>