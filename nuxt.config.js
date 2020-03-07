import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import fs from 'fs-extra'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | MLJP SCRIM',
    title: 'MLJP SCRIM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'MLJP スクリムの情報サイトです。',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  server: {
    host: '0.0.0.0',
  },

  generate: {
    subFolders: false,
  },

  hooks: {
    build: {
      async before(builder) {
        const dest = './assets/data/'
        const data = [
          {
            fileName: 'teams.json',
            url:
              'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec',
          },
          {
            fileName: 'team.json',
            url:
              'https://script.google.com/macros/s/AKfycbxlbEeWkJtQJaEIbKuuudYHcSXv_MmKSDK1zewcmNU_gwKyg5Y/exec',
          },
          {
            fileName: 'next_scrim.json',
            url:
              'https://script.google.com/macros/s/AKfycbwOkwCt2nIyKLpJnR68Unl6UuovCEFevEZQ-ZPIjpdMhbCA9dnd/exec',
          },
          {
            fileName: 'stats.json',
            url:
              'https://script.google.com/macros/s/AKfycbzHGIXhIr70kYpljKadfT_XMxBWo9wGSW73n9XbuhZi8uPFlyw/exec',
          },
          {
            fileName: 'news.json',
            url:
              'https://script.google.com/macros/s/AKfycbzdg3_jf8jj5mwNYRmz8rVJ7JuVjCwhCmY7MTH0LBrmRD-4tKM/exec',
          },
          {
            fileName: 'news_latest.json',
            url:
              'https://script.google.com/macros/s/AKfycbwmFnoU79NeiTjFWjrB_myQvTEZUohJrlD9S6TTSAGROq0qLqM/exec',
          },
        ]

        for (let i = 0; i < data.length; i++) {
          const filePath = dest + data[i].fileName
          const json = (await axios.get(data[i].url)).data
          fs.outputFile(filePath, JSON.stringify(json))
          // eslint-disable-next-line no-console
          console.log('[HOOK][before build] Generated ' + filePath)
        }
      },
    },
  },
}
