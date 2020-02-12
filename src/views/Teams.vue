<template>
  <div class="d-flex flex-wrap pa-1">
    <v-card
      v-for="team in teams"
      :key="team.name"
      width="calc(50% - 16px)"
      class="ma-2"
      tile
    >
      <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
      <v-card-subtitle class="pb-0 orange--text">
        {{ team.tag }}
      </v-card-subtitle>
      <v-card-title class="pt-0">
        {{ team.name }}
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Teams",

  components: {},

  data: () => ({
    teams: [
      {
        name: "Team AAA",
        tag: "TA",
      },
      {
        name: "Team BBB",
        tag: "TB",
      },
      {
        name: "Team CCC",
        tag: "TC",
      },
      {
        name: "Team DDD",
        tag: "TD",
      },
      {
        name: "Team EEE",
        tag: "TE",
      },
      {
        name: "Team FFF",
        tag: "TF",
      },
    ],
  }),
};
</script>
