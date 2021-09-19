<template>
  <div class="friend" @click="checkBoxStatus">
    <div class="friend-inner">
      <img
        :src="friend.iconImage"
        alt="ユーザーアイコン"
        class="friend-inner-icon"
      />
      <p class="friend-inner-name ma-0 ml-4">{{ friend.userName }}</p>
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
  props: {
    friend: {
      type: Object,
      default: () => ({
        userId: '',
        userName: '',
        iconImage: '',
      }),
    },
  },
  data() {
    return {
      isChecked: false,
    }
  },
  methods: {
    // emit
    checkBoxStatus() {
      this.isChecked = !this.isChecked
      this.$emit('checkBoxStatus', this.isChecked)
    },
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
