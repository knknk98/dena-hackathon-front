<template>
  <v-row class="mt-16">
    <v-col class="text-center">
      <img src="../assets/logo.png" alt="Logo" class="mb-5" width="150px" />
      <blockquote class="blockquote">
        <v-btn class="button" nuxt to="/signin/home">
          <v-icon left> mdi-twitter </v-icon>Twitterでログイン
        </v-btn>
      </blockquote>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.button {
  background-image: $primary-gradient;
  color: white;
}
</style>
