import { setToken, getToken } from '@/lib/util'
import jwt from 'jsonwebtoken'
import { register, isRegister, login } from '@/api/app'

const state = {
  isLogin: false,
  
}

const mutations = {
  CHANGE_LOGIN_STATUS (state, status) {
    state.isLogin = status
  },
  SET_ID (state, id) {
    state.id = id
  },
  GET_ID (state) {
    return state.id
  },
  
}
const getters = {

}

const actions = {
  login({commit}, { email, password }) {
    return new Promise((resolve, reject) => {
      login({email, password}).then(res => {
        if (res.data) {
          jwt.verify('asd', res.data.token, (error, decoded) => {
            if (error) {
              console.log(error)
              return
            }
            setToken(res.data.token)
            resolve(decoded)
          })
        }
      }).catch(res => {

      })
    })
  },
  register({commit}, {email, password}) {
    return new Promise((resolve, reject) => {
      register({email, password}).then(res => {

      })
    })
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
