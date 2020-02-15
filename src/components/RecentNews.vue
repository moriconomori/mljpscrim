<template>
  <div class="recent-news mb-4">
    <div class="d-flex justify-space-between align-center">
      <base-section-header>
        お知らせ
      </base-section-header>
      <v-btn
        text
        color="secondary"
        to="/news"
        class="accent--text text--darken-1"
      >
        <v-icon>
          mdi-menu-right
        </v-icon>
        もっと見る
      </v-btn>
    </div>

    <div class="d-flex flex-column">
      <v-card
        v-for="news in newsList"
        :key="news.id"
        outlined
        tile
      >
        <div class="d-flex justify-space-between">
          <div class="subtitle-1 text-truncate pt-2 pl-4">
            {{ news.title }}
          </div>
          <div class="caption grey--text pt-2 px-4">
            {{ news.date }}
          </div>
        </div>
        <v-card-text class="news--text pt-0 mb-2">
          {{ news.text }}
        </v-card-text>
      </v-card>
    </div>
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
        title: "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
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
  /* line-height: 1.375rem; */
  height: 2.75rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
