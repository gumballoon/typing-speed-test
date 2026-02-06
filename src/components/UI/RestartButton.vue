<script setup>
import IconRestart from "../../assets/images/icon-restart.svg";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps(["text", "mode"]);

const buttonClasses = computed(() => {
  if (props.mode === "dark") {
    return ["bg-typing-neutral-0", "text-typing-neutral-900"];
  } else if (props.mode === "light") {
    return "bg-typing-neutral-800";
  } else {
    return null;
  }
});

const iconClass = computed(() => {
  if (props.mode === "dark") {
    return "dark";
  } else {
    return null;
  }
});

function newGame() {
  store.dispatch("newGame");
}
</script>

<template>
  <button
    class="px-4 py-3 flex items-center rounded-lg gap-3 mx-auto hover:cursor-pointer hover:scale-105 no-select"
    :class="buttonClasses"
    @click="newGame"
  >
    <span class="text-lg font-semibold">{{ text }}</span>
    <IconRestart :class="iconClass" />
  </button>
</template>

<style scoped>
button {
  transition: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}
button:hover svg {
  animation-name: spin;
  animation-duration: 500ms;
  animation-timing-function: ease-in-out;
}
</style>
