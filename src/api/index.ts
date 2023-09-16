import axios from 'axios'
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { _httpType } from '../types'

// import globalConfig from '@/global.config'

// 配置全局的基础配置
const instance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 30 * 1000,
  responseType: 'json',
})

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // // token、秘钥等设置
    // const whiteList = globalConfig.whiteList
    // const url = config.url || ''
    // const token = localStorage.getItem('token') || ''

    // // 如果url不在白名单并且存在token，就在请求头中添加token
    // if (!whiteList.includes(url) && token)
    //   config.headers.token = token

    // // globalConfig.secretId + new Data().toString()

    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const url = response.config.url || ''
    const code = response.data.code || 200
    const message = response.data.message || '未知错误'
    if (code === 401) {
      // 跳转到登录
      console.error('登录过期')
    }
    if (code !== 200) {
      // 提示错误信息,拼接url+code+message，并添加红色样式，字体加粗，字体大小为16px
      console.log(
        '%c URL: %s\nCode: %s\nMessage: %s',
        'color: red; font-weight: bold; font-size: 16px',
        url,
        code,
        message,
      )
    }
    return response.data
  },
  (error) => {
    console.error('error', error)
    return Promise.reject(new Error(error))
  },
)

interface RequestOptions {
  url: string
  params?: object
  data?: object
  instance?: object
  expand?: object
}
interface RequestResponse {
  code: number
  desc: string
  result: any
  total: number | null
}

export function get(options: RequestOptions): Promise<RequestResponse> {
  return instance({ ...options, method: _httpType.GET })
}

export function post(options: RequestOptions): Promise<RequestResponse> {
  return instance({ ...options, method: _httpType.POST })
}

export function put(options: RequestOptions): Promise<RequestResponse> {
  return instance({ ...options, method: _httpType.PUT })
}

export function del(options: RequestOptions): Promise<RequestResponse> {
  return instance({ ...options, method: _httpType.DELETE })
}

export function patch(options: RequestOptions): Promise<RequestResponse> {
  return instance({ ...options, method: _httpType.PATCH })
}

export * from './module/login'
