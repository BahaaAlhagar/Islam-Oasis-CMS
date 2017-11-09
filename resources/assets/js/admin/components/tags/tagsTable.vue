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
                        <span v-else>
                             <button class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-tag :locales="locales"></add-tag>
    </div>
</template>


<script>

    import addTag from './addTag';

	export default {
        name: 'tagsTable',
        props: ['tags', 'locales'],
        methods: {
        },
        components: {
            addTag
        }
    }
</script>