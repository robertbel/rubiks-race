<script setup>
const props = defineProps(["index", "currentPosition"]);
</script>

<template>
  <div class="tile">{{ props.index }} - {{ props.currentPosition }}</div>
</template>

<style lang="scss" scoped>
.tile {
  position: absolute;
  inset: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
