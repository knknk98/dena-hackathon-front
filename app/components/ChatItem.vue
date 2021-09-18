<template>
  <div class="chatitem">
    <div
      v-if="isMine === true"
      class="d-flex flex-row-reverse my-4 chatitem__mine"
    >
      <v-card class="pa-3">
        <div class="white--text">今暇だったりしない？</div>
      </v-card>
      <div class="align-self-end mx-2 grey--text">21:08</div>
    </div>
    <div v-else class="d-flex my-4">
      <v-avatar size="36" class="mr-2">
        <img
          src="https://pbs.twimg.com/profile_images/1384754241097535489/-8-WiVO5_400x400.jpg"
        />
      </v-avatar>
      <v-card color="#F4F4F4" class="pa-3">
        <div class="chatitem--textcolor">ちょうどめっちゃ暇だったw</div>
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
      border-radius: 8px 8px 0px 8px !important;
    }
  }
  .v-card {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px 8px 8px 0px;
  }
  &--textcolor {
    color: #9e9e9e;
  }
}
</style>
