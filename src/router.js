import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './components/Cadastro-usuario.vue'
import Login from './components/Login.vue'
import ListaApi from './components/Lista-api.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/lista',
        component: ListaApi
    },
    {
        path: '/',
        component: Login
    },
    {
        path: '/cadastro', 
        component: Cadastro
    },]
})