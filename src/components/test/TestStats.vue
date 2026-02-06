<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const mode = computed(() => {
  return store.getters.mode;
});
const wpm = computed(() => {
  return store.getters.wpm;
});
const accuracyResult = computed(() => {
  return store.getters.accuracyResult;
});
const secondsLeft = computed(() => {
  const seconds = store.getters.secondsLeft;
  if (seconds < 10) return "0" + seconds;
  else return seconds;
});
const hasStarted = computed(() => {
  return store.getters.hasStarted;
});
const accuracyClass = computed(() => {
  if (hasStarted.value && accuracyResult.value === 100) {
    return "text-typing-green-500";
  } else if (hasStarted.value && accuracyResult.value < 100) {
    return "text-typing-red-500";
  } else {
    return null;
  }
});
</script>

<template>
  <div class="w-full grid grid-cols-3 xl:flex">
    <section class="flex flex-col items-center justify-center xl:flex-row xl:gap-2">
      <h2 class="text-typing-neutral-400">WPM:</h2>
      <span class="text-2xl font-semibold">{{ wpm }}</span>
    </section>
    <section class="flex flex-col items-center justify-center xl:flex-row xl:gap-2 xl:px-8 xl:mx-8">
      <h2 class="text-typing-neutral-400">Accuracy:</h2>
      <span class="text-2xl font-semibold" :class="accuracyClass">{{ accuracyResult }}%</span>
    </section>
    <section class="flex flex-col items-center justify-center xl:flex-row xl:gap-2">
      <h2 class="text-typing-neutral-400">Time:</h2>
      <span v-if="mode === 'Passage'" class="text-2xl font-semibold">-</span>
      <span v-else class="text-2xl font-semibold" :class="{ 'text-typing-yellow-400': hasStarted }"
        >0:{{ secondsLeft }}</span
      >
    </section>
  </div>
</template>

<style scoped>
section:nth-of-type(2) {
  border: solid 1px hsl(0, 0%, 15%);
  border-top-width: 0;
  border-bottom-width: 0;
}
</style>
