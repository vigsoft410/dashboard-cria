const axios = require('axios');

const ApiService = {
    getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    getPhotos() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    getUsuario() {
        return axios.get('https://dashboard-cria.firebaseio.com/usuarios.json')
    }
}

export default ApiService
