<template>
  <v-app>
    <v-app-bar
      app
      hide-on-scroll
    >
      <router-link
        to="/"
        class="orange--text"
      >
        MLJP SCRIM
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view />
      <Footer />
    </v-content>

    <v-bottom-navigation
      app
      grow
      color="accent"
    >
      <v-btn to="/">
        TOP
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/teams">
        クラン & 選手
        <v-icon>mdi-account-group</v-icon>
      </v-btn>

      <v-btn>
        戦績
        <v-icon>mdi-trophy</v-icon>
      </v-btn>

      <v-btn>
        お知らせ
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>

      <v-btn
        to="/about"
        class="d-none"
      >
        About
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Footer,
  },

  metaInfo: {
    title: "MLJP SCRIM",
    titleTemplate: "%s | MLJP SCRIM",
  },

  data: () => ({
    // activeBtn: true,
  }),
};
</script>

<style>
.v-toolbar a {
  text-decoration: none;
}
</style>