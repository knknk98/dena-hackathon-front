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
      :is-checked="friend.isChecked"
      @click="friend.isChecked = !friend.isChecked"
      @checkBoxStatus="friends[index].isChecked = $event"
    />

    <v-bottom-navigation v-model="value" class="tab">
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
import AppHeader from '../components/AppHeader.vue'
import FriendItem from '../components/FriendItem.vue'
export default Vue.extend({
  name: 'Index',
  components: { FriendItem, AppHeader },
  data() {
    return {
      value: 'home',
      friends: [
        {
          userId: '1',
          userName: 'shoma',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
          isChecked: false,
        },
        {
          userId: '2',
          userName: 'shoma',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
          isChecked: false,
        },
        {
          userId: '3',
          userName: 'shoma',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
          isChecked: false,
        },
      ],
    }
  },
  methods: {
    request() {
      const userIds = []

      for (const friend of this.friends) {
        if (friend.isChecked) userIds.push(friend.userId)
      }
      // eslint-disable-next-line no-console
      console.log(userIds)
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
</style>
