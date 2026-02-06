import { createStore } from "vuex";
import getRandomPassage from "./utilities";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
  state() {
    return {
      passage: getRandomPassage("easy"),
      difficulty: "Easy",
      mode: "Timed (60s)",
      wpm: 0,
      accuracy: {
        success: 0,
        fail: 0,
      },
      secondsLeft: 60,
      hasStarted: false,
      hasEnded: false,
      scores: { Easy: 0, Medium: 0, Hard: 0 },
      // to show different result displays (baseline vs. best, etc.)
      lastRound: "",
    };
  },
  getters,
  mutations,
  actions,
});

export default store;
