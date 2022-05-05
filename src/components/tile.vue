<template>
  <div class="tile">{{ index }} - {{ currentPosition }}</div>
</template>

<script>
export default {
  name: "RubiksTile",
  props: {
    index: {
      type: Number,
      required: true,
    },
    currentPosition: {
      type: Number,
      required: true,
    },
  },
};
</script>

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
