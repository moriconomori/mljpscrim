<template>
  <h1 class="title accent--text my-3 ml-2 pl-2">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: "SectionHeader",

  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style scoped>
.title.accent--text {
  border-left: #daa520 4px solid;
}
</style>
