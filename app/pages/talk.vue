<template>
  <div>
    <app-header class="header" />
    <talk-item v-for="i in 20" :key="i" />

    <v-bottom-navigation v-model="value" class="tab">
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

export default Vue.extend({
  name: 'talk',
  data() {
    return {
      value: 'talk',
    }
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
</style>
