<template>
    <div class="modal fade" id="addTranslationForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 v-if="type == 1" class="modal-title" id="myModalLabel"> اضافة ترجمة فتوى </h4>
                    <h4 v-if="type == 2" class="modal-title" id="myModalLabel"> اضافة ترجمة سؤال شائع </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onPostCreate" @keydown="addTranslationForm.errors.clear($event.target.name)"
                    @change="addTranslationForm.errors.clear($event.target.name)"
                    @input="addTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addTranslationForm.errors.has('locale')" v-text="addTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="question" class="label">السؤال:</label>
                            
                            <input type="text" id="question" name="question" class="form-control" v-model="addTranslationForm.question"> 

                            <span class="alert-danger" v-if="addTranslationForm.errors.has('question')" v-text="addTranslationForm.errors.get('question')"></span>
                        </div>

                        <div class="form-group">
                            <label for="answer" class="label">الاجابة:</label>
                            
                            <trumbowyg name="addTranslationForm.answer" v-model="addTranslationForm.answer"></trumbowyg>

                            <span class="alert-danger" v-if="addTranslationForm.errors.has('answer')" v-text="addTranslationForm.errors.get('answer')"></span>
                        </div>

                        <div v-if="type == 1" class="form-group">
                            <label for="scholar_id" class="label">صاحب الفتوى (العالم):</label>
                            
                            <v-select label="name" :on-search="searchScholars" :options="scholars" placeholder="اكتب اسم المجموعة للبحث" id="scholar_id" name="scholar_id" v-model="addTranslationForm.notFilteredScholar" ></v-select>

                            <span class="alert-danger" v-if="addTranslationForm.errors.has('scholar_id')" v-text="addTranslationForm.errors.get('scholar_id')"></span>
                        </div>


                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات السؤال:</label>
                            
                            <v-select label="name" placeholder="اكتب الاسم للبحث" :on-search="searchTags"
                             multiple :options="tags" id="tags" name="tags[]" v-model="addTranslationForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="addTranslationForm.errors.has('tags')" v-text="addTranslationForm.errors.get('tags')"></span>
                        </div>


                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addTranslationForm.errors.any()">اضافة ترجمة</button>
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
    import _ from 'lodash';

    import vSelect from "vue-select"

	export default {
        props: ['locales', 'type'],
        data() {
            return {
                addTranslationForm: new Form({
                    type: '',
                    locale: '',
                    question: '',
                    answer: '',
                    scholar_id: '',
                    tags: '',
                    notFilteredTags: '',
                    notFilteredScholar: ''
                    }),
                    tags: [],
                    scholars: [],
                    fatwa_id: ''
                };
        },
        methods: {
            onPostCreate() {
                this.addTranslationForm.post(`/admincp/fatwas/${this.fatwa_id}`)
                    .then(response => eventBus.$emit('fatwaAdded', response));
            },
            addFatwaTranslationModal(fatwa, key){
                this.addTranslationForm.type = fatwa.type;
                this.addTranslationForm.notFilteredTags = fatwa.tags;
                this.addTranslationForm.notFilteredScholar = fatwa.scholar;
                this.fatwa_id = fatwa.id;
                this.addTranslationForm.locale = key;
                $('#addTranslationForm').modal('show');
            },
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
            }, 1000)
        },
        watch: {
            "addTranslationForm.notFilteredTags"(val){
                this.addTranslationForm.tags = [];
                this.addTranslationForm.errors.clear('tags');
                for(var i = 0; i < val.length; i++){
                    this.addTranslationForm.tags.unshift(val[i].id);
                }
            },
            "addTranslationForm.notFilteredScholar"(val){
                this.addTranslationForm.errors.clear('scholar_id');
                val ? this.addTranslationForm.scholar_id = val.id : this.addTranslationForm.scholar_id = '';
            },
        },
        components: {
            trumbowyg,
            vSelect
        },
        mounted(){
            eventBus.$on('addFatwaTranslation', (fatwa, key) => this.addFatwaTranslationModal(fatwa, key));
        }
    }
</script>