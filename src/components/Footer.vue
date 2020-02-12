<template>
  <v-footer
    padless
    class="text--secondary"
  >
    <v-container class="py-2 px-12 d-flex justify-space-around">
      <router-link
        v-for="link in links"
        :key="link.text"
        tag="span"
        :to="link.to"
      >
        {{ link.text }}
      </router-link>
    </v-container>

    <v-container class="pt-0 pb-2">
      <div
        class="text-center"
      >
        <small>&copy; 2020 Morico</small>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  components: {},

  data: () => ({
    links: [
      {
        text: "TOP",
        to: "/",
      },
      {
        text: "MLJP SCRIM とは",
        to: "/about",
      },
    ],
  }),
};
</script>
