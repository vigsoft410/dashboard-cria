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
                            <input type="text" class="form-control" placeholder="User Name">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-warning"> Login </button>
                        <button type="submit" class="btn btn-warning"> Register </button>
                    </form>

                </div> <!-- End of Modal Content -->
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
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
    .form-control:focus {
        box-shadow: 0 0 0 0.1rem #feb04ba2;
    }
    #login .form-group {
        margin-top: 18px;
    }
    .btn-warning {
        background-color: #ffab19;
        border-color: #ffab19d3;
    }
    .btn {
        margin-bottom: 25px;
        margin-right: 18px;
    }
</style>