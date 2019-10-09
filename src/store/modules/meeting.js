const state = {
  nowMeeting: {

  }
}

const mutations = {
  SET_NOWMEETING (state, info) {
    state.nowMeeting = info
  },
  GET_NOWMEETING (state) {
    console.log(state.nowMeeting)
    return state.nowMeeting
  }
}
const getters = {

}

const actions = {

}


export default {
  state,
  mutations,
  actions,
  getters
}
