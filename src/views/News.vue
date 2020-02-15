<template>
  <div>
    <v-container class="pt-0">
      <v-card
        v-for="entry in news"
        :key="entry.id"
        class="mx-auto mb-3"
      >
        <div class="d-flex justify-space-between pt-4 px-4">
          <v-card-title class="ma-0 pa-0 subtitle-1">
            {{ entry.title }}
          </v-card-title>

          <v-card-subtitle class="ma-0 pa-0">
            {{ entry.date }}
          </v-card-subtitle>
        </div>
        <v-card-text class="text-truncate">
          {{ entry.body }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "News",

  components: {},

  metaInfo: {
    title: "News",
  },

  data: () => ({
    news: [
      {
        id: "1",
        date: "2020.02.02",
        title: "お知らせタイトル",
        body: "お知らせ本文お知らせ本文",
      },
      {
        id: "2",
        date: "2020.02.03",
        title: "お知らせタイトルお知らせタイトル",
        body:
          "お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文",
      },
      {
        id: "3",
        date: "2020.02.04",
        title: "お知らせタイトルお知らせタイトルお知らせタイトル",
        body:
          "お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文お知らせ本文",
      },
    ],
  }),
};
</script>
