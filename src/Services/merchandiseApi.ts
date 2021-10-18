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
  if (token) {
    if (config.headers) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
api_merchandise.interceptors.response.use(async (config) => {
  const { type } = config.data as IError
  console.log(config.data)
  if (type === 'TokenExpiredError') {
    localStorage.clear()
    window.location.href = window.location.origin + '/login'
    console.log('token expirado, voce foi redirecionado.')
  }
  return config
})
