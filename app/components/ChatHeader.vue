<template>
  <v-app-bar app dark class="chat-header px-2">
    <v-btn icon class="mr-1">
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
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1) !important;
  background: linear-gradient(to right, #aadfeb, #71cfe3);
}
</style>
