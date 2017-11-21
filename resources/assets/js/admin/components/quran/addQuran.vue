<template>
    <div class="modal fade" id="addQuranModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة سورة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onQuranCreate" @keydown="form.errors.clear($event.target.name)"
                    @change="form.errors.clear($event.target.name)"
                    @input="form.errors.clear($event.target.name)"
                    >
                        
                        <div v-for="(locale, key) in locales" class="form-group">
                            <label for="name[key]" class="label">الاسم بـ {{ locale.native }}:</label>
                            
                            <input type="text" id="name[key]" @input="form.errors.clear(nameKey(key))" name="name[key]" class="form-control" v-model="form.name[key]"> 

                            <span class="alert-danger" v-if="form.errors.has(nameKey(key))" v-text="form.errors.get(nameKey(key))"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholar_id" class="label">القارئ:</label>
                            
                            <v-select label="name" 
                            @input="form.errors.clear('scholar_id')" :options="scholars" id="scholar_id" name="scholar_id" v-model="form.scholar" ></v-select>

                            <span class="alert-danger" v-if="form.errors.has('scholar_id')" v-text="form.errors.get('scholar_id')"></span>
                        </div>

                        <div class="form-group">
                            <label for="recitation_id" class="label">التلاوة:</label>
                            
                            <v-select label="name" 
                            @input="form.errors.clear('recitation_id')" :options="recitations" id="recitation_id" name="recitation_id" v-model="form.recitation" ></v-select>

                            <span class="alert-danger" v-if="form.errors.has('recitation_id')" v-text="form.errors.get('recitation_id')"></span>
                        </div>

                        <div class="form-group">
                            <label for="url" class="label">رابط السورة:</label>
                            
                            <input type="text" id="url" name="url" class="form-control" v-model="form.url"> 

                            <span class="alert-danger" v-if="form.errors.has('url')" v-text="form.errors.get('url')"></span>
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
    import vSelect from "vue-select"

	export default {
        props: ['locales', 'recitations', 'scholars'],
        data() {
            return {
                form: new Form({
                    name: {},
                    url: '',
                    scholar_id: '',
                    recitation_id: '',
                    scholar: null,
                    recitation: null
                    }),
                    
                };
            },
        methods: {
        onQuranCreate() {
            this.form.post('/admincp/quran')
                .then(response => eventBus.$emit('quranAdded', response));
            },
            addQuranModal(){
                this.form.name = {};
                $('#addQuranModal').modal('show');
            },
            nameKey(key){
                return 'name.' + key;
            }
        },
          watch: {
            'form.scholar': function(val) {
                val ? this.form.scholar_id = val.scholar_id : this.form.scholar_id = '';
            },
            'form.recitation': function(val) {
                val ? this.form.recitation_id = val.recitation_id : this.form.recitation_id = ''
            }
        },
        components: {
            vSelect
        },
        mounted() {
            eventBus.$on('addQuran', event => this.addQuranModal());
        }
    }
</script>