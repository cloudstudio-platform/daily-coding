import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  withCredentials: true,
  proxy: false,
})

export function getApiPrefix() {
  return 'https://e.coding.net/api'
}

export const instancePost = (url) => {
  return new Promise((resolve) => {
    instance
      .post(url)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        message.error(err.data || '请求失败, 请检查网络。')
      })
  })
}

export const instanceGet = (url, params) => {
  return new Promise((resolve) => {
    instance
      .get(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        message.error(err.data || '请求失败, 请检查网络。')
      })
  })
}
