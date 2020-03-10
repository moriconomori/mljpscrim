<template>
  <div>
    <div v-show="loading" class="loading"></div>

    <v-app v-show="!loading">
      <v-app-bar app :hide-on-scroll="isMobile">
        <v-toolbar-title class="accent--text">
          MLJP SCRIM
        </v-toolbar-title>

        <v-spacer />

        <div class="app-bar__menu">
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

        <v-footer>
          <v-row justify="center">
            <v-btn
              v-for="(link, index) in footerLinks"
              :key="index"
              :to="link.to"
              text
              rounded
              class="text--secondary footer__link"
            >
              {{ link.text }}
            </v-btn>
            <v-col class="text-center text--secondary py-0 mb-2" cols="12">
              <small>&copy; 2020 Morico</small>
            </v-col>
          </v-row>
        </v-footer>
      </v-content>

      <v-bottom-navigation app grow color="accent" class="bottom-navigation">
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
import { mdiHome, mdiAccountGroup, mdiTrophy, mdiNewspaper } from '@mdi/js'

export default {
  data() {
    return {
      mdiHome,
      mdiAccountGroup,
      mdiTrophy,
      mdiNewspaper,
      loading: true,
      isMobile: false,
      mainLinks: [
        { text: 'HOME', to: '/', icon: mdiHome, display: true },
        {
          text: 'クラン',
          to: '/teams',
          icon: mdiAccountGroup,
          display: true,
        },
        { text: '戦績', to: '/stats', icon: mdiTrophy, display: true },
        { text: 'お知らせ', to: '/news', icon: mdiNewspaper, display: true },
        {
          text: 'MLJP SCRIM とは',
          to: '/about',
          icon: '',
          display: false,
        },
        {
          text: 'お問い合わせ',
          to: '/contactus',
          icon: '',
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

  beforeMount() {
    this.loading = false
    if (window.innerWidth < 760) {
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

.footer__link {
  letter-spacing: normal;
}

.v-tab::before,
.v-btn::before {
  background-color: inherit !important;
}

@media screen and (max-width: 759px) {
  .app-bar__menu {
    display: none;
  }
}

@media screen and (min-width: 760px) {
  .bottom-navigation {
    display: none;
  }
}
</style>
