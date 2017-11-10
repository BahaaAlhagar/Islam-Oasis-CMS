<template>
	<div>
        <table v-if="posts.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <!-- render all posts -->
                <tr v-for="post in posts" :key="post.id">

                    <!-- if the user chosed to show all languages -->
                    <td v-for="(locale, key) in locales">
                        <!-- render the post contents depends in the supported language -->
                        <span v-for="translation in post.translations" v-if="translation.locale == key">
                            {{ translation.title }}
                            <div class="pull-left">
                            <button @click="editTranslation(translation)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, post)">
                             <button @click="" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <button @click="" class="btn btn-danger">حذف التصنيف</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-post :type="type" :locales="locales"></add-post>
        <!-- <add-tag-translation :locales="locales"></add-tag-translation>
        <edit-tag-translation :locales="locales"></edit-tag-translation> -->
    </div>
</template>


<script>

    import addPost from './addPost';
/*    import addTagTranslation from './addTagTranslation';
    import editTagTranslation from './editTagTranslation';*/

	export default {
        props: ['posts', 'locales', 'type'],
        methods: {
            localeCheck(key, tag){
                let trans = tag.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
/*            addTranslation(tag, key){
                eventBus.$emit('addTagTranslation', tag, key);
            },
            editTranslation(translation){
                eventBus.$emit('editTagTranslation', translation);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/tagtranslation/' + translation.id)
                        .then(response => eventBus.$emit('tagDeleted', response));
                }
            },
            deleteTag(tag){
                if(confirm('هل انت متأكد من حذف هذا التصنيف؟')){
                    axios.delete(window.location.pathname + '/' + tag.id)
                        .then(response => eventBus.$emit('tagDeleted', response));
                }
            }*/
        },
        components: {
            addPost
            /*
            addTagTranslation,
            editTagTranslation*/
        }
    }
</script>