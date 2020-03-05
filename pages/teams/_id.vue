<template>
  <div class="team">
    <v-card class="mx-auto" tile>
      <v-row no-gutters>
        <v-col cols="5">
          <v-sheet color="indigo" tile>
            <v-img eager :src="getLogoImage(team.teamInfo.logoUrl)" />
          </v-sheet>
        </v-col>
        <v-col class="d-flex flex-column justify-center pl-4">
          <div class="accent--text">[{{ team.teamInfo.tag }}]</div>
          <h1 class="headline team__name">
            {{ team.teamInfo.name }}
          </h1>
        </v-col>
      </v-row>
    </v-card>
    <div class="text-right caption text--secondary mr-1">
      参加日 {{ team.teamInfo.joinedAt }}
    </div>

    <section-header>
      メンバー
    </section-header>

    <v-card
      v-for="(member, memberIndex) in team.member"
      :key="memberIndex"
      outlined
      tile
      class="team-member pb-4"
    >
      <v-card-title
        >{{ member.name }}
        <client-only>
          <v-chip
            v-if="member.isLeader"
            x-small
            label
            color="accent"
            class="ml-4"
          >
            LEADER
          </v-chip>
        </client-only>
      </v-card-title>
      <client-only>
        <v-card-subtitle v-if="member.role" class="d-flex flex-wrap pb-0">
          Role
          <v-chip
            v-for="role in member.role.split(',')"
            :key="role"
            small
            class="ml-2 mb-2"
          >
            {{ role }}
          </v-chip>
        </v-card-subtitle>
      </client-only>
      <client-only>
        <v-card-actions v-if="member.links" class="pa-0">
          <a
            v-for="(link, linkIndex) in member.links.split('\n')"
            :key="linkIndex"
            :href="link.split(' ')[1]"
            class="ml-4"
          >
            <v-img
              eager
              :src="'/imgs/icons/' + link.split(' ')[0] + '.png'"
              width="40"
            />
          </a>
        </v-card-actions>
      </client-only>
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

  methods: {
    getLogoImage(logoUrl) {
      const path = '/imgs/logos/'
      if (!logoUrl) {
        return path + 'default.png'
      }
      return path + logoUrl + '.jpg'
    },
  },

  head() {
    return {
      title: this.team.teamInfo.name + ' | Teams',
    }
  },
}
</script>

<style scoped>
.team-member:not(:last-child) {
  border-bottom-style: none;
}

.team__name {
  word-break: break-all;
}
</style>
