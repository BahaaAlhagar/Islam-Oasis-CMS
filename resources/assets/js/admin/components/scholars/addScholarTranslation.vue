<template>
    <div class="modal fade" id="addScholarTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة ترجمة لعالم او قارئ </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="addScholarTranslationForm.errors.clear($event.target.name)"
                    @change="addScholarTranslationForm.errors.clear($event.target.name)"
                    @input="addScholarTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addScholarTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addScholarTranslationForm.errors.has('locale')" v-text="addScholarTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم العالم او القارئ:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addScholarTranslationForm.name"> 

                            <span class="alert-danger" v-if="addScholarTranslationForm.errors.has('name')" v-text="addScholarTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="biography" class="label">السيرة الذاتية:</label>
                            
                            <textarea type="text" id="biography" name="biography" class="form-control" v-model="addScholarTranslationForm.biography" rows="5"></textarea>

                            <span class="alert-danger" v-if="addScholarTranslationForm.errors.has('biography')" v-text="addScholarTranslationForm.errors.get('biography')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="addScholarTranslationForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="addScholarTranslationForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="addScholarTranslationForm.errors.has('published')" v-text="addScholarTranslationForm.errors.get('published')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addScholarTranslationForm.errors.any()">اضافة</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        props: ['locales'],
        data() {
            return {
                addScholarTranslationForm: new Form({
                    locale: '',
                    name: '',
                    biography: '',
                    published: ''
                    }),
                scholar: ''
                };
        },
        methods: {
            onTranslationCreate() {
                this.addScholarTranslationForm.post(window.location.pathname + '/' + this.scholar)
                    .then(response => eventBus.$emit('scholarAdded', response));
                },
            prepareModal(scholar, key){
                this.addScholarTranslationForm.locale = key;
                this.scholar = scholar.id
                $('#addScholarTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('addScholarTranslation', (scholar, key) => this.prepareModal(scholar, key))
        }
    }
</script>