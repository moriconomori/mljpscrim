<template>
  <div class="team">
    <v-card class="mx-auto" tile>
      <v-row no-gutters>
        <v-col cols="5">
          <v-sheet color="indigo" tile>
            <v-img
              :src="getLogoImage(team.teamInfo.logoUrl)"
              :alt="team.teamInfo.name"
              aspect-ratio="1"
            />
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
    <div class="text-right body-2 text--secondary ma-2">
      参加日 {{ team.teamInfo.joinedAt }}
    </div>

    <section-header>メンバー</section-header>
    <v-card
      v-for="(member, memberIndex) in team.member"
      :key="memberIndex"
      outlined
      tile
      class="team__member"
    >
      <v-card-title
        >{{ member.name }}
        <v-chip v-if="member.isLeader" small label color="accent" class="ml-4">
          LEADER
        </v-chip>
      </v-card-title>
      <v-card-subtitle
        v-if="member.role"
        class="d-flex align-center flex-wrap py-2"
      >
        <span class="mb-2">
          Role
        </span>
        <v-chip
          v-for="role in member.role.split(',')"
          :key="role"
          small
          class="ml-2 mb-2"
        >
          {{ role }}
        </v-chip>
      </v-card-subtitle>
      <v-card-actions v-if="member.links" class="pa-0 pb-4">
        <v-icon size="24" class="text--secondary ml-4">
          {{ mdiLinkVariant }}
        </v-icon>
        <a
          v-for="(link, linkIndex) in member.links.split('\n')"
          :key="linkIndex"
          :href="link.split(' ')[1]"
          target="_blank"
          rel="noopener"
          class="ml-4 gtag-event__external_link"
        >
          <v-avatar size="40">
            <v-img
              :src="'/img/icon/' + link.split(' ')[0] + '.png'"
              :alt="link.split(' ')[1]"
              aspect-ratio="1"
            />
          </v-avatar>
          <!-- gtag のクリックイベント用テキスト -->
          <span class="d-none">{{ link.split(' ')[0] }}</span>
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mdiLinkVariant } from '@mdi/js'
import SectionHeader from '~/components/SectionHeader'
import team from '~/assets/data/team.json'

export default {
  components: {
    SectionHeader,
  },

  data() {
    return {
      mdiLinkVariant,
      team: [],
    }
  },

  created() {
    const id = this.$route.params.id
    this.team = team[id]
  },

  methods: {
    getLogoImage(logoUrl) {
      const path = '/img/logo/'
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
.team__member:not(:last-child) {
  border-bottom-style: none;
}

.team__name {
  word-break: break-all;
}
</style>
