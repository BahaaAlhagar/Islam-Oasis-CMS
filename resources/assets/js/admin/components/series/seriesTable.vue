<template>
	<div>
        <table v-if="series.length" class="table table-responsive table-bordered text-center">
            <thead>
                <tr>
                    <th v-for="locale in locales">
                        {{ locale.native }}
                    </th>
                    <th>
                        غلاف المجموعة
                    </th>
                    <th>
                        اصحاب المجموعة
                    </th>
                    <th>
                        التصنيفات
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="serie in series" :key="serie.id">
                    <td v-for="(locale, key) in locales">
                        <span v-for="translation in serie.translations" v-if="translation.locale == key">
                            {{ translation.name }}
                            <div class="pull-left">
                                <button @click="editTranslation(translation)" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button @click="deleteTranslation(translation)" class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </div>

                            <!-- translation publishing status -->
                            <div>
                                <i v-if="!translation.published"class="fa fa-close red" aria-hidden="true"></i>
                                <i v-if="translation.published"class="fa fa-check green" aria-hidden="true"></i>
                            </div>
                        </span>
                        <span v-if="!localeCheck(key, serie)">
                             <button @click="addTranslation(serie, key, locale)" class="btn btn-success">اضافة ترجمة</button>
                        </span>
                    </td>
                    <td>
                        <img v-if="!serie.photo" src="/storage/series.jpg" width="50" height="50">
                        <img v-else :src="'/storage/' + serie.photo.thumbnail" width="50" height="50">
                        <button class="btn btn-success" @click="changeImage(serie)">تعديل الصورة</button>
                    </td>
                    <td>
                        <div class="alert-success" v-for="scholar in serie.scholars">
                            {{ scholar.name }}<hr>
                        </div>
                    </td>
                    <td>
                        <div class="alert-success" v-for="tag in serie.tags">
                            {{ tag.name }}<hr>
                        </div>
                    </td>
                    <td>
                        <button @click="deleteSeries(serie)" class="btn btn-danger">حذف العــالــم</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <add-series :locales="locales" :tags="tags" :scholars="scholars"></add-series>
        <!-- <add-series-translation :locales="locales"></add-series-translation> -->
        <!-- <edit-series-translation :locales="locales"></edit-series-translation> -->
        <!-- <image-uploader :locales="locales"></image-uploader> -->
    </div>
</template>


<script>

    import addSeries from './addSeries';
    // import addSeriesTranslation from './addSeriesTranslation';
    // import editSeriesTranslation from './editSeriesTranslation';
    // import imageUploader from './imageUploader';

	export default {
        props: ['series', 'locales', 'scholars', 'tags'],
        methods: {
            localeCheck(key, serie){
                let trans = serie.translations;
                for (var i = 0; i < trans.length; i++) {
                    if(trans[i].locale == key){
                        return true;
                    }
                }
            },
            addTranslation(serie, key){
                eventBus.$emit('addSeriesTranslation', serie, key);
            },
            editTranslation(translation){
                eventBus.$emit('editSeriesTranslation', translation);
            },
            deleteTranslation(translation){
                if(confirm('هل انت متأكد من حذف هذه الترجمة؟')){
                    axios.delete('/admincp/seriestranslation/' + translation.id)
                        .then(response => eventBus.$emit('serieDeleted', response));
                }
            },
            deleteSeries(serie){
                if(confirm('هل انت متأكد من حذف هذا العالم')){
                    axios.delete(window.location.pathname + '/' + serie.id)
                        .then(response => eventBus.$emit('serieDeleted', response));
                }
            },
            changeImage(serie){
                eventBus.$emit('imageUploader', serie);
            }
        },
        components: {
            addSeries,
            // addSeriesTranslation,
            // editSeriesTranslation,
            // imageUploader
        }
    }
</script>