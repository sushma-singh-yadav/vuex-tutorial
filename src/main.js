import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/src/sweetalert2.scss'

import router from './router/index';
import store from './store/vuestore.js';
const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app')
