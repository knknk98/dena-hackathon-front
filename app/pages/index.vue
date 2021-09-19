<template>
  <div>
    <app-header class="header" />
    <div class="d-flex justify-space-between align-center mb-0 mx-4 mt-4">
      <p class="font-weight-bold mb-0 title">最近どうしてる？</p>
      <v-btn class="button" @click="request()">聞いてみる</v-btn>
    </div>
    <!-- 友だち表示するコンポーネント -->
    <friend-item
      v-for="(friend, index) in friends"
      :key="friend.id"
      class="ma-4"
      :friend="friend"
      @click="friend.isChecked = !friend.isChecked"
      @checkBoxStatus="friends[index].isChecked = $event"
    />

    <v-bottom-navigation v-model="value" grow class="tab color">
      <v-btn value="home">
        <span>Home</span>

        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>
      <v-btn value="talk" nuxt to="/talk">
        <span>Talk</span>

        <v-icon>mdi-chat-processing</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import AppHeader from '../components/AppHeader.vue'
import FriendItem from '../components/FriendItem.vue'

export default Vue.extend({
  name: 'Index',
  components: { FriendItem, AppHeader },
  data() {
    return {
      value: 'home',
      friends: [],
      userId: '',
    }
  },
  mounted() {
    this.userId = this.$store.state.friend.userId
    console.log(this.userId)
    if (this.userId === '') {
      this.$router.push('login')
    }
    // friendの取得
    axios
      .get(`${this.$config.apiURL}/api/users/${this.userId}/frends`)
      .then((res) => {
        console.log(res)
        for (const friend of res.data.friends) {
          const user = {
            userId: friend.id,
            userName: friend.username,
            iconImage: friend.icon_url,
            isChecked: false, // ここは固定値(最初はチェックつかないので)
          }
          this.friends.push(user)
        }
      })
    // this.$store.commit('friend/updateFriends', this.friends)
    const test = this.$store.state.friend.friends
    console.log(test)
  },
  methods: {
    request() {
      const userIds = []

      for (const friend of this.friends) {
        if (friend.isChecked) userIds.push(friend.userId)
      }

      const params = JSON.stringify({
        request_user_id_list: userIds,
        message: '最近どうしてる？',
      })

      axios
        .post(`${this.$config.apiURL}/api/contacts/${this.userId}`, params)
        .then(() => {
          console.log('success')
          this.$router.push('talk')
        })
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.title {
  font-size: 24px;
}

.button {
  background-image: $primary-gradient;
  color: white;
}

.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-inner {
    display: flex;
    align-items: center;
    &-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    &-name {
      font-size: 22px;
      color: #08072f;
    }
  }
}

.tab {
  position: fixed;
  bottom: 0;
}

.choice-friend {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.color {
  color: #fc6076;
}
</style>
