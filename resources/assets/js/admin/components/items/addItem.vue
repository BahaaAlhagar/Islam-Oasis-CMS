<template>
    <div class="modal fade" id="addItemModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة ملف ميديا او كتاب </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onItemCreate" @keydown="addItemForm.errors.clear($event.target.name)"
                    @change="addItemForm.errors.clear($event.target.name)"
                    @input="addItemForm.errors.clear($event.target.name)"
                    >

                        <div class="form-group">
                            <label for="type" class="label">نوع الملف:</label>
                            
                            <select id="type" name="type" class="form-control" v-model="addItemForm.type">
                                <option value="1">كتاب</option>
                                <option value="2">نشيد</option>
                                <option value="3">فيديو</option>
                                <option value="4">محاضرة صوتية</option>
                                <option value="5">دعاء</option>
                            </select>

                            <span class="alert-danger" v-if="addItemForm.errors.has('type')" v-text="addItemForm.errors.get('type')"></span>
                        </div>

                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addItemForm.locale">
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addItemForm.errors.has('locale')" v-text="addItemForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم الملف:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addItemForm.name"> 

                            <span class="alert-danger" v-if="addItemForm.errors.has('name')" v-text="addItemForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="language" class="label">لغة الملف:</label>
                            
                            <input type="text" id="language" name="language" class="form-control" v-model="addItemForm.language">

                            <span class="alert-danger" v-if="addItemForm.errors.has('language')" v-text="addItemForm.errors.get('language')"></span>
                        </div>

                        <div class="form-group">
                            <label for="description" class="label">وصف الملف:</label>
                            
                            <textarea type="text" id="description" name="description" class="form-control" v-model="addItemForm.description" rows="5"></textarea>

                            <span class="alert-danger" v-if="addItemForm.errors.has('description')" v-text="addItemForm.errors.get('description')"></span>
                        </div>

                        <div class="form-group">
                            <label for="series_id" class="label">المجموعة او المسلسل:</label>
                            
                            <v-select label="name" :on-search="searchSeries" :options="typeBasedSeries" placeholder="اكتب اسم المجموعة للبحث" id="series_id" name="series_id" v-model="addItemForm.notFilteredSeries" ></v-select>

                            <span class="alert-danger" v-if="addItemForm.errors.has('series_id')" v-text="addItemForm.errors.get('series_id')"></span>
                        </div>

                        <div class="form-group">
                            <label for="order" class="label">رقم الملف فى المجموعة او المسلسل:</label>
                            
                            <input type="text" id="order" name="order" class="form-control" v-model="addItemForm.order">

                            <span class="alert-danger" v-if="addItemForm.errors.has('order')" v-text="addItemForm.errors.get('order')"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholars" class="label">مؤلفى او مقدمى الملف (العلماء):</label>
                            
                            <v-select label="name" placeholder="اكتب الاسم للبحث" :on-search="searchScholars"
                             multiple :options="scholars" id="scholars" name="scholars[]" v-model="addItemForm.notFilteredScholars" ></v-select>

                            <span class="alert-danger" v-if="addItemForm.errors.has('scholars')" v-text="addItemForm.errors.get('scholars')"></span>
                        </div>

                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات الملف:</label>
                            
                            <v-select label="name" placeholder="اكتب الاسم للبحث" :on-search="searchTags"
                             multiple :options="tags" id="tags" name="tags[]" v-model="addItemForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="addItemForm.errors.has('tags')" v-text="addItemForm.errors.get('tags')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addItemForm.errors.any()">اضافة</button>
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
                addItemForm: new Form({
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
                    scholars: []
                };
        },
        methods: {
        onItemCreate(){
            this.addItemForm.post(window.location.pathname)
                .then(response => eventBus.$emit('itemAdded', response));
            },
        searchSeries(search, loading){
            loading(true);
            this.getSeries(search, loading, this);
            },
        getSeries: _.debounce((search, loading, vm) => {
                var searchUrl = '';
                vm.addItemForm.type ? searchUrl = `/admincp/search/series/${search}/${vm.addItemForm.type}` : searchUrl = `/admincp/search/series/${search}`;
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
        },
        watch: {
            "addItemForm.notFilteredTags"(val){
                this.addItemForm.tags = [];
                this.addItemForm.errors.clear('tags');
                this.addItemForm.errors.clear('series_id');
                for(var i = 0; i < val.length; i++){
                    this.addItemForm.tags.unshift(val[i].id);
                }
            },
            "addItemForm.notFilteredScholars"(val){
                this.addItemForm.scholars = [];
                this.addItemForm.errors.clear('scholars');
                this.addItemForm.errors.clear('series_id');
                for(var i = 0; i < val.length; i++){
                    this.addItemForm.scholars.unshift(val[i].id);
                }
            },
            "addItemForm.notFilteredSeries"(val){
                this.addItemForm.errors.clear('series_id');
                this.addItemForm.errors.clear('scholars');
                this.addItemForm.errors.clear('tags');
                val ? this.addItemForm.series_id = val.id : this.addItemForm.series_id = '';
            },
            "addItemForm.type"(val){
                if(this.addItemForm.notFilteredSeries && this.addItemForm.notFilteredSeries.type != val){
                    this.addItemForm.notFilteredSeries = '';
                }
            }
        },
        components: {
            vSelect
        }
    }
</script>