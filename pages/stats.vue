<template>
  <div class="stats">
    <v-card v-if="!stats.length" outlined class="text-center ma-2 pa-8">
      データがありません
    </v-card>

    <scrim-result-summary-card
      v-for="(result, index) in stats"
      :key="index"
      :result="result"
      class="ma-2"
    />
  </div>
</template>

<script>
import ScrimResultSummaryCard from '~/components/ScrimResultSummaryCard'
import stats from '~/assets/data/stats.json'

export default {
  components: {
    ScrimResultSummaryCard,
  },

  data: () => ({
    stats,
  }),

  head() {
    return {
      title: 'Stats',
    }
  },
}
</script>
