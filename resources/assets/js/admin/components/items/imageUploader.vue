<template>
    <div class="modal fade" id="imageUploaderForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">

          <div class="modal-dialog" role="document">

            <div class="modal-content">

              <div class="modal-header">

                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <span class="form-control-static text-center">
                    <h4 class="modal-title" id="myModalLabel"> تحديث صورة لملف او كتاب </h4>
                </span>
              </div>

              <div class="modal-body text-center">
              		<div style="margin-bottom: 15px;">
	              		<img v-if="avatar" :src="avatar" width="350" height="350">
	              		<img v-else src="/storage/item.png" width="350" height="350">
              		</div>

                    <form method="POST" action="/" enctype="multipart/form-data" @submit.prevent="onPostCreate" @keydown="imageUploaderForm.errors.clear($event.target.name)"
                    @change="imageUploaderForm.errors.clear($event.target.name)"
                    @input="imageUploaderForm.errors.clear($event.target.name)"
                    >
                        <div class="form-group">
                            <input class="form-control" type="file" name="photo" accept="image/*" @change="onChange">

                            <span class="alert-danger" v-if="imageUploaderForm.errors.has('photo')" v-text="imageUploaderForm.errors.get('photo')"></span>
                        </div>
                        
                        <div class="form-group text-center">
                            <button class="btn-lg btn-primary" :disabled="imageUploaderForm.errors.any()">تحديث</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        data() {
        return {
            imageUploaderForm: new DataForm({
                	photo: ''
                }),
            	avatar: '',
            	item_id: ''
            };
        },
        methods: {
            onPostCreate() {
                this.imageUploaderForm.post(`/admincp/items/${this.item_id}/photo`)
                    .then(response => eventBus.$emit('itemAdded', response));
            },
            imageUploaderModal(item){
                if(item.photo){
                    this.avatar = '/storage/' + item.photo.link;
                } else {
                    this.avatar = '/storage/item.png';
                }

                this.item_id = item.id;
                $('#imageUploaderForm').modal('show');
            },
            onChange(e) {
                if (! e.target.files.length) return;

                let file = e.target.files[0];

                let reader = new FileReader();

                reader.readAsDataURL(file);

                reader.onload = e => {
                    let src = e.target.result;

                    this.onLoad(src, file);
            	}
            },
            onLoad(src, file){
            	this.avatar = src;
            	this.imageUploaderForm.photo = file;
            }
        },
        mounted(){
            eventBus.$on('imageUploader', item => this.imageUploaderModal(item));
        }
    }
</script>