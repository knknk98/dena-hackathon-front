<template>
  <div class="chat">
    <chat-header />
    <div class="chat__items mx-4">
      <chat-item is-mine />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
    </div>
    <div class="chat__footer mx-4">
      <v-textarea
        solo
        rows="1"
        placeholder="メッセージを入力"
        auto-grow
        rounded
        append-icon="mdi-send"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChatHeader from '../components/ChatHeader.vue'
import ChatItem from '../components/ChatItem.vue'
export default Vue.extend({
  components: { ChatHeader, ChatItem },
})
</script>

<style lang="scss">
.chat {
  display: flex;
  height: 100vh;
  flex-direction: column;
  &__items {
    flex: 1;
    overflow-y: scroll;
  }
  &__footer {
    textarea {
      max-height: 100px !important;
      overflow-y: scroll;
    }
  }
}
</style>
