<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-title>MLJP SCRIM</v-toolbar-title>
      </v-toolbar>

      <nuxt />

      <default-footer />
    </v-content>
  </v-app>
</template>

<script>
import DefaultFooter from '~/components/DefaultFooter.vue'

export default {
  components: {
    DefaultFooter,
  },
}
</script>
