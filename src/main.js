import Vue, { createApp } from '@vue/compat'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import './assets/main.css'
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faTimes, faBars)


Vue.use(BootstrapVue);
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
