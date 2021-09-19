<template>
  <div>signin</div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

export default Vue.extend({
  async mounted() {
    const response = await fetch(
      `${this.$config.apiURL}/api/users/twitter_signup_url`
    )
    const {
      url,
      oauth_token: oauthToken,
      oauth_secret: oauthSecret,
    } = await response.json()
    this.$cookie.set('oauth_token', oauthToken, 30, '/')
    this.$cookie.set('oauth_secret', oauthSecret, 30, '/')
    console.log(oauthSecret)
    window.location.href = url
  },
})
</script>
