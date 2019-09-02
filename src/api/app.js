import axios from './index'


export const register = (email, nickname, password) => {
  return axios.request({
    url: '/api/register',
    method: 'post',
    data: {
      email,
      nickname,
      password
    }
  })
}


export const login = (email, password) => {
  return axios.request({
    url: '/api/login',
    method: 'post',
    data: {
      email,
      password
    }
  })
}
