<template>
    <div class="modal fade" id="addScholarModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> اضافة عالم او قارئ </h4>
                </span>
              </div>

              <div class="modal-body">
                    <form method="POST" action="/" @submit.prevent="onScholarCreate" @keydown="addScholarForm.errors.clear($event.target.name)"
                    @change="addScholarForm.errors.clear($event.target.name)"
                    @input="addScholarForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <label for="locale" class="label">اللغة:</label>

                            <select id="locale" name="locale" class="form-control" v-model="addScholarForm.locale">
                                <option v-for="(locale, key) in locales" :value="key">{{ locale.native }}</option>
                            </select>

                            <span class="alert-danger" v-if="addScholarForm.errors.has('locale')" v-text="addScholarForm.errors.get('locale')"></span>
                        </div>
                        
                        <div class="form-group">
                            <label for="name" class="label">اسم العالم او القارئ:</label>
                            
                            <input type="text" id="name" name="name" class="form-control" v-model="addScholarForm.name"> 

                            <span class="alert-danger" v-if="addScholarForm.errors.has('name')" v-text="addScholarForm.errors.get('name')"></span>
                        </div>

                        <div class="form-group">
                            <label for="biography" class="label">السيرة الذاتية:</label>
                            
                            <textarea type="text" id="biography" name="biography" class="form-control" v-model="addScholarForm.biography" rows="5"></textarea>

                            <span class="alert-danger" v-if="addScholarForm.errors.has('biography')" v-text="addScholarForm.errors.get('biography')"></span>
                        </div>

                        <div class="form-group">
                            <label for="published" class="label">حالة النشر:</label>
                            
                            <input type="radio" id="published" value="1" v-model.number="addScholarForm.published">
                            <label>نعم <i class="fa fa-check green" aria-hidden="true"></i></label>

                            <input type="radio" id="published" value="0" v-model.number="addScholarForm.published">
                            <label>لا <i class="fa fa-close red" aria-hidden="true"></i></label>
                            <br>

                            <span class="alert-danger" v-if="addScholarForm.errors.has('published')" v-text="addScholarForm.errors.get('published')"></span>
                        </div>

                        <div class="form-group text-center">
                            <button class="button btn-lg btn-success" :disabled="addScholarForm.errors.any()">اضافة</button>
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
                addScholarForm: new Form({
                    locale: '',
                    name: '',
                    biography: '',
                    published: ''
                    })
                };
        },
        methods: {
        onScholarCreate() {
            this.addScholarForm.post(window.location.pathname)
                .then(response => eventBus.$emit('scholarAdded', response));
            }
        }
    }
</script>