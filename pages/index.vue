<template>
  <div>
    <next-scrim />
    <latest-news />
  </div>
</template>

<script>
import NextScrim from '~/components/NextScrim'
import LatestNews from '~/components/LatestNews'

export default {
  components: {
    NextScrim,
    LatestNews,
  },

  head() {
    return {
      titleTemplate: null,
      title: 'MLJP SCRIM',
    }
  },
}
</script>
