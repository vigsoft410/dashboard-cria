<template>
    <div id='login' class="app">
        <div class="modal-dialog text-center">
            <div class=" main-section">
                <div class="modal-content">
                    <form class="col-12 text-align-start">
                        <img src="./../assets/login-img.svg" class="img-login">
                        <b-form-group
                        id="fieldset-1"
                        label="Coloque seu email ou nome de usuário"
                        class="form-group"
                        label-for="input-1"
                        >
                            <input type="text" id="input-1" v-model="userName" class="form-control">
                        </b-form-group>
                        <b-form-group
                        label="Coloque sua senha"
                        class="form-group"
                        label-for="input-2"
                        >
                            <input type="password" id="input-2" v-model="password" class="form-control" @keyup.enter="Login">
                             
                        </b-form-group>
                        <form class="col-12 text-left">
                            <b-form-checkbox class="checkbox">Lembrar deste usuário</b-form-checkbox>
                        </form>
                        <!-- <button type="button" class="btn" @click="Cadastro" > Register</button> -->
                        <button type="button" class="btn" @click="Login"> Login </button>
                        <span><p>Não está registrado? <strong><a @click="Cadastro" class="register">Registre-se</a></strong></p></span>
                    </form>

                </div> <!-- End of Modal Content -->
            </div>
        </div> 
    </div>
</template>

<script>
import router from '../router.js'
import eye from 'mdi-vue/Eye'
export default {
    components: [
        eye,
    ],
    data(){
        return {
            userName: '',
            password: '',
        }
    },
    methods:{
        Login() {
            if (this.userName && this.password === "admin"){
                console.log('Login aceito!')
                router.push('/lista')
            }
            else {
                console.log('Login não aceito.')
                alert('Oops... algo está errado')
            }
        },
        Cadastro() {
            router.push('/cadastro')           
        }
    },
}
</script>

<style> 

    #login .main-section {
        margin: 0 auto;
        margin-top: 130px;
        padding: 0;
    }
    #login .modal-dialog {
        max-width: 400px;
        
    }
    #login .img-login {
        margin-top: -75px;
        width: 100px;
    }
    #login .modal-content {
        padding: 0 18px;
        border: 0;
        border-radius: 0;
        
    }
    #login .form-control:focus {
        box-shadow: 0 0 0 0.1rem #F27405;
        border-color: rgb(224, 114, 18);
    }
    #login .form-group label {
        margin-top: 10px;
        margin-left: -8px;
        text-align: left;
        font-size: 15px;
        color: #8896a3;
        padding-left: 10px;
    }
    #login .btn {
        background-color: #F79E02;
        border:0;
        margin-bottom: 15px;
        color: white;
        margin-top: 15px;
        width: 90%;
        border-radius: 10px;
        transition: 0.3s;
    }
    #login .btn:hover {
        background-color: #F27405;
        border-radius: 15px;
        width: 100%;
    }
    #login .btn:focus {
        box-shadow: 0 0 0 0.1rem #F79E02;
        border: 0;
    }
    #login .register {
        cursor: pointer;
    }
    #login .register:hover {
        color: #025E73;
    }
</style>