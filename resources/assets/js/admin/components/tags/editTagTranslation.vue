<template>
    <div class="modal fade" id="editTagTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعديل ترجمة لتصنيف </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="editTagTranslationForm.errors.clear($event.target.name)"
                    @change="editTagTranslationForm.errors.clear($event.target.name)"
                    @input="editTagTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editTagTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editTagTranslationForm.errors.has('locale')" v-text="editTagTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">التصنيف:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="editTagTranslationForm.name"> 

                            <span class="alert-danger" v-if="editTagTranslationForm.errors.has('name')" v-text="editTagTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-primary" :disabled="editTagTranslationForm.errors.any()">تعديل</button>
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
            editTagTranslationForm: new Form({
                locale: '',
                name: ''
                }),
            tag: ''
            };
        },
        methods: {
            onTranslationCreate() {
                this.editTagTranslationForm.patch(window.location.pathname + '/' + this.tag)
                    .then(response => eventBus.$emit('tagAdded', response));
                },
            prepareModal(translation){
                this.editTagTranslationForm.locale = translation.locale;
                this.editTagTranslationForm.name = translation.name;
                this.tag = translation.id
                $('#editTagTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('editTagTranslation', translation => this.prepareModal(translation))
        }
    }
</script>