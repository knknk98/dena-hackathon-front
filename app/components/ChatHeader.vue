<template>
  <div class="chat-header px-2">
    <v-btn icon class="mr-1">
      <v-icon color="white">mdi-chevron-left</v-icon>
    </v-btn>
    <v-toolbar-title>Shoma</v-toolbar-title>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.chat-header {
  display: flex;
  color: white;
  height: 48px;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #aadfeb, #71cfe3);
}
</style>
