<template>
  <div class="latest-news">
    <div class="d-flex justify-space-between align-center mb-n2">
      <section-header>
        お知らせ
      </section-header>
      <v-btn
        text
        color="secondary"
        to="/news"
        class="accent--text text--darken-1"
      >
        <v-icon>
          mdi-menu-right
        </v-icon>
        もっと見る
      </v-btn>
    </div>

    <v-card
      v-for="(article, index) in news"
      :key="index"
      outlined
      class="article ma-2 pb-4"
    >
      <v-row no-gutters>
        <v-col cols="8">
          <v-card-title class="pr-0">
            <span class="text-truncate">{{ article.title }}</span>
          </v-card-title>
        </v-col>
        <v-col cols="4">
          <v-card-subtitle class="pl-0 text-right">
            <v-icon size="14" class="text--secondary">
              mdi-clock-outline
            </v-icon>
            {{ article.publishedAt }}
          </v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-text class="article__body py-0">{{ article.body }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import latestNewsJson from '~/assets/json/news_latest.json'

export default {
  data: () => ({
    news: {
      type: Array,
    },
  }),

  async created() {
    if (latestNewsJson) {
      this.news = latestNewsJson
    } else {
      const news = await this.$axios.$get(
        'https://script.google.com/macros/s/AKfycbwmFnoU79NeiTjFWjrB_myQvTEZUohJrlD9S6TTSAGROq0qLqM/exec'
      )
      this.news = news
    }
  },
}
</script>

<style scoped>
.article__body {
  white-space: pre-line;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.article .v-icon {
  vertical-align: initial;
}
</style>
