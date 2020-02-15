<template>
  <div>
    <v-container>
      <v-card
        class="mx-auto"
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
            <div class="accent--text">
              [{{ team[teamId].tag }}]
            </div>
            <h1 class="headline">
              {{ teamId }}
            </h1>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <base-section-header>
      メンバー
    </base-section-header>
    <v-container pt-0>
      <v-card
        v-for="member in team[teamId].members"
        :key="member.name"
        class="mx-auto px-3 pt-1 pb-2 mb-4"
        outlined
      >
        <div class="d-flex align-center mb-1">
          <span class="headline">{{ member.name }}</span>
          <v-chip
            x-small
            label
            color="accent"
            text-color="white"
            class="ml-2"
            v-if="member.isLeader"
          >
            LEADER
          </v-chip>
        </div>

        <div>
          <span class="caption text--secondary">Role</span>
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
  </div>
</template>

<script>
export default {
  name: "Team",

  components: {},

  metaInfo () {
    return {
      title: this.teamId,
      titleTemplate: "%s | Teams | MLJP SCRIM",
    }
  },

  data: () => ({
    teamId: "",
    team: {
      aiueo: {
        members: [
          { name: "ichiro1", isLeader: true },
          { name: "jiro1", isLeader: false },
          { name: "saburo1", isLeader: false },
          { name: "shiro1", isLeader: false },
          { name: "goro1", isLeader: false },
          { name: "666666666", isLeader: false },
        ],
        tag: "ai",
      },
      kakikukeko: {
        members: [
          { name: "ichiro2", isLeader: false },
          { name: "jiro2", isLeader: true },
          { name: "saburo2", isLeader: false },
          { name: "shiro2", isLeader: false },
          { name: "goro2", isLeader: false },
          { name: "hoge", isLeader: false },
        ],
        tag: "ka",
      },
      ccccc: {
        members: [
          { name: "ichiro3", isLeader: false },
          { name: "jiro3", isLeader: false },
          { name: "saburo3", isLeader: true },
          { name: "shiro3", isLeader: false },
          { name: "goro3", isLeader: false },
          { name: "666666663", isLeader: false },
        ],
        tag: "cc",
      },
      dddddddd: {
        members: [
          { name: "ichiro4", isLeader: false },
          { name: "jiro4", isLeader: false },
          { name: "saburo4", isLeader: false },
          { name: "shiro4", isLeader: true },
          { name: "goro4", isLeader: false },
          { name: "666666664", isLeader: false },
        ],
        tag: "dd",
      },
      eeeeeee: {
        members: [
          { name: "ichiro5", isLeader: false },
          { name: "jiro5", isLeader: false },
          { name: "saburo5", isLeader: false },
          { name: "shiro5", isLeader: false },
          { name: "goro5", isLeader: true },
          { name: "666666665", isLeader: false },
        ],
        tag: "ee",
      },
      ffffffff: {
        members: [
          { name: "ichiro6", isLeader: false },
          { name: "jiro6", isLeader: false },
          { name: "saburo6", isLeader: false },
          { name: "shiro6", isLeader: false },
          { name: "goro6", isLeader: false },
          { name: "666666666", isLeader: true },
        ],
        tag: "f2",
      },
    },
  }),

  created: function () {
    this.teamId = this.$route.params.id;
  },
};
</script>
