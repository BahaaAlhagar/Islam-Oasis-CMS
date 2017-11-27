<template>
    <div class="modal fade" id="editFatwaForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 v-if="type == 1" class="modal-title" id="myModalLabel"> تعديل فتوى </h4>
                    <h4 v-if="type == 2" class="modal-title" id="myModalLabel"> تعديل سؤال شائع </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onPostCreate" @keydown="editFatwaForm.errors.clear($event.target.name)"
                    @change="editFatwaForm.errors.clear($event.target.name)"
                    @input="editFatwaForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editFatwaForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editFatwaForm.errors.has('locale')" v-text="editFatwaForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="question" class="label">السؤال:</label>
                            
                            <input type="text" id="question" name="question" class="form-control" v-model="editFatwaForm.question"> 

                            <span class="alert-danger" v-if="editFatwaForm.errors.has('question')" v-text="editFatwaForm.errors.get('question')"></span>
                        </div>

                        <div class="form-group">
                            <label for="answer" class="label">الاجابة:</label>
                            
                            <trumbowyg name="editFatwaForm.answer" v-model="editFatwaForm.answer"></trumbowyg>

                            <span class="alert-danger" v-if="editFatwaForm.errors.has('answer')" v-text="editFatwaForm.errors.get('answer')"></span>
                        </div>

                        <div v-if="type == 1" class="form-group">
                            <label for="scholar_id" class="label">صاحب الفتوى (العالم):</label>
                            
                            <v-select label="name" :on-search="searchScholars" :options="scholars" placeholder="اكتب اسم المجموعة للبحث" id="scholar_id" name="scholar_id" v-model="editFatwaForm.notFilteredScholar" ></v-select>

                            <span class="alert-danger" v-if="editFatwaForm.errors.has('scholar_id')" v-text="editFatwaForm.errors.get('scholar_id')"></span>
                        </div>


                        <div class="form-group">
                            <label for="tags" class="label">تصنيفات السؤال:</label>
                            
                            <v-select label="name" placeholder="اكتب الاسم للبحث" :on-search="searchTags"
                             multiple :options="tags" id="tags" name="tags[]" v-model="editFatwaForm.notFilteredTags" ></v-select>

                            <span class="alert-danger" v-if="editFatwaForm.errors.has('tags')" v-text="editFatwaForm.errors.get('tags')"></span>
                        </div>


                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="editFatwaForm.errors.any()">تعديل</button>
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
                editFatwaForm: new Form({
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
                this.editFatwaForm.patch(`/admincp/fatwas/${this.fatwa_id}`)
                    .then(response => eventBus.$emit('fatwaAdded', response));
            },
            editFatwaModal(fatwa, translation){
                this.editFatwaForm.type = fatwa.type;
                this.editFatwaForm.notFilteredTags = fatwa.tags;
                this.editFatwaForm.notFilteredScholar = fatwa.scholar;
                this.fatwa_id = fatwa.id;
                this.editFatwaForm.locale = translation.locale;
                this.editFatwaForm.question = translation.question;
                this.editFatwaForm.answer = translation.answer;
                $('#editFatwaForm').modal('show');
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
            "editFatwaForm.notFilteredTags"(val){
                this.editFatwaForm.tags = [];
                this.editFatwaForm.errors.clear('tags');
                for(var i = 0; i < val.length; i++){
                    this.editFatwaForm.tags.unshift(val[i].id);
                }
            },
            "editFatwaForm.notFilteredScholar"(val){
                this.editFatwaForm.errors.clear('scholar_id');
                val ? this.editFatwaForm.scholar_id = val.id : this.editFatwaForm.scholar_id = '';
            },
        },
        components: {
            trumbowyg,
            vSelect
        },
        mounted(){
            eventBus.$on('editFatwa', (fatwa, translation) => this.editFatwaModal(fatwa, translation));
        }
    }
</script>