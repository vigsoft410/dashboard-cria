<template>
    <div>
        <div class="container d-flex justify-content-center" v-for="item in items" :key="item.userId">
            <b-card 
            :title="items.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="image"
            img-top
            tag="article"
            style="max-width: 18rem;"
            class="mb-2"
            >
                <b-card-text><strong> ID: </strong>{{items.userId}},
                <p><strong> Completed: </strong>{{items.completed}}</p>
                </b-card-text>
                <b-button variant="primary" @click="startEvent">Action</b-button>
            </b-card>
        </div>
    </div> 
</template>

<script>

import ApiService from '../services/api'
import router from '../router'

export default {
    data() {
        return {
            items: {}
        }
    },
    mounted() {
        ApiService.getTodos().then((response)=> {
            this.items = response.data;
        });
    },
    methods: {
        startEvent() {
            router.push('/login')
        }
    },
}
</script>

<style scoped>
    .btn {
            background-color: #ffab19;
            border-color: #ffab19d3;
            margin-bottom: 25px;
            margin-right: 18px;
            color:#212529;
        }
    
</style>