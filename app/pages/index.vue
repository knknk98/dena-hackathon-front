<template>
  <div>
    <app-header />
    <!-- 自分のアイコン、名前表示 -->
    <div class="user ma-4">
      <div class="user-inner">
        <img
          src="../assets/icon_sample.png"
          alt="ユーザーアイコン"
          class="user-inner-icon"
        />
        <p class="user-inner-name ma-0 ml-4">Shoma</p>
      </div>
      <v-icon>mdi-cog-outline</v-icon>
    </div>
    <v-divider inset />
    <p class="mb-0 mr-0 ml-4 mt-4 font-weight-bold">友だち</p>
    <!-- 友だち表示するコンポーネント -->
    <friend-item class="mx-4 my-2" />
    <friend-item class="mx-4 my-2" />
    <friend-item class="mx-4 my-2" />

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
  components: { FriendItem, AppHeader },
  data() {
    return {
      value: 'home',
    }
  },
})
</script>

<style lang="scss" scoped>
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
</style>
