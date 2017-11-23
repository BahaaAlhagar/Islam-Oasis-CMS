<template>
    <div class="modal fade" id="addSeriesTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة ترجمة لمجموعة او مسلسل </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="addSeriesTranslationForm.errors.clear($event.target.name)"
                    @change="addSeriesTranslationForm.errors.clear($event.target.name)"
                    @input="addSeriesTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="type" class="label">نوع المجموعة:</label>
                            
                            <select id="type" name="type" class="form-control" v-model="addSeriesTranslationForm.type">
                                <option value="1">مجموعة كتب</option>
                                <option value="2">مجموعة اناشيد</option>
                                <option value="3">مجموعة فيديو</option>
                                <option value="4">مجموعة محاضرات صوتية</option>
                                <option value="5">مجموعة ادعية</option>
                            </select>

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('type')" v-text="addSeriesTranslationForm.errors.get('type')"></span>
                        </div>

                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addSeriesTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('locale')" v-text="addSeriesTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم المجموعة:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addSeriesTranslationForm.name"> 

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('name')" v-text="addSeriesTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="description" class="label">وصف المجموعة:</label>
                            
                            <textarea type="text" id="description" name="description" class="form-control" v-model="addSeriesTranslationForm.description" rows="5"></textarea>

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('description')" v-text="addSeriesTranslationForm.errors.get('description')"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholars" class="label">مؤلفى او مقدمى المجموعة (العلماء):</label>
                            
                            <v-select label="name" 
                             multiple :options="scholars" id="scholars" name="scholars[]" v-model="addSeriesTranslationForm.notFilteredScholars" ></v-select>

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('scholars')" v-text="addSeriesTranslationForm.errors.get('scholars')"></span>
                        </div>

                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات المجموعة:</label>
                            
                            <v-select label="name" 
                             multiple :options="tags" id="tags" name="tags[]" v-model="addSeriesTranslationForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('tags')" v-text="addSeriesTranslationForm.errors.get('tags')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="addSeriesTranslationForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="addSeriesTranslationForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="addSeriesTranslationForm.errors.has('published')" v-text="addSeriesTranslationForm.errors.get('published')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addSeriesTranslationForm.errors.any()">اضافة</button>
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
                addSeriesTranslationForm: new Form({
                    type: '',
                    locale: '',
                    name: '',
                    description: '',
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
                this.addSeriesTranslationForm.post(window.location.pathname + '/' + this.series)
                    .then(response => eventBus.$emit('seriesAdded', response));
                },
            prepareModal(serie, key){
                this.addSeriesTranslationForm.locale = key;
                this.addSeriesTranslationForm.type = serie.type;
                this.addSeriesTranslationForm.notFilteredScholars = serie.scholars;
                this.addSeriesTranslationForm.notFilteredTags = serie.tags;
                this.series = serie.id;
                $('#addSeriesTranslation').modal('show');
            }
        },
        watch: {
            "addSeriesTranslationForm.notFilteredTags"(val){
                this.addSeriesTranslationForm.tags = [];
                this.addSeriesTranslationForm.errors.clear('tags');
                for(var i = 0; i < val.length; i++){
                    this.addSeriesTranslationForm.tags.unshift(val[i].id);
                }
            },
            "addSeriesTranslationForm.notFilteredScholars"(val){
                this.addSeriesTranslationForm.scholars = [];
                this.addSeriesTranslationForm.errors.clear('scholars');
                for(var i = 0; i < val.length; i++){
                    this.addSeriesTranslationForm.scholars.unshift(val[i].id);
                }
            },
        },
        components: {
            vSelect
        },
        mounted(){
            eventBus.$on('addSeriesTranslation', (serie, key) => this.prepareModal(serie, key))
        }
    }
</script>