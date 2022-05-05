<script setup>
import { computed } from "vue";
import BoardTile from "@/components/BoardTile.vue";

const props = defineProps(["cols", "rows"]);

const numberOfScramblerTiles = computed(() => {
  return props.cols * props.rows;
});
</script>

<template>
  <div class="board">
    <div
      class="board__tile"
      v-for="index in numberOfScramblerTiles"
      :key="index"
    >
      {{ index }}
      <BoardTile :index="index" :currentPosition="index + 1" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  background-color: #eee;
  margin: 0 auto;
  width: 20%;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 2px;

  &__tile {
    position: relative;
    background-color: #fff;
    font-size: 0.75rem;
  }
}
</style>

