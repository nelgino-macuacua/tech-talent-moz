

const axios = require('axios').default;



const api = axios.create({
    baseURL: 'http://projectos/tech-talent-back/',
    
    headers: {
        'X-Custom-Header': 'foobar','X-Requested-With': 'XMLHttpRequest',
    }
});

export default api;



