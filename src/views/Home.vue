<template>
  <div>
    <next-scrim />
    <recent-news />
  </div>
</template>

<script>
import NextScrim from "@/components/NextScrim";
import RecentNews from "@/components/RecentNews";

export default {
  name: "Home",

  components: {
    NextScrim,
    RecentNews,
  },

  metaInfo: {
    title: "MLJP SCRIM",
    titleTemplate: null,
  },

  data: () => ({
    links: [
      "Home",
      "MLJP SCRIM とは",
    ],
  }),
};
</script>
