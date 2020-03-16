<template>
  <div>
    <v-row no-gutters class="ma-1">
      <v-col
        v-for="(team, index) in teams"
        :key="index"
        cols="6"
        sm="3"
        class="pa-1"
      >
        <v-card tile :to="'/teams/' + team.uid" class="teams__team">
          <v-sheet color="indigo" tile>
            <img
              ref="teamLogo"
              :src="getLogoImage(team.logoUrl)"
              :alt="team.name"
              :width="teamLogoWidth"
              :height="teamLogoWidth"
              class="teams__team__logo"
            />
          </v-sheet>
          <v-card-subtitle class="accent--text pa-2 pa-sm-4 pb-sm-2">
            [{{ team.tag }}]
          </v-card-subtitle>
          <v-card-title class="teams__team__name pa-2 pa-sm-4 pt-0 pt-sm-0">
            {{ team.name }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import teams from '~/assets/data/teams.json'

export default {
  data: () => ({
    teams,
    teamLogoWidth: {
      type: Number,
    },
  }),

  mounted() {
    window.onresize = () => {
      this.teamLogoWidth = this.getRefTeamLogo().offsetWidth
    }

    this.teamLogoWidth = this.getRefTeamLogo().offsetWidth
  },

  methods: {
    getLogoImage(logoUrl) {
      const path = '/img/logo/'
      if (!logoUrl) {
        return path + 'default.png'
      }
      return path + logoUrl + '.jpg'
    },

    getRefTeamLogo() {
      const isArray = Array.isArray(this.$refs.teamLogo)

      if (isArray) {
        return this.$refs.teamLogo[0]
      }

      return this.$refs.teamLogo
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
.teams__team {
  height: 100%;
}

.teams__team__logo {
  display: block;
  width: 100%;
}

.teams__team__name {
  line-height: 100%;
}
</style>
