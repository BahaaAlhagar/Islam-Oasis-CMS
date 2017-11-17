<template>
    <div class="modal fade" id="addRecitationModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة رواية او قراءة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onRecitationCreate" @keydown="form.errors.clear($event.target.name)"
                    @change="form.errors.clear($event.target.name)"
                    @input="form.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="form.locale">
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="form.errors.has('locale')" v-text="form.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">الرواية:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="form.name"> 

                            <span class="alert-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="form.errors.any()">اضافة</button>
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
            form: new Form({
                locale: '',
                name: ''
                })
            };
        },
        methods: {
        onRecitationCreate() {
            this.form.post(window.location.pathname)
                .then(response => eventBus.$emit('recitationAdded', response));
            }
        }
    }
</script>