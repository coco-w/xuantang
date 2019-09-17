import axios from './index'


export const register = (email, password) => {
  return axios.request({
    url: '/api/register',
    method: 'post',
    data: {
      email,
      password
    }
  })
}

export const isRegister = (email) => {
  return axios.request({
    url: '/api/isRegister',
    method: 'post',
    data: {
      email
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
