<template>
  <div class="teams">
    <v-row no-gutters class="ma-1">
      <v-col
        v-for="(team, index) in teams"
        :key="index"
        cols="6"
        sm="3"
        class="pa-1"
      >
        <v-card tile :to="'/teams/' + team.uid" height="100%">
          <v-sheet color="indigo" tile>
            <v-img eager :src="getLogoImage(team.logoUrl)" />
          </v-sheet>
          <v-card-subtitle class="accent--text pb-0">
            [{{ team.tag }}]
          </v-card-subtitle>
          <v-card-title class="teams__name pt-1">
            {{ team.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import teamsJson from '~/assets/json/teams.json'

export default {
  data: () => ({
    teams: {
      type: Array,
    },
  }),

  async created() {
    if (teamsJson) {
      this.teams = teamsJson
      return
    }

    const teams = await this.$axios.$get(
      'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec'
    )
    this.teams = teams
  },

  methods: {
    getLogoImage(logoUrl) {
      const path = '/imgs/logos/'
      if (!logoUrl) {
        return path + 'default.png'
      }
      return path + logoUrl + '.jpg'
    },
  },

  head() {
    return {
      title: 'Teams',
    }
  },
}
</script>

<style scoped>
.teams .teams__name {
  line-height: 100%;
}
</style>
