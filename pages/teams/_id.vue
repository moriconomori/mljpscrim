<template>
  <div class="team">
    <v-card class="mx-auto" tile>
      <v-row no-gutters>
        <v-col cols="5">
          <v-sheet color="indigo" tile>
            <img
              :src="getLogoImage(team.teamInfo.logoUrl)"
              :alt="team.teamInfo.name"
              class="team__logo"
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
    <div class="text-right caption text--secondary mr-1">
      参加日 {{ team.teamInfo.joinedAt }}
    </div>

    <section-header>メンバー</section-header>
    <v-card
      v-for="(member, memberIndex) in team.member"
      :key="memberIndex"
      outlined
      tile
      class="team__member pb-4"
    >
      <v-card-title
        >{{ member.name }}
        <v-chip
          v-if="member.isLeader"
          x-small
          label
          color="accent"
          class="ml-4"
        >
          LEADER
        </v-chip>
      </v-card-title>
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
      <v-card-actions v-if="member.links" class="pa-0">
        <a
          v-for="(link, linkIndex) in member.links.split('\n')"
          :key="linkIndex"
          :href="link.split(' ')[1]"
          class="ml-4 gtag-event__external_link"
        >
          <img
            :src="'/img/icon/' + link.split(' ')[0] + '.png'"
            :alt="link.split(' ')[1]"
            class="member__link__icon"
          />
          <!-- gtag のクリックイベント用テキスト -->
          <span class="d-none">{{ link.split(' ')[0] }}</span>
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import team from '~/assets/data/team.json'

export default {
  components: {
    SectionHeader,
  },

  data() {
    return {
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
.team__logo {
  display: block;
  width: 100%;
}

.team__member:not(:last-child) {
  border-bottom-style: none;
}

.team__name {
  word-break: break-all;
}

.member__link__icon {
  width: 40px;
}
</style>
