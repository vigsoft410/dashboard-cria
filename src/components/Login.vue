<template>
    <div id='login' class="app">
        <div class="modal-dialog text-center">
            <div class="col-sm-8 main-section teste">
                <div class="modal-content">

                    <form class="col-12">
                        <div class="text-center">
                        <h1 class="title-h1"> Login </h1>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="User Name">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-warning"> Login </button>
                    </form>

                </div> <!-- End of Modal Content -->
            </div>
        </div> 
    </div>
</template>

<script>
export default {

}
</script>

<style> 
    #login .title-h1 {
        color: #ffab19;
        padding-top: 15px;
    }
    #login .main-section {
        margin: 0 auto;
        margin-top: 130px;
        padding: 0;
    }
    #login .modal-dialog {
        max-width: 600px;
        
    }
    #login .modal-content {
        background-color: #3b3b3be1;
        padding: 0 18px;
        box-shadow: 0px 0px 25px #202020be;
        border-radius: 15px;
        border: 0;
    }
    #login .form-control {
        background-color: #3b3b3be1;
        border: 1px solid #ffab19;
        color: #ffbb46;
    }
    #login .form-control:focus {
        box-shadow: 0 0 0 0.1rem #feb04ba2;
    }
    #login .btn-warning {
        background-color: #ffab19;
        border-color: #ffab19d3;
    }
    #login .form-group {
        margin-top: 18px;
    }
    #login .btn {
        margin-bottom: 25px;
    }
</style>