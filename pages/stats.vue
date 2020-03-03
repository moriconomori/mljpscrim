<template>
  <div class="stats">
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
import statsJson from '~/assets/json/stats.json'

export default {
  components: {
    ScrimResultSummaryCard,
  },

  data: () => ({
    stats: {
      type: Array,
    },
  }),

  async created() {
    if (statsJson) {
      this.stats = statsJson
    } else {
      const stats = await this.$axios.$get(
        'https://script.google.com/macros/s/AKfycbzHGIXhIr70kYpljKadfT_XMxBWo9wGSW73n9XbuhZi8uPFlyw/exec'
      )
      this.stats = stats
    }
  },

  head() {
    return {
      title: 'Stats',
    }
  },
}
</script>
