<script setup>
import IconCompleted from "../../assets/images/icon-completed.svg?url";
import IconNewPersonalBest from "../../assets/images/icon-new-pb.svg?url";

import ResultsDisplay from "./ResultsDisplay.vue";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const lastRound = computed(() => {
  return store.getters.lastRound;
});
</script>

<template>
  <div>
    <results-display
      v-if="lastRound === 'baseline'"
      :icon="IconCompleted"
      icon-alt="icon completed"
      title="Baseline Established"
      description="You've set the bar. Now the real challenge begins - time to beat it."
      button-text="Beat This Score"
    ></results-display>

    <results-display
      v-else-if="lastRound === 'best'"
      :icon="IconNewPersonalBest"
      icon-alt="icon new personal best"
      title="High Score Smashed!"
      description="You're getting faster. That was incredible typing."
      button-text="Go Again"
    ></results-display>

    <results-display
      v-else-if="lastRound === 'try'"
      :icon="IconCompleted"
      icon-alt="icon completed"
      title="Test Completed!"
      description="Solid run. Keep pushing to beat your high score."
      button-text="Go Again"
    ></results-display>
  </div>
</template>
