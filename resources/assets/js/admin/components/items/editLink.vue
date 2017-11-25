<template>
    <div class="modal fade" id="editLink" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعديل رابط تحميل </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onLinkCreate" @keydown="editLinkForm.errors.clear($event.target.name)"
                    @change="editLinkForm.errors.clear($event.target.name)"
                    @input="editLinkForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="editLinkForm.locale">
                                <option value="">كل اللغات</option>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="editLinkForm.errors.has('locale')" v-text="editLinkForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="url" class="label">الرابط:</label>
                            
                            <input type="text" id="url" name="url" class="form-control" v-model="editLinkForm.url"> 

                            <span class="alert-danger" v-if="editLinkForm.errors.has('url')" v-text="editLinkForm.errors.get('url')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="btn-lg btn-success" :disabled="editLinkForm.errors.any()">تعديل</button>
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
            editLinkForm: new Form({
                locale: '',
                url: ''
                }),
            link: ''
            };
        },
        methods: {
            onLinkCreate() {
                this.editLinkForm.patch(`/admincp/links/${this.link}`)
                    .then(response => eventBus.$emit('itemAdded', response));
                },
            prepareModal(link){
                this.link = link.id;
                this.editLinkForm.locale = link.locale;
                this.editLinkForm.url = link.url;
                $('#editLink').modal('show');
            }
        },
        mounted(){
            eventBus.$on('editLink', (link) => this.prepareModal(link))
        }
    }
</script>