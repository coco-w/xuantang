import { setToken, getToken, setUserInfo } from '@/lib/util'
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
  login({commit}, { form }) {
    return new Promise((resolve, reject) => {
      login(form).then(res => {
        if (res.code === 200) {
          jwt.verify( res.token,'asd', (error,decoded) => {
            
            if (error) {
              this.$message.error(error)
              return
            }
            setToken(res.token)
            setUserInfo({name: decoded.name, id: decoded.id})
            resolve({name: decoded.name, id: decoded.id, code: res.code})
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
