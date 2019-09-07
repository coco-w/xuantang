import axios from './index'

export const getInvitationContent = (id) => {
  return axios.request({
    url: '/api/getInvitationContent',
    method: 'get',
    params: {
      id
    }
  })
}