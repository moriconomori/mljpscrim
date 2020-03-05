<template>
  <v-app>
    <v-content>
      <default-header />

      <nuxt class="main-content-wrap" />

      <default-footer />
      <bottom-navigation />
    </v-content>
  </v-app>
</template>

<script>
import DefaultHeader from '~/components/DefaultHeader.vue'
import DefaultFooter from '~/components/DefaultFooter.vue'
import BottomNavigation from '~/components/BottomNavigation.vue'

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    BottomNavigation,
  },
}
</script>

<style>
.main-content-wrap {
  max-width: 768px;
  margin: 0 auto;
}
</style>
