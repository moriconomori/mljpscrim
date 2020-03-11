<template>
  <v-card outlined class="article pb-4">
    <v-card-title class="d-block text-truncate">{{
      article.title
    }}</v-card-title>
    <v-card-subtitle class="d-flex align-center">
      <v-icon size="16" class="text--secondary mr-1">
        {{ mdiClockOutline }}
      </v-icon>
      {{ article.publishedAt }}
    </v-card-subtitle>
    <v-card-text class="pb-0">{{ article.body }}</v-card-text>
  </v-card>
</template>

<script>
import { mdiClockOutline } from '@mdi/js'

export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },

  data: () => ({
    mdiClockOutline,
  }),
}
</script>

<style scoped>
.v-card__text {
  white-space: pre-line;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
