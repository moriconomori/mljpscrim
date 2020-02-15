<template>
  <h1 class="title accent--text my-3 ml-2 pl-2">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "SectionHeader",
};
</script>

<style scoped>
.title.accent--text {
  border-left: 4px solid;
}
</style>
