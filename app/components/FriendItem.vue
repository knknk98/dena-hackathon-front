<template>
  <div class="friend" @click="isChecked = !isChecked">
    <div class="friend-inner">
      <img
        src="../assets/icon_sample.png"
        alt="ユーザーアイコン"
        class="friend-inner-icon"
      />
      <p class="friend-inner-name ma-0 ml-4">Shoma</p>
    </div>
    <div :class="['checkbox', isChecked ? 'checked' : '']">
      <v-icon size="16" class="checkbox-icon">mdi-star</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FriendItem',
  data() {
    return {
      isChecked: false,
    }
  },
})
</script>

<style lang="scss" scoped>
.friend {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
}

.checkbox {
  display: flex;
  width: 24px;
  height: 24px;
  background-color: gray;
  border-radius: 50%;
  &-icon {
    flex: 1;
    color: white;
    text-align: center;
  }
}

.checked {
  background-color: unset;
  background-image: $primary-gradient;
}
</style>
