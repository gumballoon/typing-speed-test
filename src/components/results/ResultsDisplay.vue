<script setup>
import PatternConfetti from "../../assets/images/pattern-confetti.svg";
import PatternStar1 from "../../assets/images/pattern-star-1.svg";
import PatternStar2 from "../../assets/images/pattern-star-2.svg";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

defineProps(["icon", "icon-alt", "title", "description", "buttonText"]);

const wpm = computed(() => {
  return store.getters.wpm;
});
const accuracy = computed(() => {
  return store.getters.accuracy;
});
const accuracyResult = computed(() => {
  return store.getters.accuracyResult;
});
const accuracyClass = computed(() => {
  if (accuracyResult.value === 100) {
    return "text-typing-green-500";
  } else {
    return "text-typing-red-500";
  }
});
const isBestResult = computed(() => {
  return store.getters.lastRound === "best";
});
</script>

<template>
  <div class="w-full relative">
    <div class="flex flex-col items-center text-center">
      <img :src="icon" alt="icon-alt" class="mt-8" :class="{ completed: !isBestResult }" />
      <h2 class="text-[1.75rem] font-semibold mt-8 mb-2">{{ title }}</h2>
      <p class="text-typing-neutral-400 text-lg mb-6">{{ description }}</p>
    </div>
    <section
      class="w-full py-3 px-6 flex flex-col gap-2 border-2 border-typing-neutral-800 rounded-xl mb-4"
    >
      <h3 class="text-typing-neutral-400 text-xl">WPM</h3>
      <p class="font-bold text-2xl">{{ wpm }}</p>
    </section>
    <section
      class="w-full py-3 px-6 flex flex-col gap-2 border-2 border-typing-neutral-800 rounded-xl mb-4"
    >
      <h3 class="text-typing-neutral-400 text-xl">Accuracy</h3>
      <p class="font-bold text-2xl" :class="accuracyClass">{{ accuracyResult }}%</p>
    </section>
    <section
      class="w-full py-3 px-6 flex flex-col gap-2 border-2 border-typing-neutral-800 rounded-xl mb-4"
    >
      <h3 class="text-typing-neutral-400 text-xl">Characters</h3>
      <p class="font-bold text-2xl">
        <span class="text-typing-green-500">{{ accuracy.success }}</span>
        <span class="text-typing-neutral-500">/</span>
        <span class="text-typing-red-500">{{ accuracy.fail }}</span>
      </p>
    </section>
    <restart-button :text="buttonText" mode="dark" class="mt-10"></restart-button>

    <!-- Background SVG's-->
    <PatternStar1
      v-show="!isBestResult"
      class="absolute -bottom-20 right-0 scale-50 pattern"
      id="pattern-star-1"
    />
    <PatternStar2
      v-show="!isBestResult"
      class="absolute top-20 left-0 scale-75 pattern"
      id="pattern-star-2"
    />
    <PatternConfetti v-show="isBestResult" class="absolute w-full pattern" id="pattern-confetti" />
  </div>
</template>

<style scoped>
img.completed {
  border: 7.5px solid hsla(140, 63%, 57%, 0.4);
  border-radius: 50%;
  outline: 7.5px solid hsla(140, 63%, 57%, 0.15);
}
.pattern {
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
#pattern-star-2 {
  animation-name: rotate;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
#pattern-star-1 {
  animation-name: scale;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
#pattern-confetti {
  animation-name: move;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
