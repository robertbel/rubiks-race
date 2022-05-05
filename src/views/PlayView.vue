<template>
  <div>
    <RubiksBoard />
    <ScramblerBoard />
  </div>
</template>

<script>
import RubiksBoard from "@/components/RubiksBoard.vue";
import ScramblerBoard from "@/components/ScramblerBoard.vue";

export default {
  name: "HomeView",
  components: {
    RubiksBoard,
    ScramblerBoard,
  },
};
</script>
