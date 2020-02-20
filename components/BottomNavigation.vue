<template>
  <v-bottom-navigation :value="activeBtn" app grow color="accent">
    <v-btn to="/">
      <span>TOP</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/teams" value="clan">
      <span>クラン</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>

    <v-btn to="/stats">
      <span>戦績</span>
      <v-icon>mdi-trophy</v-icon>
    </v-btn>

    <v-btn to="/news">
      <span>お知らせ</span>
      <v-icon>mdi-newspaper</v-icon>
    </v-btn>

    <v-btn to="/about" class="d-none">
      <span>About</span>
      <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: '',
    }
  },
}
</script>

<style scoped>
/*
 ** Workaround for the bug
 ** See https://github.com/vuetifyjs/vuetify/issues/8067
 */
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
  height: inherit;
}

/*
 ** Remove hover highlights for mobile
 */
.v-btn::before {
  background-color: inherit !important;
}
</style>
