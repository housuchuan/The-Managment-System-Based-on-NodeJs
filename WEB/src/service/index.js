import axios from 'axios'
import { message } from 'antd'
const instance = axios.create({
   baseURL: '/api',
   timeout: 60000,
   headers: { 'content-type': 'application/json' },
   validateStatus (status) {
      return status === 200
   }
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
   // 在发送请求之前做些什么
   return config
}, function (error) {
   // 对请求错误做些什么
   return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
   // 对响应数据做点什么
   return response.data
}, function (error) {
   message.error(error.message).then(() => {})
   // 超出 2xx 范围的状态码都会触发该函数。
   // 对响应错误做点什么
   return Promise.reject(error)
})
const API = ({ method = 'post', url = '', params = '' }) => {
   return new Promise((resolve, reject) => {
      instance({
         method,
         url,
         [method === 'post' ? 'data' : 'params']: params || undefined
      }).then(res => {
         if (res.status === 200) {
            resolve(res)
         } else {
            message.error(res?.message).then(() => {
               reject(res?.message)
            })
         }
      }).catch(error => {
         reject(error)
      })
   })
}
export default API
