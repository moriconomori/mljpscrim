<template>
  <v-app>
    <v-content>
      <v-toolbar
        dense
      >
        <v-toolbar-title class="accent--text">
          MLJP SCRIM
        </v-toolbar-title>
      </v-toolbar>

      <router-view />

      <Footer />
    </v-content>

    <v-bottom-navigation
      app
      grow
      color="accent"
    >
      <v-btn to="/">
        <span>TOP</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/teams">
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

      <v-btn
        to="/about"
        class="d-none"
      >
        <span>About</span>
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

/* workaround for bug */
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
  height: inherit;
}

/* remove hover highlight for mobile */
.v-btn::before {
  background-color: inherit !important;
}
</style>
