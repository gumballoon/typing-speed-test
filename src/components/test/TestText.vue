<script setup>
import TestBlur from "./TestBlur.vue";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();

// R E F S //
const input = ref(null);
const inputText = ref("");
const validatedLetters = ref([]);
const wpmCounter = ref(0);

// C O M P U T E D //
const passageText = computed(() => {
  return store.getters.passage;
});
const validatedHTML = computed(() => {
  return validatedLetters.value
    .map((l) => {
      if (l.isValid) return `<span class="text-typing-green-500">${l.letter}</span>`;
      else return `<span class="text-typing-red-500 underline">${l.letter}</span>`;
    })
    .join("");
});
const wpm = computed(() => {
  if (wpmCounter.value && inputText.value) {
    const totalWords = inputText.value.split(" ").length;
    return Math.floor((totalWords * 60) / wpmCounter.value);
  } else {
    return 0;
  }
});

const secondsLeft = computed(() => {
  return store.getters.secondsLeft;
});
const hasStarted = computed(() => {
  return store.getters.hasStarted;
});
const hasWon = computed(() => {
  return inputText.value === passageText.value;
});

// F U N C T I O N S //
let timer;
function startTimer() {
  store.dispatch("startGame");
  if (store.getters.mode === "Passage") {
    timer = setInterval(() => {
      wpmCounter.value++;
    }, 1000);
  } else {
    timer = setInterval(() => {
      wpmCounter.value++;
      store.dispatch("decreaseSecondsLeft");
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
    }, 60000);
  }
}

// W A T C H E R S //
watch(inputText, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    validatedLetters.value = newVal.split("").map((letter, index) => {
      if (letter === passageText.value[index]) {
        // to only update the accuracy when the user adds text
        if (newVal.length > oldVal.length) store.dispatch("increaseAccuracy");
        return { letter, isValid: true };
      } else {
        // to only update the accuracy when the user adds text
        if (newVal.length > oldVal.length) store.dispatch("decreaseAccuracy");
        return { letter, isValid: false };
      }
    });
  }
});
watch(wpm, (newVal, oldVal) => {
  if (newVal && newVal !== oldVal) {
    if (newVal) store.dispatch("setWPM", { wpm: newVal });
  }
});
watch(hasStarted, (newVal, oldVal) => {
  // to handle the start of the game
  if (newVal && newVal !== oldVal) {
    startTimer();
    input.value.focus();
  } else if (!newVal && newVal !== oldVal) {
    // to handle the restart of the game
    clearInterval(timer);
    inputText.value = "";
    validatedLetters.value = [];
    wpmCounter.value = 0;
  }
});
// to handle the end of the game (2)
watch(secondsLeft, (newVal, oldVal) => {
  if (!newVal && oldVal) {
    clearInterval(timer);
    store.dispatch("endGame");
  }
});
watch(hasWon, (newVal, oldVal) => {
  if (newVal && newVal !== oldVal) {
    clearInterval(timer);
    store.dispatch("endGame");
  }
});
</script>

<template>
  <div class="relative">
    <test-blur></test-blur>
    <form class="text-3xl relative py-8 leading-relaxed border-y border-typing-neutral-400 mb-6">
      <label for="text" class="text-typing-neutral-500">
        {{ passageText }}
      </label>
      <div class="absolute top-8 left-0">
        <span class="bg-typing-neutral-900" v-html="validatedHTML"></span>
      </div>
      <textarea
        id="text"
        class="absolute top-8 left-0 w-full h-full resize-none appearance-none text-transparent"
        ref="input"
        v-model="inputText"
        @paste.prevent
        @keydown.enter.prevent
      ></textarea>
    </form>
    <restart-button v-show="hasStarted" text="Restart Test" mode="light"></restart-button>
  </div>
</template>

<style scoped>
/* to keep the cursor visible */
textarea {
  caret-color: white;
}
textarea:focus {
  border: none;
  outline: none;
}
</style>
