<template>
  <div>
    <app-header class="header" />
    <talk-item v-for="talk in talks" :key="talk.friendId" :talk="talk" />

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
    }
  },
  mounted() {
    axios
      .get(
        'http://ec2-18-176-53-88.ap-northeast-1.compute.amazonaws.com/api/contact'
      )
      .then((res) => {
        console.log(res)
        // received_contact_list
        for (const contact of res.data.received_contact_list) {
          const talk = {
            friendId: contact.sender_id,
            roomId: contact.room_id,
            message: contact.message,
            date: contact.send_at,
            request: true,
          }
          this.talks.push(talk)
        }

        // past_message_list
        for (const contact of res.data.past_message_list) {
          const talk = {
            friendId: contact.sender_id,
            roomId: contact.room_id,
            message: contact.message,
            date: contact.send_at,
            request: false,
          }
          this.talks.push(talk)
        }
      })
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
