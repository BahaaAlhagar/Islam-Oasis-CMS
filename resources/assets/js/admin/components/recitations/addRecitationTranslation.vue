<template>
    <div class="modal fade" id="addRecitationTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة ترجمة لرواية </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="addRecitationTranslationForm.errors.clear($event.target.name)"
                    @change="addRecitationTranslationForm.errors.clear($event.target.name)"
                    @input="addRecitationTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addRecitationTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addRecitationTranslationForm.errors.has('locale')" v-text="addRecitationTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">الرواية:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addRecitationTranslationForm.name"> 

                            <span class="alert-danger" v-if="addRecitationTranslationForm.errors.has('name')" v-text="addRecitationTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="btn-lg btn-success" :disabled="addRecitationTranslationForm.errors.any()">اضافة</button>
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
            addRecitationTranslationForm: new Form({
                locale: '',
                name: ''
                }),
            recitation: ''
            };
        },
        methods: {
            onTranslationCreate() {
                this.addRecitationTranslationForm.post(window.location.pathname + '/' + this.recitation)
                    .then(response => eventBus.$emit('recitationAdded', response));
                },
            prepareModal(recitation, key){
                this.addRecitationTranslationForm.locale = key;
                this.recitation = recitation.id
                $('#addRecitationTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('addRecitationTranslation', (recitation, key) => this.prepareModal(recitation, key, locale))
        }
    }
</script>