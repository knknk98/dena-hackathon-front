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
      roomId: '',
      userId: '',
      friends: [],
    }
  },
  mounted() {
    // friendsを取得
    this.friends = this.$store.state.friend.friends
    // friendIdを取得
    this.friendId = parseInt(
      this.$router.currentRoute.path.split('/').slice(2)[0]
    )

    // roomId を取得
    this.roomId = this.$store.state.friend.roomId

    // 自分のIDを1と仮定
    this.userId = this.$store.state.friend.userId

    this.socket = io(`${this.$config.apiURL}:3000`, {
      transports: ['websocket'],
    })
    // TODO: roomIDを渡すようにする
    this.socket.emit('join', { user_id: this.userId, room: this.roomId })

    console.log(`${this.userId} : ${this.roomId}`)
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
          isMine: String(_chat.sender_id) === String(this.userId),
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
        isMine: String(response.sender_id) === String(this.userId),
        request: false, // ここも変える必要あり
        date: response.created_at,
        iconImage:
          'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg', // ここも変える必要あり
      }
      console.log(response)
      console.log(chat)
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
        user_id: this.userId,
        room: '1',
        message: this.inputText,
      })
      this.inputText = ''
    },
    getImageByUserId(userId) {
      // user
      console.log(this.friends)
      const friend = this.friends.find(
        (friend) => String(userId) === String(friend.userId)
      )
      console.log(friend)
      return friend.iconImage
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
