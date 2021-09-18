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
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
      <chat-item />
    </div>
    <div class="chat__footer">
      <v-textarea
        solo
        rows="1"
        placeholder="メッセージを入力"
        auto-grow
        rounded
        append-icon="mdi-send"
        full-width
        color="#FF7668"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ChatHeader from '../../components/ChatHeader.vue'
import ChatItem from '../../components/ChatItem.vue'
export default Vue.extend({
  components: { ChatHeader, ChatItem },
})
</script>

<style lang="scss">
.chat {
  &__items {
    margin-bottom: 96px;
  }
  &__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 16px;
    textarea {
      max-height: 100px !important;
      overflow-y: scroll;
      width: 100%;
    }
  }
}
</style>
