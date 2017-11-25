<template>
    <div class="modal fade" id="addItemTranslation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة ترجمة لملف ميديا او كتاب </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTranslationCreate" @keydown="addItemTranslationForm.errors.clear($event.target.name)"
                    @change="addItemTranslationForm.errors.clear($event.target.name)"
                    @input="addItemTranslationForm.errors.clear($event.target.name)"
                    >

                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addItemTranslationForm.locale" disabled>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addItemTranslationForm.errors.has('locale')" v-text="addItemTranslationForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم الملف:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addItemTranslationForm.name"> 

                            <span class="alert-danger" v-if="addItemTranslationForm.errors.has('name')" v-text="addItemTranslationForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="language" class="label">لغة الملف:</label>
                            
                            <input type="text" id="language" name="language" class="form-control" v-model="addItemTranslationForm.language">

                            <span class="alert-danger" v-if="addItemTranslationForm.errors.has('language')" v-text="addItemTranslationForm.errors.get('language')"></span>
                        </div>

                        <div class="form-group">
                            <label for="description" class="label">وصف الملف:</label>
                            
                            <textarea type="text" id="description" name="description" class="form-control" v-model="addItemTranslationForm.description" rows="5"></textarea>

                            <span class="alert-danger" v-if="addItemTranslationForm.errors.has('description')" v-text="addItemTranslationForm.errors.get('description')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addItemTranslationForm.errors.any()">اضافة</button>
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
                addItemTranslationForm: new Form({
                    locale: '',
                    name: '',
                    language: '',
                    description: ''
                    }),
                    item_id: ''
                };
        },
        methods: {
        onTranslationCreate(){
            this.addItemTranslationForm.post(window.location.pathname + '/' + this.item_id)
                .then(response => eventBus.$emit('itemAdded', response));
            },
        prepareModal(item, key){
            this.addItemTranslationForm.locale = key;
            this.item_id = item.id;
            $('#addItemTranslation').modal('show');
            }
        },
        mounted(){
            eventBus.$on('addItemTranslation', (item, key) => this.prepareModal(item, key));
        }
    }
</script>