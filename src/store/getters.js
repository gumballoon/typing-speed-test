const getters = {
  passage(state) {
    return state.passage;
  },
  difficulty(state) {
    return state.difficulty;
  },
  mode(state) {
    return state.mode;
  },
  wpm(state) {
    return state.wpm;
  },
  accuracy(state) {
    return state.accuracy;
  },
  accuracyResult(state) {
    const { success, fail } = state.accuracy;
    if (!success && !fail) {
      return 100;
    } else {
      return Math.floor((success / (success + fail)) * 100);
    }
  },
  secondsLeft(state) {
    return state.secondsLeft;
  },
  hasStarted(state) {
    return state.hasStarted;
  },
  hasEnded(state) {
    return state.hasEnded;
  },
  currentBest(state) {
    return state.scores[state.difficulty];
  },
  lastRound(state) {
    return state.lastRound;
  },
};

export default getters;
