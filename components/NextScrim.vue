<template>
  <div class="next-scrim">
    <section-header>
      次のスクリム
    </section-header>

    <v-card
      v-for="nextScrim in nextScrim"
      :key="nextScrim.uid"
      class="mx-auto pt-0 pb-0 mb-3"
      outlined
      tile
    >
      <v-card-text class="text-center py-0 my-1">
        <v-icon class="text--secondary text--lighten-3" size="16">
          mdi-clock-outline
        </v-icon>
        {{ nextScrim.date }}
        <v-icon class="text--secondary text--lighten-3 ml-4" size="16">
          mdi-sword-cross
        </v-icon>
        BO{{ nextScrim.bo }}
      </v-card-text>
      <v-divider class="my-1" />
      <div class="d-flex justify-center align-center my-1">
        <v-card
          flat
          width="100%"
          class="d-flex flex-row-reverse align-center"
          :to="'team/' + nextScrim.teamLeftInfo.uid"
        >
          <div>
            <v-avatar size="36" color="indigo" tile class="ml-2">
              <img
                :src="nextScrim.teamLeftInfo.logoUrl"
                :alt="nextScrim.teamLeftInfo.name"
              />
            </v-avatar>
          </div>
          <div>
            <div class="text-right caption accent--text">
              [{{ nextScrim.teamLeftInfo.tag }}]
            </div>
            <div>{{ nextScrim.teamLeftInfo.name }}</div>
          </div>
        </v-card>
        <v-card flat class="text-center mx-2 text--secondary">
          VS
        </v-card>
        <v-card
          flat
          width="100%"
          class="d-flex align-center"
          :to="'team/' + nextScrim.teamRightInfo.uid"
        >
          <div>
            <v-avatar size="36" color="indigo" tile class="mr-2">
              <img
                :src="nextScrim.teamRightInfo.logoUrl"
                :alt="nextScrim.teamRightInfo.name"
              />
            </v-avatar>
          </div>
          <div>
            <div class="text-left caption accent--text">
              [{{ nextScrim.teamRightInfo.tag }}]
            </div>
            <div>{{ nextScrim.teamRightInfo.name }}</div>
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
import nextScrimJson from '~/assets/json/next_scrim.json'

export default {
  data: () => ({
    nextScrim: {
      type: Array,
    },
  }),

  async created() {
    if (nextScrimJson) {
      this.nextScrim = nextScrimJson
    } else {
      const nextScrim = await this.$axios.$get(
        'https://script.google.com/macros/s/AKfycbwOkwCt2nIyKLpJnR68Unl6UuovCEFevEZQ-ZPIjpdMhbCA9dnd/exec'
      )
      this.nextScrim = nextScrim
    }
  },
}
</script>
