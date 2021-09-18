<template>
  <v-app-bar app dark class="chat-header px-2">
    <v-btn icon class="mr-1" nuxt to="/talk">
      <v-icon color="white">mdi-chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title>Shoma</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.chat-header {
  box-shadow: $default-shadow !important;
}
</style>
