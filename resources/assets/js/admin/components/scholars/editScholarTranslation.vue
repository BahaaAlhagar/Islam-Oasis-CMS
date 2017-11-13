<template>
    <div class="modal fade" id="editScholarTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعديل ترجمة عالم او قارئ </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="editScholarTranslationForm.errors.clear($event.target.name)"
                    @change="editScholarTranslationForm.errors.clear($event.target.name)"
                    @input="editScholarTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editScholarTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editScholarTranslationForm.errors.has('locale')" v-text="editScholarTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم العالم او القارئ:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="editScholarTranslationForm.name"> 

                            <span class="alert-danger" v-if="editScholarTranslationForm.errors.has('name')" v-text="editScholarTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="biography" class="label">السيرة الذاتية:</label>
                            
                            <textarea type="text" id="biography" name="biography" class="form-control" v-model="editScholarTranslationForm.biography" rows="5"></textarea>

                            <span class="alert-danger" v-if="editScholarTranslationForm.errors.has('biography')" v-text="editScholarTranslationForm.errors.get('biography')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="editScholarTranslationForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="editScholarTranslationForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="editScholarTranslationForm.errors.has('published')" v-text="editScholarTranslationForm.errors.get('published')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-primary" :disabled="editScholarTranslationForm.errors.any()">تعديل</button>
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
                editScholarTranslationForm: new Form({
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
                this.editScholarTranslationForm.patch(window.location.pathname + '/' + this.scholar)
                    .then(response => eventBus.$emit('scholarAdded', response));
                },
            prepareModal(translation){
                this.editScholarTranslationForm.locale = translation.locale;
                this.editScholarTranslationForm.name = translation.name;
                this.editScholarTranslationForm.biography = translation.biography;
                this.editScholarTranslationForm.published = translation.published;
                this.scholar = translation.id
                $('#editScholarTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('editScholarTranslation', translation => this.prepareModal(translation))
        }
    }
</script>