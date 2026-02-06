<script setup>
import LogoSmall from "../../assets/images/logo-small.svg?url";
import LogoLarge from "../../assets/images/logo-large.svg?ulr";
import IconPersonalBest from "../../assets/images/icon-personal-best.svg?url";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const currentBest = computed(() => {
  return store.getters.currentBest;
});

function newGame() {
  store.dispatch("newGame");
}
</script>

<template>
  <header class="flex justify-between w-full">
    <div class="hover:cursor-pointer" @click="newGame">
      <img :src="LogoSmall" alt="logo" class="lg:hidden" />
      <img :src="LogoLarge" alt="logo" class="hidden lg:block" />
    </div>
    <div class="flex items-center">
      <img :src="IconPersonalBest" alt="icon personal best" />
      <span class="ml-2 mr-1 text-typing-neutral-400 lg:hidden">Best:</span>
      <span class="ml-2 mr-1 text-typing-neutral-400 hidden lg:block">Personal Best:</span>
      <span>{{ currentBest }} WPM</span>
    </div>
  </header>
</template>
