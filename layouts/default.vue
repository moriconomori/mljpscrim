<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-title>MLJP SCRIM</v-toolbar-title>
      </v-toolbar>

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
