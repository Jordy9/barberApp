import axios from 'axios'

const barberApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'x-token': localStorage.getItem('token') }
})

// Interceptores

// barberApi.interceptors.request.use(config => {
//     config.headers = {
//         ...config.headers,
//         'x-token': localStorage.getItem('token')
//     }

//     return config
// })

export default barberApi;