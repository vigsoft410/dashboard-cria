import Vue from 'vue'
import Router from 'vue-router'
import Cadastro from './components/Cadastro-usuario.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Login
    },
    {
        path: '/cadastro', 
        component: Cadastro
    },]
})