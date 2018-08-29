export const state = () => ({
  list: []
})

export const mutations = {
  add(state, account) {
    state.list.push(account)
  },
  emptyList(state) {
    state.list = []
  }
}

export const getters = {
  list: state => {
    return state.list
  }
}
