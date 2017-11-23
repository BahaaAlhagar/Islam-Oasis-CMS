<template>
    <div class="modal fade" id="editSeriesTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعديل ترجمة لمجموعة او مسلسل </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="editSeriesTranslationForm.errors.clear($event.target.name)"
                    @change="editSeriesTranslationForm.errors.clear($event.target.name)"
                    @input="editSeriesTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="type" class="label">نوع المجموعة:</label>
                            
                            <select id="type" name="type" class="form-control" v-model="editSeriesTranslationForm.type">
                                <option value="1">مجموعة كتب</option>
                                <option value="2">مجموعة اناشيد</option>
                                <option value="3">مجموعة فيديو</option>
                                <option value="4">مجموعة محاضرات صوتية</option>
                                <option value="5">مجموعة ادعية</option>
                            </select>

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('type')" v-text="editSeriesTranslationForm.errors.get('type')"></span>
                        </div>

                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editSeriesTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('locale')" v-text="editSeriesTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم المجموعة:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="editSeriesTranslationForm.name"> 

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('name')" v-text="editSeriesTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="descriprtion" class="label">وصف المجموعة:</label>
                            
                            <textarea type="text" id="descriprtion" name="descriprtion" class="form-control" v-model="editSeriesTranslationForm.descriprtion" rows="5"></textarea>

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('descriprtion')" v-text="editSeriesTranslationForm.errors.get('descriprtion')"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholars" class="label">مؤلفى او مقدمى المجموعة (العلماء):</label>
                            
                            <v-select label="name" 
                             multiple :options="scholars" id="scholars" name="scholars[]" v-model="editSeriesTranslationForm.notFilteredScholars" ></v-select>

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('scholars')" v-text="editSeriesTranslationForm.errors.get('scholars')"></span>
                        </div>

                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات المجموعة:</label>
                            
                            <v-select label="name" 
                             multiple :options="tags" id="tags" name="tags[]" v-model="editSeriesTranslationForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('tags')" v-text="editSeriesTranslationForm.errors.get('tags')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="editSeriesTranslationForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="editSeriesTranslationForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="editSeriesTranslationForm.errors.has('published')" v-text="editSeriesTranslationForm.errors.get('published')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="editSeriesTranslationForm.errors.any()">تعديل</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vSelect from "vue-select";

	export default {
        props: ['locales', 'tags', 'scholars'],
        data() {
            return {
                editSeriesTranslationForm: new Form({
                    type: '',
                    locale: '',
                    name: '',
                    descriprtion: '',
                    published: '',
                    scholars: [],
                    tags: [],
                    notFilteredScholars: [],
                    notFilteredTags: []
                    }),
                series: ''
                };
        },
        methods: {
            onTranslationCreate() {
                this.editSeriesTranslationForm.patch(window.location.pathname + '/' + this.series)
                    .then(response => eventBus.$emit('seriesAdded', response));
                },
            prepareModal(translation, serie){
                this.editSeriesTranslationForm.locale = translation.locale;
                this.editSeriesTranslationForm.name = translation.name;
                this.editSeriesTranslationForm.descriprtion = translation.descriprtion;
                this.editSeriesTranslationForm.published = translation.published;
                this.editSeriesTranslationForm.type = serie.type;
                this.editSeriesTranslationForm.notFilteredScholars = serie.scholars;
                this.editSeriesTranslationForm.notFilteredTags = serie.tags;
                this.series = serie.id;
                $('#editSeriesTranslation').modal('show');
            }
        },
        watch: {
            "editSeriesTranslationForm.notFilteredTags"(val){
                this.editSeriesTranslationForm.tags = [];
                this.editSeriesTranslationForm.errors.clear('tags');
                for(var i = 0; i < val.length; i++){
                    this.editSeriesTranslationForm.tags.unshift(val[i].id);
                }
            },
            "editSeriesTranslationForm.notFilteredScholars"(val){
                this.editSeriesTranslationForm.scholars = [];
                this.editSeriesTranslationForm.errors.clear('scholars');
                for(var i = 0; i < val.length; i++){
                    this.editSeriesTranslationForm.scholars.unshift(val[i].id);
                }
            },
        },
        components: {
            vSelect
        },
        mounted(){
            eventBus.$on('editSeriesTranslation', (translation, serie) => this.prepareModal(translation, serie));
        }
    }
</script>