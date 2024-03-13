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
instance.interceptors.request.use( config => config, error => Promise.reject(error))

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
   // 数据返回成功
   return response.data
}, function (error) {
   message.error(error.message).then(() => {})
   // 响应失败返回提醒
   return Promise.reject(error)
})

// 请求
const request = ({ method = 'post', url = '', params = {} }) => {
   return new Promise((resolve, reject) => {
      instance({method, url, [method === 'post' ? 'data' : 'params']: params || undefined}).then(res => {
         if (res.status === 200) {
            resolve(res)
         } else {
            message.error(res?.message).then(() => {
               reject(res)
            })
         }
      }).catch(error => {
         reject(error)
      })
   })
}
export default request
