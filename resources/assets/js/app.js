
/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.component('signatures', require('./components/Signatures.vue'));
Vue.component('signature-form', require('./components/SignatureForm.vue'));
//Vue.component('paginate', require('vuejs-paginate'));

const app = new Vue({
    el: '#app'
});