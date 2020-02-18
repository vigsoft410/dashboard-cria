<template>
    <div id="cadastro" class="app">
        <div class="master">
            <b-container class="main-container">
                <form class="col-12 text-align-start">
                    <img src="./../assets/cadastro-img.svg" class="img-cadastro">
                    <b-row class="name">
                        <b-col class="col-8">
                                <b-form-group
                                id="fieldset-1"
                                label="Nome completo"
                                class="form-top"
                                >
                                    <b-form-input class="form-control"></b-form-input>
                                </b-form-group>
                        </b-col>  
                    <b-col class="col-4">
                                <b-form-group
                                id="fieldset-2"
                                label="Idade"
                                class="form-top"
                                >
                                    <b-form-input class="form-control" type="number"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="email">
                        <b-col class="col-12">
                            <b-form-group
                                id="fieldset-3"
                                label="E-mail"
                                >
                                    <b-form-input class="form-control"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="senha">
                        <b-col class="col-6">
                            <b-form-group
                                id="fieldset-4"
                                label="Senha"
                                >
                                    <b-form-input class="form-control" type="password"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col class="col-6">
                            <b-form-group
                                id="fieldset-4"
                                label="Confirme a senha"
                                >
                                    <b-form-input class="form-control" type="password"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="button justify-content-center">
                            <b-button class="accept btn btn-warning">Prosseguir</b-button>
                            <b-button class="cancel btn btn-warning" @click="LoginRouter">Cancelar</b-button>
                    </b-row>
                </form>
            </b-container>
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
    .btn {
        margin-bottom: 18px;
        width: 100%;
    }
    .img-cadastro {
        margin-top: -40px;
        width: 150px;
    }
    .btn-warning {
        background-color: #ffab19;
        border-color: #ffab19d3;
    }
    .form-control:focus {
        box-shadow: 0 0 0 0.1rem #F27405;
        border-color: rgb(224, 114, 18);
    }
    .form-group label {
        margin-top: 10px;
        margin-left: -8px;
        text-align: left;
        font-size: 15px;
        color: #8896a3;
        padding-left: 10px;
    }
    .main-container {
        max-width: 400px;
        background-color: #ffffff;
    }
    .form-group {
        text-align: left;
        
    }
    .label {
        color: #495057;
        padding-left: 12px;
    }
    .name {
        margin-top: 10px;
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