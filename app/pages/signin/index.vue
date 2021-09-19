<template>
  <div>login成功</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from 'axios'
Vue.use(VueCookie)

export default Vue.extend({
  mounted() {
    const oauthToken = this.$route.query.oauth_token
    const oauthVerifier = this.$route.query.oauth_verifier
    const oauthSecret = this.$cookie.get('oauth_secret')
    axios
      .post(`${this.$config.apiURL}/api/users/signin`, {
        oauth_token: oauthToken,
        oauth_verifier: oauthVerifier,
        oauth_secret: oauthSecret,
      })
      .then((res) => {
        console.log(res)
        const user = {
          id: res.data.user.id,
          userName: res.data.user.username,
          displayName: res.data.user.display_name,
          iconUrl: res.data.user.icon_url,
        }
        this.$store.commit('friend/updateUserInfo', user)
        this.$store.commit('friend/updateUserId', user.id)
        this.$router.push('/')
      })
  },
})
</script>
