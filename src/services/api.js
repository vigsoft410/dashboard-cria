const axios = require('axios');

const ApiService = {
    getTodos() {
        return axios.get('https://jsonplaceholder.typicode.com/todos/1');
    },
}

export default ApiService;
