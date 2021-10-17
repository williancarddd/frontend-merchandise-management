import axios, { AxiosInstance } from 'axios'
import { getToken } from '../Utils/managerToken'

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
