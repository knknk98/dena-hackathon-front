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
    axios.post(
      'http://ec2-13-230-67-131.ap-northeast-1.compute.amazonaws.com/api/users/signin',
      {
        oauth_token: oauthToken,
        oauth_verifier: oauthVerifier,
        oauth_secret: oauthSecret,
      }
    )
  },
})
</script>
