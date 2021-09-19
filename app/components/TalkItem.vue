<template>
  <div>
    <!-- テキストも表示するタイプ(普通にトークしてる状態) -->
    <div v-if="!talk.request" class="talking ma-4" @click="openChatPage">
      <div class="talking-inner">
        <v-avatar size="36"><img :src="talk.iconImage" /> </v-avatar>
        <div class="ml-4">
          <p class="name ma-0">Shoma</p>
          <p class="message ma-0">{{ talk.message }}</p>
        </div>
      </div>
    </div>
    <!-- バッジがつくタイプ(リクエスト中 or リクエストが来ている状態) -->
    <div v-else @click="openChatPage">
      <div class="friend ma-4">
        <div class="friend-inner">
          <v-avatar size="36"><img :src="talk.iconImage" /> </v-avatar>
          <p class="friend-inner-name ma-0 ml-4">Shoma</p>
        </div>
        <v-chip v-if="true" color="warning" outlined
          >リクエストがきています！</v-chip
        >
        <v-chip v-else color="info" outlined>リクエスト中です！</v-chip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TalkItem',
  props: {
    talk: {
      type: Object,
      default: () => ({
        friendId: '',
        roomId: '',
        message: '',
        date: '',
        request: false,
        iconImage: '',
      }),
    },
  },
  data() {
    return {
      isTalking: false,
    }
  },
  methods: {
    openChatPage() {
      const friendId = 1
      this.$router.push({ path: '/chat/' + friendId })
    },
  },
})
</script>

<style lang="scss" scoped>
.friend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-inner {
    display: flex;
    align-items: center;
    &-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    &-name {
      font-size: 18px;
      color: #08072f;
    }
  }
}

.talking {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-inner {
    display: flex;
    align-items: center;
    &-icon {
      border-radius: 50%;
    }
    &-name {
      font-size: 18px;
      color: #08072f;
    }
  }
}

.name {
  font-size: 18px;
}

.message {
  font-size: 12px;
}

.badge {
  border-radius: 50%;
  // 今の段階では色は適当
  background-color: black;
  width: 24px;
  height: 24px;
  &-num {
    color: white;
    text-align: center;
    font-size: 12px;
    line-height: 24px;
  }
}
</style>
