<template>
  <div>
    <app-header class="header" />
    <talk-item v-for="talk in talks" :key="talk.index" :talk="talk" />

    <v-bottom-navigation v-model="value" grow class="tab color">
      <v-btn value="home" nuxt to="/">
        <span>Home</span>

        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>
      <v-btn value="talk">
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
import TalkItem from '../components/TalkItem.vue'

export default Vue.extend({
  name: 'Talk',
  components: { AppHeader, TalkItem },
  data() {
    return {
      value: 'talk',
      talks: [],
      friends: [],
    }
  },
  mounted() {
    this.userId = this.$store.state.friend.userId
    this.friends = this.$store.state.friend.friends
    console.log(this.friends)

    axios
      .get(`${this.$config.apiURL}/api/contacts/${this.userId}`)
      .then((res) => {
        console.log(res)

        let list = []

        if (res.data.received_contact_list) {
          list = res.data.receiced_contact_list
        }

        // received_contact_list
        for (const [index, contact] of list.entries()) {
          const talk = {
            friendId: contact.sender_id,
            roomId: contact.room_id,
            message: contact.message,
            date: contact.send_at,
            request: true,
            index,
            iconUrl:
              'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
          }
          this.talks.push(talk)
        }

        // past_message_list
        if (res.data.past_message_list === null) {
          res.data.past_message_list = []
        }

        for (const contact of res.data.past_message_list) {
          const talk = {
            friendId: contact.sender_id,
            roomId: contact.room_id,
            message: contact.message,
            date: contact.send_at,
            request: false,
            iconUrl:
              'https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg',
          }
          this.talks.push(talk)
        }
      })
  },
  methods: {
    getImageByUserId(userId) {
      // user
      const friend = this.friends.find((friend) => userId === friend.userId)
      return friend.iconImage
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

.tab {
  position: fixed;
  bottom: 0;
}

.color {
  color: #fc6076;
}
</style>
