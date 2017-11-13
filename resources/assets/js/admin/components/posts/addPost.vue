<template>
    <div class="modal fade" id="addPostForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 v-if="type == 1" class="modal-title" id="myModalLabel"> اضافة خبر </h4>
                    <h4 v-if="type == 2" class="modal-title" id="myModalLabel"> اضافة درس او محاضرة </h4>
                    <h4 v-if="type == 3" class="modal-title" id="myModalLabel"> اضافة قصة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onPostCreate" @keydown="addPostForm.errors.clear($event.target.name)"
                    @change="addPostForm.errors.clear($event.target.name)"
                    @input="addPostForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addPostForm.locale">
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addPostForm.errors.has('locale')" v-text="addPostForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="title" class="label">العنوان:</label>
                            
                            <input type="text" id="name" name="title" class="form-control" v-model="addPostForm.title"> 

                            <span class="alert-danger" v-if="addPostForm.errors.has('title')" v-text="addPostForm.errors.get('title')"></span>
                        </div>

                        <div class="form-group">
                            <label for="content" class="label">المحتوى:</label>
                            
                            <trumbowyg name="addPostForm.content" v-model="addPostForm.content"></trumbowyg>

                            <span class="alert-danger" v-if="addPostForm.errors.has('content')" v-text="addPostForm.errors.get('content')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="addPostForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="addPostForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="addPostForm.errors.has('published')" v-text="addPostForm.errors.get('published')"></span>
                        </div>


                        <div class="form-group">
                            <label for="tags" class="label">التصنيفات: <span style="color: green">اختر التصنيف باللغة الاساسية لاضافته</span></label>
                            
                            <v-select label="name" 
                            @input="addPostForm.errors.clear('tags')" :options="tags" multiple id="tags" name="tags[]" v-model="addPostForm.tags" ></v-select>

                            <span class="alert-danger" v-if="addPostForm.errors.has('tags')" v-text="addPostForm.errors.get('tags')"></span>
                        </div>



                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addPostForm.errors.any()">اضافة</button>
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
        props: ['locales', 'type', 'tags'],
        data() {
        return {
            addPostForm: new Form({
                type: this.$props.type,
                locale: '',
                title: '',
                content: '',
                published: 1,
                tags: []
                }),
            };
        },
        methods: {
            onPostCreate() {
                this.addPostForm.post('/admincp/posts')
                    .then(response => eventBus.$emit('postAdded', response));
            },
            addPostModal(){
                this.addPostForm.type = this.$props.type;
                this.addPostForm.published = 1;
                $('#addPostForm').modal('show');
            }
        },
        components: {
            trumbowyg,
            vSelect
        },
        mounted(){
            eventBus.$on('addPost', event => this.addPostModal());
        }
    }
</script>