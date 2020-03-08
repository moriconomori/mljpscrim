<template>
  <div>
    <div v-show="loading" class="loading"></div>

    <v-app v-show="!loading">
      <v-app-bar app :hide-on-scroll="isMobile">
        <v-toolbar-title>
          MLJP SCRIM
        </v-toolbar-title>

        <v-spacer />

        <div v-show="!isMobile">
          <v-tabs color="accent" background-color="transparent">
            <v-tab
              v-for="(link, index) in mainLinks"
              :key="index"
              :to="link.to"
              :class="{ 'd-none': link.display === false }"
            >
              <v-icon left>{{ link.icon }}</v-icon>
              {{ link.text }}
            </v-tab>
          </v-tabs>
        </div>
      </v-app-bar>

      <v-content>
        <div class="main-content__wrap">
          <nuxt />
        </div>

        <v-footer class="d-flex flex-column">
          <div class="d-flex justify-space-around">
            <v-card
              v-for="(link, index) in footerLinks"
              :key="index"
              :to="link.to"
              color="transparent"
              flat
              class="mx-2 px-2 text--secondary"
            >
              {{ link.text }}
            </v-card>
          </div>

          <div class="text--secondary">
            <small>&copy; 2020 Morico</small>
          </div>
        </v-footer>
      </v-content>

      <v-bottom-navigation v-show="isMobile" grow :app="isMobile">
        <v-btn
          v-for="(link, index) in mainLinks"
          :key="index"
          :to="link.to"
          :class="link.display ? '' : 'd-none'"
        >
          <span>{{ link.text }}</span>
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      isMobile: false,
      mainLinks: [
        { text: 'HOME', to: '/', icon: 'mdi-home', display: true },
        {
          text: 'クラン',
          to: '/teams',
          icon: 'mdi-account-group',
          display: true,
        },
        { text: '戦績', to: '/stats', icon: 'mdi-trophy', display: true },
        { text: 'お知らせ', to: '/news', icon: 'mdi-newspaper', display: true },
        {
          text: 'MLJP SCRIM とは',
          to: '/about',
          icon: 'mdi-information',
          display: false,
        },
        {
          text: 'お問い合わせ',
          to: '/contactus',
          icon: 'mdi-email',
          display: false,
        },
      ],
      footerLinks: [
        {
          text: 'MLJP SCRIM とは',
          to: '/about',
        },
        {
          text: 'お問い合わせ',
          to: '/contactus',
        },
      ],
    }
  },

  mounted() {
    this.loading = false
    if (window.innerWidth < 768) {
      this.isMobile = true
    }
  },
}
</script>

<style scoped>
/*
 ** Workaround for the bug
 ** See https://github.com/vuetifyjs/vuetify/issues/8067
 */
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
  height: inherit;
}

.v-toolbar >>> .v-toolbar__content,
.main-content__wrap {
  max-width: 780px;
  margin: 0 auto;
}
</style>
