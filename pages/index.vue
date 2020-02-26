<template>
  <div>
    <next-scrim />
    <recent-news />
  </div>
</template>

<script>
import NextScrim from '~/components/NextScrim'
import RecentNews from '~/components/RecentNews'

export default {
  components: {
    NextScrim,
    RecentNews,
  },

  head() {
    return {
      titleTemplate: null,
      title: 'MLJP SCRIM',
    }
  },
}
</script>
