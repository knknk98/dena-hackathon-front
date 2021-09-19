<template>
  <div>
    <v-btn class="button" nuxt to="/signup/home">
      <v-icon left> mdi-twitter </v-icon>Twitterでログイン
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.button {
  background-image: $primary-gradient;
  color: white;
}
</style>
