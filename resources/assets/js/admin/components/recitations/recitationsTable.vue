<template>
	<div>
        <table v-if="recitations.length" class="table table-responsive table-bordered text-center">
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
                <tr v-for="recitation in recitations" :key="recitation.id">
                    <td v-for="(locale, key) in locales">
                        <span v-for="translation in recitation.translations" v-if="translation.locale == key">
                            {{ translation.name }}
                            <div class="pull-left">
                            <button @click="editTranslation(translation)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, recitation)">
                             <button @click="addTranslation(recitation, key, locale)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <button @click="deleteRecitation(recitation)" class="btn btn-danger">حذف الرواية او القراءة</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-recitation :locales="locales"></add-recitation>
        <!-- <add-recitation-translation :locales="locales"></add-recitation-translation> -->
        <!-- <edit-recitation-translation :locales="locales"></edit-recitation-translation> -->
    </div>
</template>


<script>

    import addRecitation from './addRecitation';
    // import addRecitationTranslation from './addRecitationTranslation';
    // import editRecitationTranslation from './editRecitationTranslation';

	export default {
        props: ['recitations', 'locales'],
        methods: {
            localeCheck(key, recitation){
                let trans = recitation.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(recitation, key){
                eventBus.$emit('addRecitationTranslation', recitation, key);
            },
            editTranslation(translation){
                eventBus.$emit('editRecitationTranslation', translation);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/recitationtranslation/' + translation.id)
                        .then(response => eventBus.$emit('recitationDeleted', response));
                }
            },
            deleteRecitation(recitation){
                if(confirm('هل انت متأكد من حذف هذه الرواية او القراءة؟')){
                    axios.delete(window.location.pathname + '/' + recitation.id)
                        .then(response => eventBus.$emit('recitationDeleted', response));
                }
            }
        },
        components: {
            addRecitation,
            // addRecitationTranslation,
            // editRecitationTranslation
        }
    }
</script>