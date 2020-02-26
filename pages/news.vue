<template>
  <div class="news">
    <div class="d-flex flex-column">
      <v-card v-for="article in news" :key="article.uid" outlined tile>
        <div class="d-flex justify-space-between">
          <div class="subtitle-1 text-truncate pt-2 pl-4">
            {{ article.title }}
          </div>
          <div class="caption text--secondary pt-2 px-4">
            {{ article.publishedAt }}
          </div>
        </div>
        <v-card-text class="news--text pt-0 mb-2">
          {{ article.body }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import newsJson from '~/assets/json/news.json'

export default {
  data: () => ({
    news: {
      type: Array,
    },
  }),

  async created() {
    if (newsJson) {
      this.news = newsJson
    } else {
      const news = await this.$axios.$get(
        'https://script.google.com/macros/s/AKfycbzHGIXhIr70kYpljKadfT_XMxBWo9wGSW73n9XbuhZi8uPFlyw/exec'
      )
      this.news = news
    }
  },

  head() {
    return {
      title: 'News',
    }
  },
}
</script>
