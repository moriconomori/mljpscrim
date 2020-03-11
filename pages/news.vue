<template>
  <div class="news">
    <v-card v-if="!news.length" outlined class="text-center ma-2 pa-8">
      データがありません
    </v-card>

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
import news from '~/assets/data/news.json'

export default {
  components: {
    NewsArticleSummaryCard,
  },

  data: () => ({
    news,
  }),

  head() {
    return {
      title: 'News',
    }
  },
}
</script>
