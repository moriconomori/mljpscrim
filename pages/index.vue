<template>
  <div>
    <next-scrim />
    <section>お知らせ</section>
  </div>
</template>

<script>
import NextScrim from '~/components/NextScrim'

export default {
  components: {
    NextScrim,
  },

  head() {
    return {
      titleTemplate: null,
      title: 'MLJP SCRIM',
    }
  },
}
</script>
