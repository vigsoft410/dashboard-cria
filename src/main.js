import '@mdi/font/scss/materialdesignicons.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './estilo.css'
import './services/axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue) 
Vue.use(IconsPlugin) 

Vue.config.productionTip = false
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0uwbX6LVEJ0kkS_Y7agmhttD6ifPm5io",
    authDomain: "dashboard-cria.firebaseapp.com",
    databaseURL: "https://dashboard-cria.firebaseio.com",
    projectId: "dashboard-cria",
    storageBucket: "dashboard-cria.appspot.com",
    messagingSenderId: "1077766931277",
    appId: "1:1077766931277:web:8876ff8a44c703746bad04",
    measurementId: "G-486ZJXLHN9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 