<template>
    <div class="modal fade" id="editPostForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 v-if="type == 1" class="modal-title" id="myModalLabel"> تعديل ترجمة لخبر </h4>
                    <h4 v-if="type == 2" class="modal-title" id="myModalLabel"> تعديل ترجمة لدرس او محاضرة </h4>
                    <h4 v-if="type == 3" class="modal-title" id="myModalLabel"> تعديل ترجمة لقصة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onPostCreate" @keydown="editPostForm.errors.clear($event.target.name)"
                    @change="editPostForm.errors.clear($event.target.name)"
                    @input="editPostForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editPostForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editPostForm.errors.has('locale')" v-text="editPostForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="title" class="label">العنوان:</label>
                            
                            <input type="text" id="name" name="title" class="form-control" v-model="editPostForm.title"> 

                            <span class="alert-danger" v-if="editPostForm.errors.has('title')" v-text="editPostForm.errors.get('title')"></span>
                        </div>

                        <div class="form-group">
                            <label for="content" class="label">المحتوى:</label>
                            
                            <trumbowyg name="editPostForm.content" v-model="editPostForm.content"></trumbowyg>

                            <span class="alert-danger" v-if="editPostForm.errors.has('content')" v-text="editPostForm.errors.get('content')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="editPostForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="editPostForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="editPostForm.errors.has('published')" v-text="editPostForm.errors.get('published')"></span>
                        </div>


                        <div class="form-group">
                            <label for="tags" class="label">التصنيفات: <span style="color: green">نفس التصنيفات لجميع ترجمات المنشور</span></label>
                            
                            <v-select label="name" 
                            @input="editPostForm.errors.clear('tags')" :options="tags" multiple id="tags" name="tags[]" v-model="editPostForm.tags" ></v-select>

                            <span class="alert-danger" v-if="editPostForm.errors.has('tags')" v-text="editPostForm.errors.get('tags')"></span>
                        </div>



                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="editPostForm.errors.any()">تعديل الترجمة</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import trumbowyg from 'vue-trumbowyg';
    import 'trumbowyg/dist/ui/trumbowyg.css';

    import vSelect from "vue-select"

	export default {
        props: ['locales', 'tags', 'type'],
        data() {
            return {
                editPostForm: new Form({
                    type: this.$props.type,
                    locale: '',
                    title: '',
                    content: '',
                    published: 1,
                    tags: []
                    }),
                    post_id: ''
                };
        },
        methods: {
            onPostCreate() {
                this.editPostForm.patch('/admincp/posts/' + this.post_id)
                    .then(response => eventBus.$emit('postAdded', response));
            },
            editPostModal(post, translation){
                this.editPostForm.type = post.type;
                this.editPostForm.tags = post.tags;
                this.editPostForm.locale = translation.locale;
                this.editPostForm.title = translation.title;
                this.editPostForm.content = translation.content;
                this.editPostForm.published = translation.published;
                this.post_id = post.id;
                $('#editPostForm').modal('show');
            }
        },
        components: {
            trumbowyg,
            vSelect
        },
        mounted(){
            eventBus.$on('editPost', (post, translation) => this.editPostModal(post, translation));
        }
    }
</script>