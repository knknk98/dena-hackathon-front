<template>
  <div>
    <talk-item />
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
  data() {
    return {
      value: 'talk',
    }
  },
})
</script>

<style lang="scss" scoped>
.tab {
  position: fixed;
  bottom: 0;
}
</style>
