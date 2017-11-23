<template>
    <div class="modal fade" id="addSeriesModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة مجموعة او مسلسل </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onScholarCreate" @keydown="addSeriesForm.errors.clear($event.target.name)"
                    @change="addSeriesForm.errors.clear($event.target.name)"
                    @input="addSeriesForm.errors.clear($event.target.name)"
                    >

                        <div class="form-group">
                            <label for="type" class="label">نوع المجموعة:</label>
                            
                            <select id="type" name="type" class="form-control" v-model="addSeriesForm.type">
                                <option value="1">مجموعة كتب</option>
                                <option value="2">مجموعة اناشيد</option>
                                <option value="3">مجموعة فيديو</option>
                                <option value="4">مجموعة محاضرات صوتية</option>
                                <option value="5">مجموعة ادعية</option>
                            </select>

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('type')" v-text="addSeriesForm.errors.get('type')"></span>
                        </div>

                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addSeriesForm.locale">
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('locale')" v-text="addSeriesForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم المجموعة:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addSeriesForm.name"> 

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('name')" v-text="addSeriesForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="descriprtion" class="label">وصف المجموعة:</label>
                            
                            <textarea type="text" id="descriprtion" name="descriprtion" class="form-control" v-model="addSeriesForm.descriprtion" rows="5"></textarea>

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('descriprtion')" v-text="addSeriesForm.errors.get('descriprtion')"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholars" class="label">مؤلفى او مقدمى المجموعة (العلماء):</label>
                            
                            <v-select label="name" 
                             multiple :options="scholars" id="scholars" name="scholars[]" v-model="addSeriesForm.notFilteredScholars" ></v-select>

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('scholars')" v-text="addSeriesForm.errors.get('scholars')"></span>
                        </div>

                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات المجموعة:</label>
                            
                            <v-select label="name" 
                             multiple :options="tags" id="tags" name="tags[]" v-model="addSeriesForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('tags')" v-text="addSeriesForm.errors.get('tags')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="addSeriesForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="addSeriesForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="addSeriesForm.errors.has('published')" v-text="addSeriesForm.errors.get('published')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addSeriesForm.errors.any()">اضافة</button>
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
                addSeriesForm: new Form({
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
                };
        },
        methods: {
        onScholarCreate() {
            this.addSeriesForm.post(window.location.pathname)
                .then(response => eventBus.$emit('seriesAdded', response));
            }
        },
        watch: {
            "addSeriesForm.notFilteredTags"(val){
                this.addSeriesForm.tags = [];
                this.addSeriesForm.errors.clear('tags');
                for(var i = 0; i < val.length; i++){
                    this.addSeriesForm.tags.unshift(val[i].id);
                }
            },
            "addSeriesForm.notFilteredScholars"(val){
                this.addSeriesForm.scholars = [];
                this.addSeriesForm.errors.clear('scholars');
                for(var i = 0; i < val.length; i++){
                    this.addSeriesForm.scholars.unshift(val[i].id);
                }
            },
        },
        components: {
            vSelect
        }
    }
</script>