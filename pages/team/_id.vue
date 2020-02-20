<template>
  <div class="team">
    <v-card class="mx-auto" tile>
      <v-row no-gutters>
        <v-col cols="5">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
        </v-col>
        <v-col class="d-flex flex-column justify-center pl-4">
          <div class="accent--text">[{{ team.teamInfo.tag }}]</div>
          <h1 class="headline">
            {{ team.teamInfo.name }}
          </h1>
        </v-col>
      </v-row>
    </v-card>

    <section-header>
      メンバー
    </section-header>

    <v-card
      v-for="member in team.member"
      :key="member.uid"
      outlined
      tile
      class="team-member-list mx-auto pa-2"
    >
      <div class="d-flex align-center mb-1">
        <span class="headline">{{ member.name }}</span>
        <v-chip
          v-if="member.isLeader"
          x-small
          label
          color="accent"
          class="ml-2"
        >
          LEADER
        </v-chip>
      </div>
      <div>
        <span class="caption text--secondary mr-1">Role</span>
        <v-chip
          v-for="role in member.role.split(',')"
          :key="role"
          x-small
          class="mr-2"
        >
          {{ role }}
        </v-chip>
      </div>
      <div>
        <div
          v-for="link in member.links.split('\n')"
          :key="link"
          x-small
          class="d-flex"
        >
          <v-icon class="mr-2"> mdi-{{ link.split(' ')[0] }}</v-icon>
          <a :href="link.split(' ')[1]" class="text-truncate">
            {{ link.split(' ')[1] }}
          </a>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import teamJson from '~/assets/json/team.json'

export default {
  data() {
    return {
      team: {
        type: Object,
      },
      activeBtn: '2',
    }
  },

  async created(params) {
    const id = this.$route.params.id

    if (teamJson) {
      this.team = teamJson[id]
      return
    }

    const team = await this.$axios.$get(
      'https://script.google.com/macros/s/AKfycbxlbEeWkJtQJaEIbKuuudYHcSXv_MmKSDK1zewcmNU_gwKyg5Y/exec'
    )
    this.team = team[id]
  },
}
</script>

<style scoped>
.team-member-list:not(:last-child) {
  border-bottom-style: none;
}
</style>
