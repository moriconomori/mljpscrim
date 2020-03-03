<template>
  <v-card outlined class="result py-1">
    <div class="text-center text--secondary">
      <v-icon size="14" class="text--secondary">mdi-clock-outline</v-icon>
      {{ result.date }}
      <v-icon size="14" class="text--secondary ml-4">mdi-sword-cross</v-icon>
      BO{{ result.bo }}
    </div>

    <v-divider class="my-1" />

    <v-row no-gutters>
      <v-col align-self="center">
        <v-card
          flat
          tile
          class="d-flex flex-row-reverse align-center"
          :to="'teams/' + result.teamInfoLeft.uid"
        >
          <v-avatar size="36" color="indigo" tile class="ml-2">
            <img
              :src="getLogoImage(result.teamInfoLeft.logoUrl)"
              :alt="result.teamInfoLeft.name"
            />
          </v-avatar>
          <div class="text-right">
            <div class="caption accent--text">
              [{{ result.teamInfoLeft.tag }}]
            </div>
            <div class="team__name">{{ result.teamInfoLeft.name }}</div>
          </div>
        </v-card>
      </v-col>

      <v-col align="center" align-self="center" cols="1">
        <span class="text--secondary">VS</span>
      </v-col>

      <v-col align-self="center">
        <v-card
          flat
          tile
          class="d-flex align-center"
          :to="'teams/' + result.teamInfoRight.uid"
        >
          <div>
            <v-avatar size="36" color="indigo" tile class="mr-2">
              <img
                :src="getLogoImage(result.teamInfoRight.logoUrl)"
                :alt="result.teamInfoRight.name"
              />
            </v-avatar>
          </div>
          <div class="text-left">
            <div class="caption accent--text">
              [{{ result.teamInfoRight.tag }}]
            </div>
            <div class="team__name">{{ result.teamInfoRight.name }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-1" />

    <v-row no-gutters>
      <v-col
        align-self="center"
        class="text-right"
        :class="result.teamInfoLeft.isVictory ? 'red--text' : 'grey--text'"
      >
        {{ getResultText(result.teamInfoLeft.isVictory) }}
        <span class="ml-2">
          {{ result.teamInfoLeft.score }}
        </span>
      </v-col>

      <v-col align="center" align-self="center" cols="1">
        <span class="text--secondary">-</span>
      </v-col>

      <v-col
        align-self="center"
        :class="result.teamInfoRight.isVictory ? 'red--text' : 'grey--text'"
      >
        <span class="mr-2">
          {{ result.teamInfoRight.score }}
        </span>
        {{ getResultText(result.teamInfoRight.isVictory) }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    alignments: ['start', 'center', 'end'],
  }),
  methods: {
    getResultText(isVictory) {
      if (isVictory) {
        return 'VICTORY'
      } else {
        return 'DEFEAT'
      }
    },

    getLogoImage(logoUrl) {
      const path = '/imgs/logos/'
      if (!logoUrl) {
        return path + 'default.png'
      }
      return path + logoUrl + '.jpg'
    },
  },
}
</script>

<style scoped>
.result .v-icon {
  vertical-align: initial;
}

.result .team__name {
  word-break: break-all;
}
</style>
