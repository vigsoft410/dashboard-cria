<template>
    <div class="container">
        <div class="row">
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
    .btn {
            background-color: #ffab19;
            border-color: #ffab19d3;
            color:#212529;
            transition: 0.2s;
        }
    .btn:hover {
            background-color: #eba01e;
            border-color: #ffab19d3;
    }
    .btn:focus {
            background-color: #eba01e;
            border-color: #ffab19d3;
            box-shadow: 0 0 0 0.2rem #ffab199a;
    }
    

</style>