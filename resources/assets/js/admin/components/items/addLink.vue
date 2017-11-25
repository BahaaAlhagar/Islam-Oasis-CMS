<template>
    <div class="modal fade" id="addLink" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة رابط تحميل </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onLinkCreate" @keydown="addLinkForm.errors.clear($event.target.name)"
                    @change="addLinkForm.errors.clear($event.target.name)"
                    @input="addLinkForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addLinkForm.locale">
                                <option value="">كل اللغات</option>
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addLinkForm.errors.has('locale')" v-text="addLinkForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="url" class="label">الرابط:</label>
                            
                            <input type="text" id="url" name="url" class="form-control" v-model="addLinkForm.url"> 

                            <span class="alert-danger" v-if="addLinkForm.errors.has('url')" v-text="addLinkForm.errors.get('url')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="btn-lg btn-success" :disabled="addLinkForm.errors.any()">اضافة</button>
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
            addLinkForm: new Form({
                locale: '',
                url: ''
                }),
            item: ''
            };
        },
        methods: {
            onLinkCreate() {
                this.addLinkForm.post(`/admincp/items/${this.item}/links`)
                    .then(response => eventBus.$emit('itemAdded', response));
                },
            prepareModal(item){
                this.item = item.id
                $('#addLink').modal('show');
            }
        },
        mounted(){
            eventBus.$on('addLink', item => this.prepareModal(item))
        }
    }
</script>