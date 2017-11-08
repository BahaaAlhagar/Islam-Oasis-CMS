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
                    <td v-for="translation in tags.translations" :key="translation.id">
                        {{ translation.name }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
	export default {
        name: 'tagsTable',
        props: ['tags', 'locales']
    }
</script>