<template>
    <div id='login' class="app">
        <div class="modal-dialog text-center">
            <div class="col-sm-8 main-section">
                <div class="modal-content">

                    <form class="col-12">
                        <img src="./../assets/login-img.svg" class="img-login">
                        <div class="text-center">
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="userName" class="form-control" placeholder="Nome de Usuário">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control" placeholder="Senha">
                        </div>
                        <button type="button" class="btn" @click="Login"> Login </button>
                        <button type="button" class="btn" @click="Cadastro" > Register</button>
                    </form>

                </div> <!-- End of Modal Content -->
            </div>
        </div> 
    </div>
</template>

<script>
import router from '../router.js'
export default {
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
                router.push('/cadastro')
            }
            else {
                console.log('Login não aceito.')
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
        max-width: 600px;
        
    }
    #login .img-login {
        margin-top: -75px;
        width: 100px;
    }
    #login .modal-content {
        padding: 0 18px;
        box-shadow: 5px 5px 5px #bfbfbfbe;
        border-radius: 15px;
    }
    #login .form-control:focus {
        box-shadow: 0 0 0 0.1rem #feb04ba2;
        border-color: #feb04ba2;
    }
    #login .form-group {
        margin-top: 18px;
    }
    #login .btn {
        background-color: #ffab19;
        border-color: #ffab19d3;
    }
    #login .btn {
        margin-bottom: 25px;
        margin-right: 18px;
    }
</style>