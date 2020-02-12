<template>
  <v-container>
    <h1 class="headline accent--text mb-2">
      クラン
    </h1>

    <v-card
      class="mx-auto mb-4"
      tile
    >
      <v-row no-gutters>
        <v-col cols="6">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
        </v-col>
        <v-col
          cols="6"
          class="d-flex flex-column justify-center pl-4"
        >
          <div class="orange--text">
            [{{ team[teamId].tag }}]
          </div>
          <h1 class="headline">
            {{ teamId }}
          </h1>
        </v-col>
      </v-row>
    </v-card>

    <h2 class="headline accent--text mb-2">
      メンバー
    </h2>

    <v-card
      v-for="member in team[teamId].members"
      :key="member"
      class="mx-auto px-3 pt-1 pb-2 mb-4"
      outlined
    >
      <div class="mb-1">
        <span class="headline">
          {{ member }}
        </span>
        <v-chip
          x-small
          label
          color="orange"
          text-color="white"
        >
          LEADER
        </v-chip>
      </div>

      <div>
        <span class="text--secondary">Role</span>
        <v-chip
          x-small
          class="ml-2"
        >
          Fighter
        </v-chip>
        <v-chip
          x-small
          class="ml-2"
        >
          Mage
        </v-chip>
        <v-chip
          x-small
          class="ml-2"
        >
          Marksman
        </v-chip>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Team",

  components: {},

  data: () => ({
    teamId: "",
    team: {
      aiueo: {
        members: ["ichiro1", "jiro1", "saburo1", "shiro1", "goro1", "111"],
        tag: "ai",
      },
      kakikukeko: {
        members: ["ichiro2", "jiro2", "saburo2", "shiro2", "goro2", "2222"],
        tag: "ka",
      },
      ccccc: {
        members: ["ichiro3", "jiro3", "saburo3", "shiro3", "goro3", "333"],
        tag: "cc",
      },
      dddddddd: {
        members: ["ichiro4", "jiro4", "saburo4", "shiro4", "goro4", "4444"],
        tag: "dd",
      },
      eeeeeee: {
        members: ["ichiro5", "jiro5", "saburo5", "shiro5", "goro5", "55555"],
        tag: "ee",
      },
      ffffffff: {
        members: ["ichiro6", "jiro6", "saburo6", "shiro6", "goro6", "666666"],
        tag: "f2",
      },
    },
  }),

  created: function () {
    this.teamId = this.$route.params.id;
  },
};
</script>
