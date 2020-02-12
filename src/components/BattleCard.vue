<template>
  <v-container>
    <v-card
      class="mx-auto"
    >
      <v-card-title class="justify-center subtitle-1 pb-1 px-0">
        次回のスクリム予定<span class="accent--text pl-4">2/11(火) 22:00</span>
      </v-card-title>

      <v-card-text class="px-0 text--primary">
        <div
          class="d-flex justify-center align-center"
        >
          <div>
            <v-avatar
              size="36"
              color="indigo"
            >
              A
            </v-avatar>
          </div>
          <div class="pl-2">
            <div class="caption orange--text">
              ST
            </div>
            <div>
              Team ABCDE
            </div>
          </div>
          <div class="px-4">
            VS
          </div>
          <div class="pr-2">
            <div class="caption orange--text">
              10s
            </div>
            <div>
              Team XYZAB
            </div>
          </div>
          <div>
            <v-avatar
              size="36"
              color="indigo"
            >
              X
            </v-avatar>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'BattleCard',

  data: () => ({
  }),
}
</script>
