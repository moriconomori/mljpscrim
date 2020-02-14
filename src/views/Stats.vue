<template>
  <div>
    <v-container>
      <h1 class="headline accent--text">
        戦績
      </h1>
    </v-container>
    <v-container class="pt-0">
      <v-card
        v-for="result in results"
        :key="result.id"
        tile
        class="mx-auto mb-3 py-1"
      >
        <div class="text-center grey--text">
          <v-icon class="grey--text mx-1">
            mdi-calendar
          </v-icon>2020/2/2(日) 22:00
          <v-icon class="grey--text mx-1 ml-4">
            mdi-sword-cross
          </v-icon>BO3
        </div>

        <v-divider class="my-1" />

        <div class="d-flex justify-center align-center">
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
              <div class="text-right caption orange--text">
                [TeA]
              </div>
              <div>Team ABCDE</div>
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
              <div class="text-left caption orange--text">
                [TeX]
              </div>
              <div>Team XYZAB</div>
            </div>
          </v-card>
        </div>

        <v-divider class="my-1" />

        <div class="d-flex justify-center align-center headline">
          <v-card
            flat
            width="100%"
            class="d-flex flex-row-reverse"
          >
            <span class="red--text">2</span>
            <span class="red--text mr-2">Win</span>
          </v-card>
          <v-card
            flat
            class="grey--text text-center mx-2"
          >
            ―
          </v-card>
          <v-card
            flat
            width="100%"
          >
            <span class="grey--text">0</span>
            <span class="grey--text ml-2">Lose</span>
          </v-card>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Stats",

  components: {},

  metaInfo: {
    title: "Stats",
  },

  data: () => ({
    results: [
      {
        id: "1",
      },
      {
        id: "2",
      },
      {
        id: "3",
      },
    ],
  }),
};
</script>
