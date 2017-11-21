<template>
	<div>
        <table v-if="qurans.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th>
                        رابط السورة
                    </th>
                    <th>
                        القارئ
                    </th>
                    <th>
                        نوع التلاوة
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="quran in qurans" :key="quran.id">
                    <td v-for="(locale, key) in locales">
                        <span v-for="translation in quran.translations" v-if="translation.locale == key">
                            {{ translation.name }}
                        </span>
                    </td>
                    <td>
                        <span v-if="quran.link">
                            {{ quran.link.url }}
                        </span>
                    </td>
                    <td>
                        <span v-if="quran.scholar">
                            {{ quran.scholar.name }}
                        </span>
                    </td>
                    <td>
                        <span v-if="quran.scholar">
                            {{ quran.recitation.name }}
                        </span>
                    </td>
                    <td>
                        <button @click="editQuran(quran)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                        <button @click="deleteQuran(quran)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-quran :locales="locales" :recitations="recitations" :scholars="scholars"></add-quran>
        <edit-quran :locales="locales" :recitations="recitations" :scholars="scholars"></edit-quran>
    </div>
</template>


<script>

    import addQuran from './addQuran';
    import editQuran from './editQuran';

	export default {
        props: ['qurans', 'locales', 'scholars', 'recitations'],
        methods: {
            editQuran(quran){
                eventBus.$emit('editQuran', quran);
            },
            deleteQuran(quran){
                if(confirm('هل انت متأكد من حذف السورة؟')){
                    axios.delete(`/admincp/quran/${quran.id}`)
                        .then(response => eventBus.$emit('quranDeleted', response));
                }
            }
        },
        components: {
            addQuran,
            editQuran
        }
    }
</script>