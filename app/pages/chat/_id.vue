<template>
  <div class="chat">
    <chat-header />
    <div class="chat__items mx-4">
      <chat-item
        v-for="chat in chats"
        :key="chat.message"
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
      chats: [
        {
          message: '最近どうしてる？',
          isMine: false,
          request: true,
          date: '07:28',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
        },
        {
          message: '家',
          isMine: true,
          request: false,
          date: '07:29',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
        },
        {
          message: 'なにもしてないの？',
          isMine: false,
          request: false,
          date: '07:32',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
        },
        {
          message: 'ずっと寝てる',
          isMine: true,
          request: false,
          date: '07:34',
          iconImage:
            'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
        },
      ],
    }
  },
  mounted() {
    // friendIdを取得
    this.friendId = parseInt(
      this.$router.currentRoute.path.split('/').slice(2)[0]
    )

    this.socket = io('http://localhost:5000', { transports: ['websocket'] })
    this.socket.emit('join', { user_id: '2', room: '1' })
    this.socket.on('join-response', (msg) => {
      // eslint-disable-next-line no-console
      console.log(msg)
    })

    // const socket = io('http://localhost:5000', { transports: ['websocket'] })

    // // joinするときの動作
    // socket.emit('join', { user_id: 1, room: 1 })
    // // eslint-disable-next-line no-console
    // console.log('hoge')
    // socket.on('join-response', (msg) => {
    //   // eslint-disable-next-line no-console
    //   console.log(msg + 'nothing?')
    // })
  },
  methods: {
    send(message) {
      this.socket.emit('post', { user_id: '2', room: '1', message })
      this.socket.on('post-join', (response) => {
        // eslint-disable-next-line no-console
        console.log(response)
      })
    },
    clickChip(value) {
      // valueがクリックされたチップのテキスト
      // ここからsend呼び出す
      this.send(value)
      console.log(value)
      console.log(this.$store.state.friend.test)
      this.$store.commit('friend/update', 'update')
      console.log(this.$store.state.friend.test)
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
