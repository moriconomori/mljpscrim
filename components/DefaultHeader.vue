<template>
  <div class="default-header">
    <v-app-bar :app="!isMobile">
      <v-toolbar-title class="accent--text">MLJP SCRIM</v-toolbar-title>

      <v-spacer />
      <client-only>
        <div v-if="!isMobile">
          <v-btn
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            text
            rounded
            :color="isActiveRoute(link.to) ? 'accent' : ''"
            :class="link.show ? '' : 'd-none'"
          >
            <v-icon>{{ link.icon }}</v-icon>
            <span>{{ link.name }}</span>
          </v-btn>
        </div>
      </client-only>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMobile: null,
    links: [
      { name: 'HOME', icon: 'mdi-home', to: '/', show: true },
      { name: 'クラン', icon: 'mdi-account-group', to: '/teams', show: true },
      { name: '戦績', icon: 'mdi-trophy', to: '/stats', show: true },
      { name: 'お知らせ', icon: 'mdi-newspaper', to: '/news', show: true },
      { name: '', icon: '', to: '/about', show: false },
      { name: '', icon: '', to: '/contactus', show: false },
    ],
  }),

  created() {
    this.isMobile = this.$device.isMobile
  },

  methods: {
    isActiveRoute(to) {
      if (to === '/') {
        return this.$route.path === '/'
      }

      return this.$route.path.startsWith(to)
    },
  },
}
</script>

<style scoped>
.default-header >>> .v-toolbar__content {
  max-width: 768px;
  margin: 0 auto;
}

.default-header .v-btn--active::before {
  background-color: transparent;
}

.default-header .v-btn::before {
  background-color: transparent;
}
</style>
