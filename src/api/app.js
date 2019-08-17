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

