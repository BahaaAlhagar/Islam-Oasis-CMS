try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

require('./bootstrap');

window.Vue = require('vue');






import VueResource from 'vue-resource';
import VuePaginator from 'vuejs-paginator';

Vue.use(VueResource);


import Form from './partials/Form';
window.Form = Form;


window.toastr = require('toastr');

toastr.options = {
  "positionClass": "toast-bottom-right",
}