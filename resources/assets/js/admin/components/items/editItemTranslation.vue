<template>
    <div class="modal fade" id="editItemTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعديل ملف ميديا او كتاب </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onItemCreate" @keydown="editItemTranslationForm.errors.clear($event.target.name)"
                    @change="editItemTranslationForm.errors.clear($event.target.name)"
                    @input="editItemTranslationForm.errors.clear($event.target.name)"
                    >

                        <div class="form-group">
                            <label for="type" class="label">نوع الملف:</label>
                            
                            <select id="type" name="type" class="form-control" v-model="editItemTranslationForm.type">
                                <option value="1">كتاب</option>
                                <option value="2">نشيد</option>
                                <option value="3">فيديو</option>
                                <option value="4">محاضرة صوتية</option>
                                <option value="5">دعاء</option>
                            </select>

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('type')" v-text="editItemTranslationForm.errors.get('type')"></span>
                        </div>

                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editItemTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('locale')" v-text="editItemTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم الملف:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="editItemTranslationForm.name"> 

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('name')" v-text="editItemTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="language" class="label">لغة الملف:</label>
                            
                            <input type="text" id="language" name="language" class="form-control" v-model="editItemTranslationForm.language">

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('language')" v-text="editItemTranslationForm.errors.get('language')"></span>
                        </div>

                        <div class="form-group">
                            <label for="description" class="label">وصف الملف:</label>
                            
                            <textarea type="text" id="description" name="description" class="form-control" v-model="editItemTranslationForm.description" rows="5"></textarea>

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('description')" v-text="editItemTranslationForm.errors.get('description')"></span>
                        </div>

                        <div class="form-group">
                            <label for="series_id" class="label">المجموعة او المسلسل:</label>
                            
                            <v-select label="name" :on-search="searchSeries" :options="typeBasedSeries" placeholder="اكتب اسم المجموعة للبحث" id="series_id" name="series_id" v-model="editItemTranslationForm.notFilteredSeries" ></v-select>

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('series_id')" v-text="editItemTranslationForm.errors.get('series_id')"></span>
                        </div>

                        <div class="form-group">
                            <label for="order" class="label">رقم الملف فى المجموعة او المسلسل:</label>
                            
                            <input type="text" id="order" name="order" class="form-control" v-model="editItemTranslationForm.order">

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('order')" v-text="editItemTranslationForm.errors.get('order')"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholars" class="label">مؤلفى او مقدمى الملف (العلماء):</label>
                            
                            <v-select label="name" placeholder="اكتب الاسم للبحث" :on-search="searchScholars"
                             multiple :options="scholars" id="scholars" name="scholars[]" v-model="editItemTranslationForm.notFilteredScholars" ></v-select>

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('scholars')" v-text="editItemTranslationForm.errors.get('scholars')"></span>
                        </div>

                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات الملف:</label>
                            
                            <v-select label="name" placeholder="اكتب الاسم للبحث" :on-search="searchTags"
                             multiple :options="tags" id="tags" name="tags[]" v-model="editItemTranslationForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="editItemTranslationForm.errors.has('tags')" v-text="editItemTranslationForm.errors.get('tags')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="editItemTranslationForm.errors.any()">تعديل</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import vSelect from "vue-select";

	export default {
        props: ['locales'],
        data() {
            return {
                editItemTranslationForm: new Form({
                    type: '',
                    locale: '',
                    name: '',
                    language: '',
                    description: '',
                    scholars: [],
                    tags: [],
                    series_id: '',
                    order: '',
                    notFilteredScholars: [],
                    notFilteredTags: [],
                    notFilteredSeries: '',
                    }),
                    typeBasedSeries: [],
                    tags: [],
                    scholars: [],
                    item_id: ''
                };
        },
        methods: {
            onItemCreate(){
                this.editItemTranslationForm.patch(window.location.pathname + '/' + this.item_id)
                    .then(response => eventBus.$emit('itemAdded', response));
            },
            searchSeries(search, loading){
                loading(true);
                this.getSeries(search, loading, this);
            },
            getSeries: _.debounce((search, loading, vm) => {
                    var searchUrl = '';
                    vm.editItemTranslationForm.type ? searchUrl = `/admincp/search/series/${search}/${vm.editItemTranslationForm.type}` : searchUrl = `/admincp/search/series/${search}`;
                    axios.get(searchUrl)
                        .then(resp => {
                           vm.typeBasedSeries = resp.data
                           loading(false)
                        })
            }, 1000),
            searchScholars(search, loading){
                loading(true);
                this.getScholars(search, loading, this);
            },
            getScholars: _.debounce((search, loading, vm) => {
                    axios.get(`/admincp/search/scholars/${search}`)
                        .then(resp => {
                           vm.scholars = resp.data
                           loading(false)
                        })
            }, 1000),
            searchTags(search, loading){
                loading(true);
                this.getTags(search, loading, this);
            },
            getTags: _.debounce((search, loading, vm) => {
                    axios.get(`/admincp/search/tags/${search}`)
                        .then(resp => {
                           vm.tags = resp.data
                           loading(false)
                        })
            }, 1000),
            prepareModal(translation, item){
                this.editItemTranslationForm.locale = translation.locale;
                this.editItemTranslationForm.name = translation.name;
                this.editItemTranslationForm.description = translation.description;
                this.editItemTranslationForm.language = translation.language;

                this.editItemTranslationForm.type = item.type;
                this.editItemTranslationForm.order = item.order;
                this.editItemTranslationForm.notFilteredScholars = item.scholars;
                this.editItemTranslationForm.notFilteredTags = item.tags;
                this.editItemTranslationForm.notFilteredSeries = item.series;
                this.item_id = item.id;
                $('#editItemTranslation').modal('show');
            }
        },
        watch: {
            "editItemTranslationForm.notFilteredTags"(val){
                this.editItemTranslationForm.tags = [];
                this.editItemTranslationForm.errors.clear('tags');
                this.editItemTranslationForm.errors.clear('series_id');
                for(var i = 0; i < val.length; i++){
                    this.editItemTranslationForm.tags.unshift(val[i].id);
                }
            },
            "editItemTranslationForm.notFilteredScholars"(val){
                this.editItemTranslationForm.scholars = [];
                this.editItemTranslationForm.errors.clear('scholars');
                this.editItemTranslationForm.errors.clear('series_id');
                for(var i = 0; i < val.length; i++){
                    this.editItemTranslationForm.scholars.unshift(val[i].id);
                }
            },
            "editItemTranslationForm.notFilteredSeries"(val){
                this.editItemTranslationForm.errors.clear('series_id');
                this.editItemTranslationForm.errors.clear('scholars');
                this.editItemTranslationForm.errors.clear('tags');
                val ? this.editItemTranslationForm.series_id = val.id : this.editItemTranslationForm.series_id = '';
            },
            "editItemTranslationForm.type"(val){
                if(this.editItemTranslationForm.notFilteredSeries && this.editItemTranslationForm.notFilteredSeries.type != val){
                    this.editItemTranslationForm.notFilteredSeries = '';
                }
            }
        },
        components: {
            vSelect
        },
        mounted(){
            eventBus.$on('editItemTranslation', (translation, item) => this.prepareModal(translation, item));
        }
    }
</script>