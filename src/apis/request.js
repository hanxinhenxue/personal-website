/**
 * @description ajax构造器
 */
import axios from 'axios'
import Qs from 'qs'
import { requestPoolStore } from '~store/system/request.js'

// 环境的切换
let baseURL = '/supervise/'
const service = axios.create({
  baseURL,
  crossDomain: true,
  timeout: 60000, // 设置请求超时时间
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    post: {
      // 设置post请求头
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  },
})
// 请求拦截
service.interceptors.request.use(
  (config) => {
    const requestMark = `${config.method} ${config.url} ${
      config.data ? JSON.stringify(config.data) : config.params ? JSON.stringify(config.params) : ''
    }`
    const poolStore = requestPoolStore() // 获取ajax请求池
    // 找当前请求的标识是否存在pendingRequest中，即是否重复请求了
    const markIndex = poolStore.requestPool.findIndex((item) => {
      return item.name === requestMark
    })
    if (markIndex > -1) {
      // 取消上个重复的请求
      // 删掉在store中的请求标识
      poolStore.cancelRequest(markIndex)
    }
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    config.cancelToken = source.token
    config.requestMark = requestMark
    poolStore.addRequestToPool({
      name: requestMark,
      cancel: source.cancel,
    })
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.error(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const poolStore = requestPoolStore() // 获取ajax请求池
    // 根据请求拦截里设置的requestMark配置来寻找对应pendingRequest里对应的请求标识
    const markIndex = poolStore.requestPool.findIndex((item) => {
      return item.name === response.config.requestMark
    })
    // 找到了就删除该标识
    if (markIndex > -1) {
      // 取消上个重复的请求
      // 删掉在store中的请求标识
      poolStore.removeResponse(markIndex)
    }
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    let errorFormat = {}
    const response = error.response
    const poolStore = requestPoolStore() // 获取ajax请求池
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    if (response) {
      const markIndex = poolStore.requestPool.findIndex((item) => {
        return item.name === response.config.requestMark
      })
      // 找到了就删除该标识
      if (markIndex > -1) {
        // 取消上个重复的请求
        // 删掉在store中的请求标识
        poolStore.removeResponse(markIndex)
      }
      // 设置返回的错误对象格式（按照自己项目实际需求）
      errorFormat = {
        status: response.status,
        data: response.data,
      }
    }
    return Promise.reject(errorFormat)
  }
)

// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * weda 携带header get方法，
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} headers [请求时携带的参数]
 */
export function wedaGet(url, params, headers = {}) {
  return new Promise((resolve, reject) => {
    service({
      method: 'get',
      url,
      params,
      headers,
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, Qs.stringify(params))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
export function postJson(url, params) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
