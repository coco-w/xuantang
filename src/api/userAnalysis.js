import axios from './index'

export const getRegistrationData = () => {
  return axios.request({
    url: '/api/getRegistrationData',
    method: 'get',
  })
}
export const browseTheEnrollment = (date) => {
  return axios.request({
    url: '/api/getBrowseTheEnrollment',
    method: 'get',
    data: {
      date
    }
  })
}

export const getPaymentStatus = () => {
  return axios.request({
    url: '/api/getPaymentStatus',
    method: 'get',
  })
}