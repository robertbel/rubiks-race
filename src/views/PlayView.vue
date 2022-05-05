<script setup>
import RubiksBoard from "@/components/RubiksBoard.vue";
import ScramblerBoard from "@/components/ScramblerBoard.vue";
</script>

<template>
  <div class="container">
    <RubiksBoard :cols="5" :rows="5" />
    <ScramblerBoard :cols="3" :rows="3" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}
</style>
