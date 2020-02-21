import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://dashboard-cria.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://dashboard-cria.firebaseio.com/'
        })
    }
})