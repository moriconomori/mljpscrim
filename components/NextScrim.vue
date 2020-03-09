<template>
  <div class="next-scrim">
    <section-header>次のスクリム</section-header>

    <v-card v-if="!nextScrim.length" outlined class="text-center ma-2 pa-8">
      データがありません
    </v-card>

    <v-card
      v-for="(scrim, index) in nextScrim"
      :key="index"
      outlined
      class="scrim ma-2 py-1"
    >
      <div class="d-flex justify-center align-center text--secondary ">
        <v-icon size="16" class="text--secondary mr-1">
          {{ mdiClockOutline }}
        </v-icon>
        {{ scrim.date }}
        <v-icon size="16" class="text--secondary ml-4 mr-1">
          {{ mdiSwordCross }}
        </v-icon>
        BO{{ scrim.bo }}
      </div>

      <v-divider class="my-1" />

      <v-row no-gutters>
        <v-col align-self="center">
          <v-card
            flat
            tile
            class="d-flex flex-row-reverse align-center"
            :to="'/teams/' + scrim.teamInfoLeft.uid"
          >
            <v-avatar size="36" color="indigo" tile class="ml-2">
              <img
                :src="getLogoImage(scrim.teamInfoLeft.logoUrl)"
                :alt="scrim.teamInfoLeft.name"
              />
            </v-avatar>
            <div class="text-right">
              <div class="caption accent--text">
                [{{ scrim.teamInfoLeft.tag }}]
              </div>
              <div class="team__name">{{ scrim.teamInfoLeft.name }}</div>
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
            :to="'/teams/' + scrim.teamInfoRight.uid"
          >
            <div>
              <v-avatar size="36" color="indigo" tile class="mr-2">
                <img
                  :src="getLogoImage(scrim.teamInfoRight.logoUrl)"
                  :alt="scrim.teamInfoRight.name"
                />
              </v-avatar>
            </div>
            <div class="text-left">
              <div class="caption accent--text">
                [{{ scrim.teamInfoRight.tag }}]
              </div>
              <div class="team__name">{{ scrim.teamInfoRight.name }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mdiSwordCross, mdiClockOutline } from '@mdi/js'
import SectionHeader from '~/components/SectionHeader'
import nextScrim from '~/assets/data/next_scrim.json'

export default {
  components: {
    SectionHeader,
  },

  data: () => ({
    nextScrim,
    mdiSwordCross,
    mdiClockOutline,
  }),

  methods: {
    getLogoImage(logoUrl) {
      const path = '/img/logo/'
      if (!logoUrl) {
        return path + 'default.png'
      }
      return path + logoUrl + '.jpg'
    },
  },
}
</script>

<style scoped>
.next-scrim .team__name {
  word-break: break-all;
}
</style>
