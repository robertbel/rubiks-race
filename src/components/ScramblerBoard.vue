<template>
  <div class="board">
    <div class="board__tile" v-for="index in numberOfBoardTiles" :key="index">
      {{ index }}
      <tile :index="index" :currentPosition="index + 1" />
    </div>
  </div>
</template>

<script>
import tile from "@/components/tile.vue";

export default {
  name: "ScramblerBoard",
  components: {
    tile,
  },
  props: {
    cols: {
      type: Number,
      default: 3,
      required: true,
    },
    rows: {
      type: Number,
      default: 3,
      required: true,
    },
  },
  computed: {
    numberOfBoardTiles() {
      return this.cols * this.rows;
    },
  },
};
</script>

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

