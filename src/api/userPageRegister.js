import axios from './index'

export const getRegisterFormData = (params) => {
  return axios.request({
    url: '/api/getRegisterFormData',
    method: 'get',
    params: {
      ...params
    }
  })
}