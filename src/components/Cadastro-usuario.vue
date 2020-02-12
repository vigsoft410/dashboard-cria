<template>
    <div id="cadastro" class="app">
        <div class="master">
            <b-container class="main-container">
                <b-row class="name">
                    <b-col class="col-10">
                        <div class="form-group">
                            <label for="imputName">Seu nome completo</label>
                            <b-form-input class="form-control" placeholder="Nome Completo"></b-form-input>
                        </div>
                    </b-col>  
                <b-col class="col-2">
                        <div class="form-group">
                            <label for="imputAge"> Sua idade </label>
                            <b-form-input type="number" placeholder="Idade"></b-form-input>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="email">
                    <b-col class="col-12">
                        <div class="form-group">
                            <label for="inputEmail"> Seu E-mail </label>
                            <b-form-input type="email" placeholder="E-mail"></b-form-input>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="senha">
                    <b-col class="col-6">
                        <div class="form-group">
                            <label for="inputPassword"> Sua senha </label>
                            <b-input type="password" placeholder="Senha"></b-input>
                        </div>
                    </b-col>
                    <b-col class="col-6">
                        <div class="form-group">
                            <label for="inputConfirmPassword"> Confirme sua senha </label>
                            <b-input type="password" placeholder="Confirme sua senha"></b-input>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="button justify-content-end">
                    <b-col class="col-4 ">
                        <b-button class="accept btn btn-warning">Prosseguir</b-button>
                        <b-button class="cancel btn btn-warning"><router-link to="/">Cancelar</router-link></b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style>
    #cadastro .row{
        margin-bottom: 10px;
    }
    #cadastro .btn {
        margin-right: 18px;
        margin-bottom: 18px;
    }
    #cadastro .btn-warning {
        background-color: #ffab19;
        border-color: #ffab19d3;
    }
    #cadastro .form-control:focus {
        box-shadow: 0 0 0 0.1rem #feb04ba2;
        border-color: #feb04ba2;
    }
    .main-container {
        max-width: 900px;
        border-radius: 15px; 
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 5px 5px 5px #bfbfbfbe;
        
    }
    #cadastro .form-group {
        text-align: left;
    }
    label {
        color: #495057;
        padding-left: 12px;
    }
    #cadastro label {
        padding-top: 18px;
    }
</style>