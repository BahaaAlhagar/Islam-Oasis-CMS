<template>
    <div class="modal fade" id="addPostTranslationForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 v-if="type == 1" class="modal-title" id="myModalLabel"> اضافة ترجمة لخبر </h4>
                    <h4 v-if="type == 2" class="modal-title" id="myModalLabel"> اضافة ترجمة لدرس او مقالة </h4>
                    <h4 v-if="type == 3" class="modal-title" id="myModalLabel"> اضافة ترجمة لقصة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onPostCreate" @keydown="addPostTranslationForm.errors.clear($event.target.name)"
                    @change="addPostTranslationForm.errors.clear($event.target.name)"
                    @input="addPostTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addPostTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addPostTranslationForm.errors.has('locale')" v-text="addPostTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="title" class="label">العنوان:</label>
                            
                            <input type="text" id="name" name="title" class="form-control" v-model="addPostTranslationForm.title"> 

                            <span class="alert-danger" v-if="addPostTranslationForm.errors.has('title')" v-text="addPostTranslationForm.errors.get('title')"></span>
                        </div>

                        <div class="form-group">
                            <label for="content" class="label">المحتوى:</label>
                            
                            <trumbowyg name="addPostTranslationForm.content" v-model="addPostTranslationForm.content"></trumbowyg>

                            <span class="alert-danger" v-if="addPostTranslationForm.errors.has('content')" v-text="addPostTranslationForm.errors.get('content')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="addPostTranslationForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="addPostTranslationForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="addPostTranslationForm.errors.has('published')" v-text="addPostTranslationForm.errors.get('published')"></span>
                        </div>


                        <div class="form-group">
                            <label for="tags" class="label">التصنيفات: <span style="color: green">نفس التصنيفات لجميع ترجمات المنشور</span></label>
                            
                            <v-select label="name" 
                            @input="addPostTranslationForm.errors.clear('tags')" :options="tags" multiple id="tags" name="tags[]" v-model="addPostTranslationForm.tags" ></v-select>

                            <span class="alert-danger" v-if="addPostTranslationForm.errors.has('tags')" v-text="addPostTranslationForm.errors.get('tags')"></span>
                        </div>



                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addPostTranslationForm.errors.any()">اضافة الترجمة</button>
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
            addPostTranslationForm: new Form({
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
                this.addPostTranslationForm.post('/admincp/posts/' + this.post_id)
                    .then(response => eventBus.$emit('postAdded', response));
            },
            addPostTranslationModal(post, key){
                this.addPostTranslationForm.locale = key;
                this.addPostTranslationForm.type = post.type;
                this.addPostTranslationForm.tags = post.tags;
                this.post_id = post.id;
                this.addPostTranslationForm.published = 1;
                $('#addPostTranslationForm').modal('show');
            }
        },
        components: {
            trumbowyg,
            vSelect
        },
        mounted(){
            eventBus.$on('addPostTranslation', (post, key) => this.addPostTranslationModal(post, key));
        }
    }
</script>