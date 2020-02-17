<template>
  <div class="teams-container mt-3">
    <div 
      class="text-center my-12"
      v-if="!clans"
    >
      <v-progress-circular
        indeterminate
        color="accent"
      />
    </div>
    <div class="teams-list">
      <div
        v-for="clan in clans"
        :key="clan.url_id"
        class="teams-list-item"
      >
        <v-card
          tile
          :to="{ name: 'team', params: { id: clan.url_id }}"
        >
          <v-img
            eager
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          />
          <v-card-subtitle class="accent--text">
            [{{ clan.tag }}]
          </v-card-subtitle>
          <v-card-title>
            {{ clan.name }}
          </v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams",

  components: {},

  metaInfo: {
    title: "Teams",
  },

  data: () => ({
    teams: [
      {
        id: "aiueo",
        name: "Team AAA",
        tag: "TA",
      },
      {
        id: "kakikukeko",
        name: "Team BBB",
        tag: "TB",
      },
      {
        id: "ccccc",
        name: "Team CCC",
        tag: "TC",
      },
      {
        id: "dddddddd",
        name: "Team DDD",
        tag: "TD",
      },
      {
        id: "eeeeeee",
        name: "Team EEE",
        tag: "TE",
      },
      {
        id: "ffffffff",
        name: "Team FFF",
        tag: "TF",
      },
    ],

    clans: null,
  }),

  created: function () {
    this.axios
      .get("https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec")
      .then((response) => {
        this.clans = response.data;
      });
  },
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
