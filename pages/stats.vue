<template>
  <div class="stats">
    <v-card
      v-for="stat in stats"
      :key="stat.uid"
      class="mx-auto pt-0 pb-0 mb-3"
      outlined
      tile
    >
      <v-card-text class="text-center py-0 my-1">
        <v-icon class="text--secondary text--lighten-3" size="16">
          mdi-clock-outline
        </v-icon>
        {{ stat.date }}
        <v-icon class="text--secondary text--lighten-3 ml-4" size="16">
          mdi-sword-cross
        </v-icon>
        BO{{ stat.bo }}
      </v-card-text>

      <v-divider class="my-1" />

      <div class="d-flex justify-center align-center my-1">
        <v-card
          flat
          width="100%"
          class="d-flex flex-row-reverse align-center"
          :to="'teams/' + stat.teamInfoLeft.uid"
        >
          <div>
            <v-avatar size="36" color="indigo" tile class="ml-2">
              <img
                :src="stat.teamInfoLeft.logoUrl"
                :alt="stat.teamInfoLeft.name"
              />
            </v-avatar>
          </div>
          <div>
            <div class="text-right caption accent--text">
              [{{ stat.teamInfoLeft.tag }}]
            </div>
            <div>{{ stat.teamInfoLeft.name }}</div>
          </div>
        </v-card>
        <v-card flat class="text-center mx-2 text--secondary">
          VS
        </v-card>
        <v-card
          flat
          width="100%"
          class="d-flex align-center"
          :to="'teams/' + stat.teamInfoRight.uid"
        >
          <div>
            <v-avatar size="36" color="indigo" tile class="mr-2">
              <img
                :src="stat.teamInfoRight.logoUrl"
                :alt="stat.teamInfoRight.name"
              />
            </v-avatar>
          </div>
          <div>
            <div class="text-left caption accent--text">
              [{{ stat.teamInfoRight.tag }}]
            </div>
            <div>{{ stat.teamInfoRight.name }}</div>
          </div>
        </v-card>
      </div>

      <v-divider class="my-1" />

      <div class="d-flex justify-center align-center my-1">
        <v-card
          flat
          width="100%"
          class="d-flex flex-row-reverse align-center"
          :class="stat.teamInfoLeft.isVictory ? 'red--text' : 'grey--text'"
        >
          <div>
            {{ stat.teamInfoLeft.score }}
          </div>
          <div class="mx-2">
            {{ getResultText(stat.teamInfoLeft.isVictory) }}
          </div>
        </v-card>
        <v-card flat class="text-center mx-2 text--secondary">
          -
        </v-card>
        <v-card
          flat
          width="100%"
          class="d-flex align-center"
          :class="stat.teamInfoRight.isVictory ? 'red--text' : 'grey--text'"
        >
          <div>
            {{ stat.teamInfoRight.score }}
          </div>
          <div class="mx-2">
            {{ getResultText(stat.teamInfoRight.isVictory) }}
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
import statsJson from '~/assets/json/stats.json'

export default {
  data: () => ({
    stats: {
      type: Array,
    },
  }),

  async created() {
    if (statsJson) {
      this.stats = statsJson
    } else {
      const stats = await this.$axios.$get(
        'https://script.google.com/macros/s/AKfycbzHGIXhIr70kYpljKadfT_XMxBWo9wGSW73n9XbuhZi8uPFlyw/exec'
      )
      this.stats = stats
    }
  },

  methods: {
    getResultText(isVictory) {
      if (isVictory) {
        return 'VICTORY'
      } else {
        return 'DEFEAT'
      }
    },
  },

  head() {
    return {
      title: 'Stats',
    }
  },
}
</script>
