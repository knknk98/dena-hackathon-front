<template>
  <div class="friend">
    <img
      src="../assets/icon_sample.png"
      alt="ユーザーアイコン"
      class="friend-icon"
    />
    <p class="friend-name ma-0 ml-4">Shoma</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'friend-item',
})
</script>

<style lang="scss" scoped>
.friend {
  display: flex;
  align-items: center;
  &-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  &-name {
    font-size: 18px;
    color: #08072f;
  }
}
</style>
