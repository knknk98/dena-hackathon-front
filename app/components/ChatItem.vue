<template>
  <div class="chatitem">
    <div
      v-if="isMine === true"
      class="d-flex flex-row-reverse my-4 chatitem__mine"
    >
      <v-card>
        <v-card-text class="white--text">今暇だったりしない？</v-card-text>
      </v-card>
      <div class="align-self-end mx-2 grey--text">21:08</div>
    </div>
    <div v-else class="d-flex my-4">
      <v-avatar size="36" class="mr-2">
        <img
          src="https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg"
        />
      </v-avatar>
      <v-card color="#F4F4F4">
        <v-card-text>ちょうどめっちゃ暇だったw</v-card-text>
      </v-card>
      <div class="align-self-end mx-2 grey--text">21:08</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  props: {
    isMine: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.chatitem {
  &__mine {
    .v-card {
      background: linear-gradient(to right, #aadfeb, #71cfe3);
    }
  }
}
</style>
