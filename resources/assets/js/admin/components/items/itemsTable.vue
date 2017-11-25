<template>
	<div>
        <table v-if="items.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th>
                        غلاف الملف او الكتاب
                    </th>
                    <th>
                        اصحاب الملف او الكتاب
                    </th>
                    <th>
                        التصنيفات
                    </th>
                    <th>
                        المجموعة
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td v-for="(locale, key) in locales">
                        <span v-for="translation in item.translations" v-if="translation.locale == key">
                            {{ translation.name }}
                            <div class="pull-left">
                                <button @click="editTranslation(translation, item)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </div>

                            <!-- translation publishing status -->
                            <div>
                                <i v-if="!translation.published"class="fa fa-close red" aria-hidden="true"></i>
                                <i v-if="translation.published"class="fa fa-check green" aria-hidden="true"></i>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, item)">
                             <button @click="addTranslation(item, key, locale)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <img v-if="!item.photo" src="/storage/item.png" width="50" height="50">
                        <img v-else :src="'/storage/' + item.photo.thumbnail" width="50" height="50">
                        <button class="btn btn-success" @click="changeImage(item)">تعديل الصورة</button>
                    </td>
                    <td>
                        <div v-for="scholar in item.scholars">
                            <span class="alert-success">
                                {{ scholar.name }}
                            </span>
                            <hr>
                        </div>
                    </td>
                    <td>
                        <div v-for="tag in item.tags">
                            <span class="alert-success">
                                {{ tag.name }}
                            </span>
                            <hr>
                        </div>
                    </td>
                    <td>
                        <span v-if="item.series">
                            {{ item.series.name }}
                        </span>
                    </td>
                    <td>
                        <button @click="deleteItem(item)" class="btn btn-danger">حذف الملف او الكتاب</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-item :locales="locales"></add-item>
        <!-- <add-item-translation :locales="locales" :tags="tags" :scholars="scholars"></add-item-translation> -->
        <!-- <edit-item-translation :locales="locales" :tags="tags" :scholars="scholars"></edit-item-translation> -->
        <!-- <image-uploader></image-uploader> -->
    </div>
</template>


<script>

    import addItem from './addItem';
    // import addItemTranslation from './addItemTranslation';
    // import editItemTranslation from './editItemTranslation';
    // import imageUploader from './imageUploader';

	export default {
        props: ['items', 'locales'],
        methods: {
            localeCheck(key, item){
                let trans = item.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(item, key){
                eventBus.$emit('addItemTranslation', item, key);
            },
            editTranslation(translation, item){
                eventBus.$emit('editItemTranslation', translation, item);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/itemtranslation/' + translation.id)
                        .then(response => eventBus.$emit('itemDeleted', response));
                }
            },
            deleteItem(item){
                if(confirm('هل انت متأكد من حذف هذه الملف او الكتاب')){
                    axios.delete(window.location.pathname + '/' + item.id)
                        .then(response => eventBus.$emit('itemDeleted', response));
                }
            },
            changeImage(item){
                eventBus.$emit('imageUploader', item);
            }
        },
        components: {
            addItem,
            // addItemTranslation,
            // editItemTranslation,
            // imageUploader
        }
    }
</script>