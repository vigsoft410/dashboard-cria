<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col-12" v-for="item in items" :key="item.title">
                <div class="card-container text-center">
                    <div class="card-content ">
                        <h3><strong>{{item.userId}}</strong></h3>
                        <h4>{{item.title}}</h4>
                        <span>
                        <p>{{item.body}}</p>
                        </span>
                        <a> Ler mais </a>
                    </div>
                </div>
            </div>
        </div>
    </div>  -->
        <div class="row">
            <div class="col-2" v-for="item in items" :key="item.title">
                <div class="card-container text-center">
                    <div class="card-content">
                        <a v-b-toggle="'collapse-1'"> Leia Mais </a>
                        <div class="card-body">
                            <h3><strong>{{item.userId}}</strong></h3>
                            <h4>{{item.title}}</h4>
                            <b-collapse id="collapse-1">
                            <p>{{item.body}}</p>
                            </b-collapse>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </template>

<script>

import ApiService from '../services/api'
import router from '../router'

export default {
    data() {
        return {
            items: []
        }
    },
    mounted() {
        ApiService.getPosts().then((response)=> {
            this.items = response.data;
        });
    },
    methods: {
        startEvent() {
            router.push('/')
        }
    },
}
</script>

<style scoped>

    .card-content {
        border: 0;
        max-width: 300px;
        height: 400px;
        background-color: #fff;
    }
    .card-container {
        margin: 5px;
    }
    .card-content:hover h3 {
        padding-top: 0; 
    }
    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 150px;
        color: rgba(242, 116, 5, 0.267);
        position: absolute;
        padding-left: 90px;
        padding-top: 40px;
        transition: 0.4s;
    }
    h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 20px;
        padding-top: 20px;
        padding-left: 10px;
        text-align: start;
        color: #F27405;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        padding-left: 10px;
        text-align: start;
        padding: 10px;
        color: #025E73;
    }

    .card-container a {
        position: absolute;
        margin-top: 330px;
        margin-left: -45px;
        padding: 10px;
        border: 1px solid #F27405;
        color: #F27405;
        text-decoration: none;
        cursor: pointer;
        transition: 0.4s;
        visibility: hidden;
        opacity: 0;
    }
    .card-container a:hover {
        background: #F27405;
        color: #fff;
    }
    .card-container:hover a{
        visibility: visible;
        opacity: 1;
    }

</style>