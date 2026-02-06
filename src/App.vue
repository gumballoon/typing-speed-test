<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

import TheHeader from "./components/layout/TheHeader.vue";
import TestStats from "./components/test/TestStats.vue";
import TestText from "./components/test/TestText.vue";
import ResultsPage from "./components/results/ResultsPage.vue";

const hasEnded = computed(() => {
  return store.getters.hasEnded;
});

onMounted(() => {
  store.dispatch("loadScores");
});
</script>

<template>
  <main class="w-full min-h-screen p-4">
    <h1 hidden>Typing Speed Test</h1>
    <the-header class="mb-8"></the-header>
    <div v-if="!hasEnded">
      <div class="xl:flex justify-between items-center xl:mb-4 xl:mt-12">
        <test-stats class="mb-4 xl:mb-0"></test-stats>
        <div class="w-full flex gap-2 mb-3 xl:mb-0 xl:w-max">
          <test-dropdown
            :options="['Easy', 'Medium', 'Hard']"
            :name="'difficulty'"
            class="xl:border-r xl:border-typing-neutral-500 xl:pr-4 xl:mr-2"
          ></test-dropdown>
          <test-dropdown :options="['Timed (60s)', 'Passage']" :name="'mode'"></test-dropdown>
        </div>
      </div>
      <test-text></test-text>
    </div>
    <results-page v-else></results-page>
  </main>
</template>

<style scoped></style>
