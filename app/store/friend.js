export const state = () => ({
  test: 'hoge'
})

export const mutations = {
  update(state, text) {
    state.test = text
  }
}