<template>
	<div>
        <table v-if="tags.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tag in tags" :key="tag.id">
                    <td v-for="(locale, key) in locales">
                        <span v-for="translation in tag.translations" v-if="translation.locale == key">
                            {{ translation.name }} <button class="btn btn-info">تعديل</button>
                        </span>
                        <span v-if="!localeCheck(key, tag)">
                             <button @click="addTranslation(tag, key, locale)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-tag :locales="locales"></add-tag>
        <add-tag-translation :locales="locales"></add-tag-translation>
    </div>
</template>


<script>

    import addTag from './addTag';
    import addTagTranslation from './addTagTranslation';

	export default {
        name: 'tagsTable',
        props: ['tags', 'locales'],
        methods: {
            localeCheck(key, tag){
                let trans = tag.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(tag, key){
                eventBus.$emit('addTagTranslation', tag, key);
            }
        },
        components: {
            addTag,
            addTagTranslation
        }
    }
</script>