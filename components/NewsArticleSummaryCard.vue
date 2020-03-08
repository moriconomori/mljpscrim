<template>
  <v-card outlined class="article pb-4">
    <v-card-title class="d-block text-truncate">{{
      article.title
    }}</v-card-title>
    <v-card-subtitle>
      <v-icon size="14" class="text--secondary">mdi-clock-outline</v-icon>
      {{ article.publishedAt }}</v-card-subtitle
    >
    <v-card-text class="pb-0">{{ article.body }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
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

.article .v-icon {
  vertical-align: initial;
}
</style>
