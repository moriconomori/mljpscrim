<template>
  <div>
    <battle-card />
    <news />
  </div>
</template>

<script>
import BattleCard from "@/components/BattleCard";
import News from "@/components/News";

export default {
  name: "Home",

  components: {
    BattleCard,
    News,
  },

  data: () => ({
    links: [
      "Home",
      "MLJP SCRIM とは",
    ],
  }),
};
</script>
