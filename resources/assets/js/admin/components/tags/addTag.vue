<template>
    <div class="modal fade" id="addTagModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static pull-left">
                    <h4 class="modal-title" id="myModalLabel"> اضافة تصنيف </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onTagCreate" @keydown="form.errors.clear($event.target.name)"
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
                            <label for="name" class="label">التصنيف:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="form.name"> 

                            <span class="alert-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                        </div>

                        <div class="form-group heading">
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
        onTagCreate() {
            this.form.post(window.location.pathname)
                .then(response => eventBus.$emit('tagAdded', response));
            }
        }
    }
</script>