<template>
  <div class="recent-news">
    <base-section-header title="お知らせ" />

    <div class="my-3">
      <v-card
        v-for="news in newsList"
        :key="news.id"
        outlined
        tile
        height="90"
        class="mx-auto pa-2"
      >
        <div class="d-flex justify-space-between">
          <v-card-title class="pa-0 subtitle-1">
            {{ news.title }}
          </v-card-title>
          <v-card-subtitle class="ma-0 pa-0">
            {{ news.date }}
          </v-card-subtitle>
        </div>

        <v-card-text class="pa-0 news--text">
          {{ news.text }}
        </v-card-text>
      </v-card>
    </div>

    <v-container
      py-0
      my-4
    >
      <v-btn
        to="/news"
        block
        color="secondary"
        class="accent--text text--lighten-1"
      >
        お知らせをもっと見る
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RecentNews",

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
          "本文3行以上は省略本文3行以上は省略本文3行以上は省略本文3行以上は省略本文3行以上は省略本文3行以上は省略本文3行以上は省略",
      },
    ],
  }),
};
</script>

<style>
.recent-news .v-card:not(:last-child) {
  border-bottom-style: none;
}

.news--text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
