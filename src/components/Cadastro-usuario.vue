<template>
    <div id="cadastro" class="app">
        <div class="modal-dialog text-center">
            <div class="main-section">
                <div class="modal-content">
                    <form class="col-12">
                        <img src="./../assets/cadastro-img.png" class="img-cadastro">
                            <div class="row">
                                <div class="col-6">
                                <b-form-group
                                id="fieldset-1"
                                label="Nome"
                                class="form-group"
                                >
                                    <b-form-input class="form-control"></b-form-input>
                                </b-form-group>
                                </div>
                                 <div class="col-6">
                                <b-form-group
                                id="fieldset-1"
                                label="Sobrenome"
                                class="form-group"
                                >
                                    <b-form-input class="form-control"></b-form-input>
                                </b-form-group>
                                </div>
                            </div>
                                <b-form-group
                                id="fieldset-3"
                                label="E-mail"
                                class="form-group"
                                >
                                    <b-form-input class="form-control"></b-form-input>
                                </b-form-group>
    
                                <b-form-group
                                id="fieldset-4"
                                label="Senha"
                                class="form-group"
                                >
                                    <b-form-input class="form-control" type="password"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    id="fieldset-4"
                                    label="Confirme a senha"
                                    class="form-group"
                                    >
                                        <b-form-input class="form-control" type="password"></b-form-input>
                                </b-form-group>
                        <b-row class="button justify-content-center">
                                <b-button class="accept btn btn-warning">Prosseguir</b-button>
                                <b-button class="cancel btn btn-warning" @click="LoginRouter">Cancelar</b-button>
                        </b-row>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../router'
    export default {
        methods: {
            LoginRouter() {
                router.push('/')
            }
        }
    }
</script>

<style scoped>
    .modal-dialog{
        max-width: 400px;
        
    }
    .main-section {
        margin: 0 auto;
        margin-top: 100px;
        padding: 0;
    }
    .btn {
        margin-bottom: 18px;
        width: 100%;
    }
    .img-cadastro {
        width: 250px;
    }
    .btn-warning {
        background-color: #ffab19;
        border-color: #ffab19d3;
    }

    .form-control:focus {
        box-shadow: 0 0 0 0.1rem #F27405;
        border-color: rgb(224, 114, 18);
    }
    .form-group {
        margin-top: 1px;
        margin-left: -8px;
        text-align: left;
        font-size: 15px;
        color: #8896a3;
        padding-left: 10px;
        text-align: left;
    }
    .modal-content {
        background-color: #ffffff;
        border: 0;
        border-radius:0;
        padding: 0 18px;
    }
    .cancel {
        margin-bottom: 25px;
    }
    .accept {
        margin-top: 25px;
    }
    .btn {
        background-color: #F79E02;
        border:0;
        color: white;
        width: 80%;
        border-radius: 10px;
        transition: 0.3s;
    }
    .btn:hover {
        background-color: #F27405;
        border-radius: 15px;
        width: 90%;
    }
    .btn:focus {
        box-shadow: 0 0 0 0.1rem #F79E02;
        border: 0;
    }
    </style>