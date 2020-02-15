<template>
  <div>
    <base-section-header>
      次のスクリム
    </base-section-header>

    <v-card
      class="mx-auto pt-0 pb-0"
      outlined
      tile
    >
      <v-card-text class="text-center py-0 my-1">
        <v-icon
          class="secondary--text text--lighten-3"
          size="16"
        >
          mdi-clock-outline
        </v-icon>
        2020.2.11 22:00
        <v-icon
          class="secondary--text text--lighten-3 ml-4"
          size="16"
        >
          mdi-sword-cross
        </v-icon>
        BO3
      </v-card-text>
      <v-divider class="my-1" />
      <div class="d-flex justify-center align-center my-1">
        <v-card
          flat
          width="100%"
          class="d-flex flex-row-reverse align-center"
        >
          <div>
            <v-avatar
              size="36"
              color="indigo"
              tile
              class="ml-2"
            >
              A
            </v-avatar>
          </div>
          <div>
            <div class="text-right caption accent--text">
              [TeA]
            </div>
            <div>Team A</div>
          </div>
        </v-card>
        <v-card
          flat
          class="text-center mx-2 grey--text"
        >
          VS
        </v-card>
        <v-card
          flat
          width="100%"
          class="d-flex align-center"
        >
          <div>
            <v-avatar
              size="36"
              color="indigo"
              tile
              class="mr-2"
            >
              X
            </v-avatar>
          </div>
          <div>
            <div class="text-left caption accent--text">
              [TeX]
            </div>
            <div>Team XYZAB</div>
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NextScrim',

  data: () => ({
  }),
}
</script>
