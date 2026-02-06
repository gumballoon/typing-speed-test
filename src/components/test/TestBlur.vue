<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const hasNotStarted = computed(() => {
  return !store.getters.hasStarted && !store.getters.hasEnded;
});

function startGame() {
  store.dispatch("startGame");
}
</script>

<template>
  <div
    v-show="hasNotStarted"
    class="absolute top-5 w-full h-full backdrop-blur-sm z-50 flex flex-col items-center justify-center text-xl"
    @click="startGame"
  >
    <button
      class="bg-typing-blue-600 px-6 py-3 mb-4 flex items-center rounded-lg hover:cursor-pointer hover:scale-105 hover:bg-typing-blue-400 no-select transition-all duration-300"
      @click="startGame"
    >
      Start Typing Test
    </button>
    <p>Or click the text and start typing</p>
  </div>
</template>
