<template>
  <v-app>
    <v-content>
      <v-app-bar>
        <v-toolbar-title class="accent--text">MLJP SCRIM</v-toolbar-title>
      </v-app-bar>

      <nuxt />

      <default-footer />
      <bottom-navigation />
    </v-content>
  </v-app>
</template>

<script>
import DefaultFooter from '~/components/DefaultFooter.vue'
import BottomNavigation from '~/components/BottomNavigation.vue'

export default {
  components: {
    DefaultFooter,
    BottomNavigation,
  },
}
</script>
