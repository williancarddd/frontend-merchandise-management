import axios, { AxiosInstance } from 'axios'
import { getToken } from '../Utils/managerToken'
interface IError {
  type?: string
}
export const api_merchandise: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
})

api_merchandise.interceptors.request.use(async (config) => {
  const token = getToken()
  console.log('interceptor request')
  if (token) {
    if (config.headers) config.headers.Authorization = `${token}`
  }
  return config
})

api_merchandise.interceptors.response.use(
  async (config) => {
    return config
  },
  async (err) => {
    const { type } = err.response.data as IError
    if (type === 'TokenExpiredError') {
      localStorage.clear()
      window.location.href = window.location.origin + '/login'
    }
    throw err
  }
)
