<template>
  <v-footer padless class="d-flex flex-column">
    <div class="d-flex justify-space-around">
      <router-link
        v-for="link in links"
        :key="link.to"
        v-ripple
        :to="link.to"
        class="text--secondary py-1 px-2"
      >
        {{ link.text }}
      </router-link>
    </div>

    <div class="text-center text--secondary mb-1">
      <small>&copy; 2020 Morico</small>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: 'MLJP SCRIM とは',
        to: '/about',
      },
      {
        text: 'お問い合わせ',
        to: '/contactus',
      },
    ],
  }),
}
</script>

<style scoped>
.v-footer a {
  text-decoration: none;
}
</style>
