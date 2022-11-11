import axios from 'axios'

const api = axios.create({
    baseURL: 'https://agoravai-fernando.onrender.com'
    //baseURL: 'https://api.faustocintra.com.br/'
})

export default api