<template>
  <div class="chat">
    <chat-header />
    <div class="chat__items mx-4">
      <chat-item
        v-for="chat in chats"
        :key="chat.id"
        :chat="chat"
        @clickChip="clickChip"
      />
    </div>
    <div class="chat__footer">
      <v-textarea
        v-model="inputText"
        solo
        rows="1"
        placeholder="メッセージを入力"
        auto-grow
        rounded
        append-icon="mdi-send"
        full-width
        color="#FF7668"
        @click:append="sendMessage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import io from 'socket.io-client'
import ChatHeader from '../../components/ChatHeader.vue'
import ChatItem from '../../components/ChatItem.vue'

export default Vue.extend({
  components: { ChatHeader, ChatItem },
  data() {
    return {
      friendId: '',
      socket: '',
      inputText: '',
      chats: [],
    }
  },
  mounted() {
    // friendIdを取得
    this.friendId = parseInt(
      this.$router.currentRoute.path.split('/').slice(2)[0]
    )

    // 自分のIDを1と仮定
    const userId = this.$store.state.friend.userId

    this.socket = io(`${this.$config.apiURL}:3000/api/contact`, {
      transports: ['websocket'],
    })
    // TODO: roomIDを渡すようにする
    this.socket.emit('join', { user_id: this.friendId, room: '1' })

    /**
     * created_at: "2021-09-19T10:04:27.000Z"
      sender_id: 2
        text: "バイト"
     */

    this.socket.on('join-response', (msg) => {
      console.log(msg)
      for (const _chat of msg.chats) {
        const chat = {
          id: _chat.id,
          message: _chat.text,
          isMine: _chat.sender_id === userId,
          request: false, // ここも変える必要あり
          date: _chat.created_at,
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg', // ここも変える必要あり
        }

        this.chats.push(chat)
      }
    })
    this.socket.on('post-response', (response) => {
      const chat = {
        id: response.id,
        message: response.text,
        isMine: response.sender_id === userId,
        request: false, // ここも変える必要あり
        date: '2021-09-19T10:37:29.000Z', // 変える必要あり
        iconImage:
          'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg', // ここも変える必要あり
      }
      this.chats.push(chat)
    })
  },
  methods: {
    clickChip(value) {
      // valueがクリックされたチップのテキスト
      // ここからsend呼び出す
      this.send(value)
      console.log(value)
      console.log(this.$store.state.friend.test)
      this.$store.commit('friend/update', 'update')
      console.log(this.$store.state.friend.test)
    },
    sendMessage(value) {
      this.socket.emit('post', {
        user_id: this.friendId,
        room: '1',
        message: this.inputText,
      })
      this.inputText = ''
    },
  },
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
