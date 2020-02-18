const axios = require('axios');

const ApiService = {
    getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    },
    getPhotos() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

export default ApiService;
