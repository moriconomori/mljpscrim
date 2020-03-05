<template>
  <div class="news">
    <client-only>
      <v-card v-if="!news.length" outlined class="text-center ma-2 pa-8">
        データがありません
      </v-card>
    </client-only>

    <news-article-summary-card
      v-for="(article, index) in news"
      :key="index"
      :article="article"
      class="ma-2"
    />
  </div>
</template>

<script>
import NewsArticleSummaryCard from '~/components/NewsArticleSummaryCard'
import newsJson from '~/assets/json/news.json'

export default {
  components: {
    NewsArticleSummaryCard,
  },

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
