<template>
  <v-footer padless>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.text"
        text
        rounded
        class="my-2"
      >
        <router-link
          :to="link.to"
          class="text--secondary"
        >
          {{ link.text }}
        </router-link>
      </v-btn>
      <v-col
        class="py-4 text-center text--secondary"
        cols="12"
      >
        &copy; 2020 Morico
      </v-col>
    </v-row>
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

<style>
footer a {
  text-decoration: none;
}
</style>
