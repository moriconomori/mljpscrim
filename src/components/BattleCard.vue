<template>
  <div>
    <v-card
      class="mx-auto py-3"
      tile
    >
      <v-card-title class="justify-center subtitle-1 pa-0">
        <span class="mr-2">次のスクリム</span><span class="accent--text">2/11(火) 22:00</span>
      </v-card-title>

      <v-card-text class="pa-0 text--primary">
        <div
          class="d-flex justify-center align-center"
        >
          <div class="pr-1">
            <div class="text-right caption orange--text">
              [TeA]
            </div>
            <div>
              Team ABCDE
            </div>
          </div>
          <div>
            <v-avatar
              size="36"
              color="indigo"
              tile
              class="mx-1"
            >
              A
            </v-avatar>
          </div>

          <div class="mx-2">
            VS
          </div>

          <div>
            <v-avatar
              size="36"
              color="indigo"
              tile
              class="mx-1"
            >
              X
            </v-avatar>
          </div>
          <div class="pl-1">
            <div class="text-left caption orange--text">
              [TeX]
            </div>
            <div>
              Team XYZAB
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'BattleCard',

  data: () => ({
  }),
}
</script>
