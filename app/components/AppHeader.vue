<template>
  <v-app-bar dense class="header">
    <v-toolbar-title>App</v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
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
})
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff !important;
  box-shadow: $default-shadow !important;
}
</style>
