<script setup>
import IconDownArrow from "../../assets/images/icon-down-arrow.svg?url";
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps(["options", "name"]);

const hasStarted = computed(() => {
  return store.getters.hasStarted;
});

const selectedOption = computed(() => {
  if (props.name === "difficulty") {
    return store.getters.difficulty;
  } else if (props.name === "mode") {
    return store.getters.mode;
  } else {
    return null;
  }
});
function setSelectedOption(option) {
  if (!hasStarted.value) {
    if (props.name === "difficulty") {
      store.dispatch("setDifficulty", { difficulty: option });
    } else if (props.name === "mode") {
      store.dispatch("setMode", { mode: option });
    }
    toggleDropdown();
    store.dispatch("newGame");
  }
}

const isDropdownVisible = ref(false);
function toggleDropdown() {
  if (!hasStarted.value) isDropdownVisible.value = !isDropdownVisible.value;
}

watch(hasStarted, (newVal, oldVal) => {
  if (newVal && newVal !== oldVal && isDropdownVisible.value) isDropdownVisible.value = false;
});
</script>

<template>
  <form class="w-full relative">
    <div class="xl:hidden">
      <div
        class="border border-typing-neutral-500 flex gap-2 justify-center py-1 rounded-lg mb-2 hover:cursor-pointer no-select"
        @click="toggleDropdown"
      >
        <span>{{ selectedOption }}</span>
        <img :src="IconDownArrow" alt="icon down arrow" />
      </div>
      <div
        v-if="isDropdownVisible"
        class="w-full flex flex-col bg-typing-neutral-800 rounded-lg absolute z-100"
      >
        <div
          v-for="option in options"
          :key="'option-' + option"
          class="flex gap-3 p-2 px-4 font-light border-b border-typing-neutral-500 option no-select"
        >
          <input
            type="radio"
            :name="name"
            :id="option"
            :checked="option === selectedOption"
            @change="setSelectedOption(option)"
            class="appearance-none"
          />
          <label :for="option" class="radio-circle"></label>
          <label :for="option" class="w-full hover:cursor-pointer">{{ option }}</label>
        </div>
      </div>
    </div>
    <div class="hidden xl:flex gap-2">
      <h2 class="capitalize text-typing-neutral-400">{{ name }}:</h2>
      <div v-for="option in options" :key="'option-' + option" class="w-max">
        <input
          type="radio"
          :name="name"
          :id="option"
          :checked="option === selectedOption"
          @change="setSelectedOption(option)"
          class="appearance-none"
        />
        <label
          :for="option"
          class="radio-box font-light border border-typing-neutral-400 px-2 py-1 rounded-lg hover:cursor-pointer no-select"
          >{{ option }}</label
        >
      </div>
    </div>
  </form>
</template>

<style scoped>
.option:last-of-type {
  border-bottom-width: 0;
}
.radio-circle {
  width: 20px;
  height: 20px;
  border: 6px solid transparent;
  outline: 1px solid white;
  border-radius: 50%;
  margin-left: -20px;
}
.radio-circle:hover {
  cursor: pointer;
}
input:checked + .radio-circle {
  border-color: hsl(210, 100%, 65%);
  outline-color: hsl(210, 100%, 65%);
}
input:checked + label.radio-box,
label.radio-box:hover {
  border-color: hsl(210, 100%, 65%);
  color: hsl(210, 100%, 65%);
}
</style>
