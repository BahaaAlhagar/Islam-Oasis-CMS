<template>
    <div class="modal fade" id="editQuranModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تعــديــل سورة </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onQuranUpdate" @keydown="editForm.errors.clear($event.target.name)"
                    @change="editForm.errors.clear($event.target.name)"
                    @input="editForm.errors.clear($event.target.name)"
                    >
                        
                        <div v-for="(locale, key) in locales" class="form-group">
                            <label for="name[key]" class="label">الاسم بـ {{ locale.native }}:</label>
                            
                            <input type="text" id="name[key]" @input="editForm.errors.clear(nameKey(key))" name="name[key]" class="form-control" v-model="editForm.name[key]"> 

                            <span class="alert-danger" v-if="editForm.errors.has(nameKey(key))" v-text="editForm.errors.get(nameKey(key))"></span>
                        </div>

                        <div class="form-group">
                            <label for="scholar_id" class="label">القارئ:</label>
                            
                            <v-select label="name" 
                            @input="editForm.errors.clear('scholar_id')" :options="scholars" id="scholar_id" name="scholar_id" v-model="editForm.scholar" ></v-select>

                            <span class="alert-danger" v-if="editForm.errors.has('scholar_id')" v-text="editForm.errors.get('scholar_id')"></span>
                        </div>

                        <div class="form-group">
                            <label for="recitation_id" class="label">التلاوة:</label>
                            
                            <v-select label="name" 
                            @input="editForm.errors.clear('recitation_id')" :options="recitations" id="recitation_id" name="recitation_id" v-model="editForm.recitation" ></v-select>

                            <span class="alert-danger" v-if="editForm.errors.has('recitation_id')" v-text="editForm.errors.get('recitation_id')"></span>
                        </div>

                        <div class="form-group">
                            <label for="url" class="label">رابط السورة:</label>
                            
                            <input type="text" id="url" name="url" class="form-control" v-model="editForm.url"> 

                            <span class="alert-danger" v-if="editForm.errors.has('url')" v-text="editForm.errors.get('url')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="editForm.errors.any()">تعــديــل</button>
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
                editForm: new Form({
                    name: {},
                    url: '',
                    scholar_id: '',
                    recitation_id: '',
                    scholar: null,
                    recitation: null
                    }),
                    quran_id: ''
                };
            },
        methods: {
        onQuranUpdate() {
            this.editForm.patch(`/admincp/quran/${this.quran_id}`)
                .then(response => eventBus.$emit('quranAdded', response));
            },
            editQuranModal(quran){
                let trans = quran.translations;
                for (var i = 0; i < trans.length; i++) {
                    this.editForm.name[trans[i].locale] = trans[i].name;
                }

                this.quran_id = quran.id;
                this.editForm.scholar = quran.scholar;
                this.editForm.recitation = quran.recitation;
                quran.link ? this.editForm.url = quran.link.url : this.editForm.url = '';
                
                $('#editQuranModal').modal('show');
            },
            nameKey(key){
                return 'name.' + key;
            }
        },
          watch: {
            'editForm.scholar': function(val) {
                val ? this.editForm.scholar_id = val.scholar_id : this.editForm.scholar_id = '';
            },
            'editForm.recitation': function(val) {
                val ? this.editForm.recitation_id = val.recitation_id : this.editForm.recitation_id = ''
            }
        },
        components: {
            vSelect
        },
        mounted() {
            eventBus.$on('editQuran', quran => this.editQuranModal(quran));
        }
    }
</script>