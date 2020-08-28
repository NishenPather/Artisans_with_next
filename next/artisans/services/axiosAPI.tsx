import Axios from "axios";
import { DEV_URL } from './routes'
import Router from 'next/router';

const api = Axios.create({
  baseURL: DEV_URL,
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  }
})

api.interceptors.response.use(response => response, function (error) {
  if (401 === error.response.status) {
      Router.push('/login')
  } else {
      return Promise.reject(error);
  }
});

export const addToken = (token: string) => {
  api.defaults.headers.Authorization = `Token ${token}`
}
export const removeBearerToken = () => {
  delete api.defaults.headers.Authorization;
}

export default api;