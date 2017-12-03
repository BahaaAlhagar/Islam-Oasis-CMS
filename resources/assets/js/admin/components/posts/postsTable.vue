<template>
	<div>
        <table v-if="posts.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th>
                        التصنيفات
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

                                <!-- edit button -->
                                <button @click="editPost(post, translation)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>

                                <!-- delete button -->
                                <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>

                            </div>
                            <!-- translation publishing status -->
                            <div>
                                <i v-if="!translation.published"class="fa fa-close red" aria-hidden="true"></i>
                                <i v-if="translation.published"class="fa fa-check green" aria-hidden="true"></i>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, post)">
                             <button @click="addTranslation(post, key)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <div v-for="tag in post.tags">
                            <span class="alert-success">
                                {{ tag.name }}
                            </span>
                            <hr>
                        </div>
                    </td>
                    <td>
                        <button v-if="type == 1" @click="deletePost(post)" class="btn btn-danger">حذف الخبر</button>
                        <button v-if="type == 2" @click="deletePost(post)" class="btn btn-danger">حذف الدرس</button>
                        <button v-if="type == 3" @click="deletePost(post)" class="btn btn-danger">حذف القصة</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-post :type="type" :tags="tags" :locales="locales"></add-post>
        <add-post-translation :type="type" :tags="tags" :locales="locales"></add-post-translation>
        <edit-post :type="type" :tags="tags" :locales="locales"></edit-post>
    </div>
</template>


<script>

    import addPost from './addPost';
    import addPostTranslation from './addPostTranslation';
    import editPost from './editPost';

	export default {
        props: ['posts', 'locales', 'type', 'tags'],
        methods: {
            localeCheck(key, post){
                let trans = post.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(post, key){
                eventBus.$emit('addPostTranslation', post, key);
            },
            editPost(post, translation){
                eventBus.$emit('editPost', post, translation);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/posttranslation/' + translation.id)
                        .then(response => eventBus.$emit('postDeleted', response));
                }
            },
            deletePost(post){
                if(confirm('هل انت متأكد من حذف هذا المنشور؟')){
                    axios.delete('/admincp/posts/' + post.id)
                        .then(response => eventBus.$emit('postDeleted', response));
                }
            }
        },
        components: {
            addPost,
            addPostTranslation,
            editPost
        }
    }
</script>