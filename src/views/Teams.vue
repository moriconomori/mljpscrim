<template>
  <div>
    <v-container>
      <h1 class="headline accent--text">
        クラン一覧
      </h1>
    </v-container>

    <div class="teams-container">
      <div class="teams-list">
        <div
          v-for="team in teams"
          :key="team.name"
          class="teams-list-item"
        >
          <v-card tile>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
            <v-card-subtitle class="orange--text">
              [{{ team.tag }}]
            </v-card-subtitle>
            <v-card-title>
              {{ team.name }}
            </v-card-title>
          </v-card>
        </div>
      </div>
    </div>
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

<style>
.teams-container {
  margin: 0 12px 0 0;
}

.teams-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.teams-list-item {
  width: calc(50% - 12px);
  margin: 0 0 12px 12px;
}

.v-card__subtitle {
  padding: 8px 8px 0;
}

.v-card__title {
  padding: 0 8px;
}
</style>
