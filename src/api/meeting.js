import axios from './index'

export const getMeetingList = (id) => {
  return axios.request({
    url: '/api/getMeetingList',
    method: 'get',
    params: {
      id,
    }
  })
}

export const meetingChangeSearch = id => {
  return axios.request({
    url: '/api/meetingChangeSearch',
    method: 'get',
    params: {
      id
    }
  })
}

export const getMeetingContent = id => {
  return axios.request({
    url: '/api/getMeetingContent',
    method: 'get',
    params: {
      id
    }
  })
}

export const updateContent = params => {
  return axios.request({
    url: '/api/updateContent',
    method: 'post',
    data: {
      ...params
    }
  })
}

export const deleteContent = (id, index) => {
  return axios.request({
    url: '/api/deleteContent',
    method: 'post',
    data: {
      id,
      index,
    }
  })
}