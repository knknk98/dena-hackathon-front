<template>
  <div>
    <app-header class="header" />
    <!-- 自分のアイコン、名前表示 -->
    <div class="user ma-4">
      <div class="user-inner">
        <v-avatar size="48">
          <img src="../assets/icon_sample.png" />
        </v-avatar>
        <p class="user-inner-name ma-0 ml-4">Shoma</p>
      </div>
      <v-icon>mdi-cog-outline</v-icon>
    </div>
    <v-divider inset />
    <div class="d-flex justify-space-between align-center mb-0 mx-4 mt-4">
      <p class="font-weight-bold mb-0">友だち</p>
      <v-btn rounded class="primary" @click="dialog = true"
        ><v-icon>mdi-plus</v-icon>リクエストを作成</v-btn
      >
    </div>
    <!-- 友だち表示するコンポーネント -->
    <friend-item v-for="i in 20" :key="i" class="ma-4" />

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

    <!-- dialog -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <!-- header -->
        <v-toolbar dark color="primary" class="header">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>リクエストを作成</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">作成</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list three-line subheader>
          <v-subheader class="font-weight-bold">友だちを選択</v-subheader>
          <div v-for="i in 20" :key="i" class="choice-friend ma-4">
            <friend-item />
            <v-checkbox hide-details class="shrink mr-2 mt-0"></v-checkbox>
          </div>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '../components/AppHeader.vue'
import FriendItem from '../components/FriendItem.vue'
export default Vue.extend({
  name: 'index',
  components: { FriendItem, AppHeader },
  data() {
    return {
      value: 'home',
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 2;
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
