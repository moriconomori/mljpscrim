<template>
  <v-container>
    <div class="title accent--text">
      お知らせ
    </div>

    <v-card
      v-for="news in newsList"
      :key="news.id"
      class="mx-auto mb-2"
    >
      <v-container class="d-flex justify-space-between">
        <v-card-title class="ma-0 pa-0 subtitle-1">
          {{ news.title }}
        </v-card-title>
        <v-card-subtitle class="ma-0 pa-0">
          {{ news.date }}
        </v-card-subtitle>
      </v-container>

      <v-card-text class="pt-0">
        {{ news.text }}
      </v-card-text>
    </v-card>

    <v-btn
      block
      color="secondary"
      class="accent--text text--lighten-3"
    >
      お知らせをもっと見る
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "News",

  components: {},

  data: () => ({
    newsList: [
      {
        id: 0,
        title: "試合結果",
        date: "2020.2.13",
        text: "Team A VS Team B の試合結果をお知らせします。",
      },
      {
        id: 1,
        title: "お知らせタイトル2",
        date: "2020.2.12",
        text: "Team C がスクリムに参加しました。",
      },
      {
        id: 2,
        title: "お知らせタイトル3",
        date: "2020.2.11",
        text:
          "333本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
      },
    ],
  }),
};
</script>
