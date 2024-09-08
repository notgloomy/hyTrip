import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config.js'
import { useTimeStore } from '@/stores/modules/time.js'

const timeStore = useTimeStore()
class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // 请求拦截器
        this.instance.interceptors.request.use(config => {
            timeStore.isLoading = true
            return config
        }, err => {
            return err
        })
        // 响应拦截器
        this.instance.interceptors.response.use(res => {
            timeStore.isLoading = false
            return res
        }, err => {
            timeStore.isLoading = false
            return err
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}
export default new HYRequest(BASE_URL, TIMEOUT)
