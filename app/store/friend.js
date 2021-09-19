export const state = () => ({
  friends:[]
})

export const mutations = {
  updateFriends(state, friends) {
    state.friends = friends
  }
}

// 値を取得する際には
// this.$store.state.friend.friends

// 値を代入する際には
// this.$store.commit('friend/updateFriends', friends)