import axios from 'axios'
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()

const barberApi = axios.create({
    baseURL: VITE_API_URL
})

// Interceptores

barberApi.interceptors.request.use(config => {
    config.headers = {
        'x-token': localStorage.getItem('token')
    }

    return config
})

export default barberApi;