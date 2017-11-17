<template>
    <div class="modal fade" id="editRecitationTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعديل ترجمة لرواية او قراءة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="editRecitationTranslationForm.errors.clear($event.target.name)"
                    @change="editRecitationTranslationForm.errors.clear($event.target.name)"
                    @input="editRecitationTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editRecitationTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editRecitationTranslationForm.errors.has('locale')" v-text="editRecitationTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">الرواية:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="editRecitationTranslationForm.name"> 

                            <span class="alert-danger" v-if="editRecitationTranslationForm.errors.has('name')" v-text="editRecitationTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="btn-lg btn-primary" :disabled="editRecitationTranslationForm.errors.any()">تعديل</button>
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
            editRecitationTranslationForm: new Form({
                locale: '',
                name: ''
                }),
            recitation: ''
            };
        },
        methods: {
            onTranslationCreate() {
                this.editRecitationTranslationForm.patch(window.location.pathname + '/' + this.recitation)
                    .then(response => eventBus.$emit('recitationAdded', response));
                },
            prepareModal(translation){
                this.editRecitationTranslationForm.locale = translation.locale;
                this.editRecitationTranslationForm.name = translation.name;
                this.recitation = translation.id
                $('#editRecitationTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('editRecitationTranslation', translation => this.prepareModal(translation))
        }
    }
</script>