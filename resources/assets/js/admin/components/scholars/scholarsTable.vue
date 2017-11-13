<template>
	<div>
        <table v-if="scholars.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="scholar in scholars" :key="scholar.id">
                    <td v-for="(locale, key) in locales">
                        <span v-for="translation in scholar.translations" v-if="translation.locale == key">
                            {{ translation.name }}
                            <div class="pull-left">
                                <button @click="editTranslation(translation)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </div>

                            <!-- translation publishing status -->
                            <div>
                                <i v-if="!translation.published"class="fa fa-close red" aria-hidden="true"></i>
                                <i v-if="translation.published"class="fa fa-check green" aria-hidden="true"></i>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, scholar)">
                             <button @click="addTranslation(scholar, key, locale)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <button @click="deleteScholar(scholar)" class="btn btn-danger">حذف التصنيف</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-scholar :locales="locales"></add-scholar>
        <add-scholar-translation :locales="locales"></add-scholar-translation>
        <edit-scholar-translation :locales="locales"></edit-scholar-translation>
    </div>
</template>


<script>

    import addScholar from './addScholar';
    import addScholarTranslation from './addScholarTranslation';
    import editScholarTranslation from './editScholarTranslation';

	export default {
        props: ['scholars', 'locales'],
        methods: {
            localeCheck(key, scholar){
                let trans = scholar.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(scholar, key){
                eventBus.$emit('addScholarTranslation', scholar, key);
            },
            editTranslation(translation){
                eventBus.$emit('editScholarTranslation', translation);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/scholartranslation/' + translation.id)
                        .then(response => eventBus.$emit('scholarDeleted', response));
                }
            },
            deleteScholar(scholar){
                if(confirm('هل انت متأكد من حذف هذا التصنيف؟')){
                    axios.delete(window.location.pathname + '/' + scholar.id)
                        .then(response => eventBus.$emit('scholarDeleted', response));
                }
            }
        },
        components: {
            addScholar,
            addScholarTranslation,
            editScholarTranslation
        }
    }
</script>