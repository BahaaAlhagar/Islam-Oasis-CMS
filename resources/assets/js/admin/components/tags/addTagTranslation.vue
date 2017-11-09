<template>
    <div class="modal fade" id="addTagTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة ترجمة لتصنيف </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="addTagTranslationForm.errors.clear($event.target.name)"
                    @change="addTagTranslationForm.errors.clear($event.target.name)"
                    @input="addTagTranslationForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addTagTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addTagTranslationForm.errors.has('locale')" v-text="addTagTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">التصنيف:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addTagTranslationForm.name"> 

                            <span class="alert-danger" v-if="addTagTranslationForm.errors.has('name')" v-text="addTagTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addTagTranslationForm.errors.any()">اضافة</button>
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
            addTagTranslationForm: new Form({
                locale: '',
                name: ''
                }),
            tag: ''
            };
        },
        methods: {
            onTranslationCreate() {
                this.addTagTranslationForm.post(window.location.pathname + '/' + this.tag)
                    .then(response => eventBus.$emit('tagAdded', response));
                },
            prepareModal(tag, key){
                this.addTagTranslationForm.locale = key;
                this.tag = tag.id
                $('#addTagTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('addTagTranslation', (tag, key) => this.prepareModal(tag, key, locale))
        }
    }
</script>