<template>
  <v-app-bar dense class="header">
    <v-avatar size="24" class="mr-2"
      ><img
        src="https://user-images.githubusercontent.com/65712721/133919531-1f6fdd59-e3cd-4801-a475-dfdb898c4499.png"
    /></v-avatar>
    <v-toolbar-title>melt</v-toolbar-title>
    <v-spacer></v-spacer>
    <div @click="toSettingPage">
      <v-avatar size="24"
        ><img
          src="https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg"
      /></v-avatar>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppHeader',
  methods: {
    toSettingPage() {
      this.$router.push('setting')
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff !important;
  box-shadow: $default-shadow !important;
}
</style>
