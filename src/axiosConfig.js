import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(req => {
    return req
})

instance.interceptors.response.use(res => {
    return res
})


export default instance