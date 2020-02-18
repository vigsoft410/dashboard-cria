<template>
    <div class="container">
            <div class="card-container text-center">
                <div class="card-content ">
                    <h3><strong>01</strong></h3>
                    <h4>Lorem Ipsum</h4>
                    <span>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Labore et sit quae exercitationem cumque at provident eius beatae consequatur architecto? 
                        Accusantium, dicta!</p>
                    </span>
                    <a> Ler mais </a>
                </div>
            </div>
    </div> 
        <!-- <div class="row">
            <div class="col-sm" v-for="item in items" :key="item.title">
                <b-card 
                :title="item.title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="image"
                img-top
                tag="article"
                style="max-width: 18rem;"
                class="mb-2"
                >
                    <b-card-text><strong> ID: </strong>{{item.userId}},
                    <p><strong> Completed: </strong>{{item.body}}</p>
                    </b-card-text>
                    <b-button variant="warning" @click="startEvent">Action</b-button>
                </b-card>
            </div>
        </div> -->
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
    .card-content:hover h3 {
        padding-top: 0; 
    }
    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 150px;
        color: rgba(242, 116, 5, 0.267);
        position: absolute;
        padding-left: 130px;
        padding-top: 40px;
        transition: 0.4s;
    }
    h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 28px;
        padding-top: 90px;
        padding-left: 10px;
        text-align: start;
        color: #F27405;
    }
    p {
        font-family: 'Poppins', sans-serif;
        padding-left: 10px;
        text-align: start;
        padding: 10px;
        color: #025E73;
    }

    .card-content a {
        position: relative;
        padding: 10px;
        border: 1px solid #F27405;
        color: #F27405;
        text-decoration: none;
        cursor: pointer;
        transition: 0.4s;
        visibility: hidden;
        opacity: 0;
    }
    .card-content a:hover {
        background: #F27405;
        color: #fff;
    }
    .card-content:hover a{
        visibility: visible;
        opacity: 1;
    }

</style>