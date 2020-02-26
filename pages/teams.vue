<template>
  <div class="teams-container mt-3">
    <div v-if="clans.length" class="teams-list">
      <div v-for="clan in clans" :key="clan.uid" class="teams-list-item">
        <v-card tile :to="'team/' + clan.uid">
          <v-img eager src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
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
import clansJson from '~/assets/json/teams.json'

export default {
  data: () => ({
    clans: {
      type: Array,
    },
  }),

  async created() {
    if (clansJson) {
      this.clans = clansJson
      return
    }

    const clans = await this.$axios.$get(
      'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec'
    )
    this.clans = clans
  },

  head() {
    return {
      title: 'Teams',
    }
  },
}
</script>

<style scoped>
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
