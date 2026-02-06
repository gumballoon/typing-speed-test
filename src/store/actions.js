const actions = {
  setDifficulty(context, payload) {
    context.commit("setDifficulty", payload);
  },
  setMode(context, payload) {
    context.commit("setMode", payload);
  },
  setWPM(context, payload) {
    context.commit("setWPM", payload);
  },
  setAccuracy(context, payload) {
    context.commit("setAccuracy", payload);
  },
  increaseAccuracy(context) {
    context.commit("increaseAccuracy");
  },
  decreaseAccuracy(context) {
    context.commit("decreaseAccuracy");
  },
  decreaseSecondsLeft(context) {
    context.commit("decreaseSecondsLeft");
  },
  newGame(context) {
    context.commit("newGame");
  },
  startGame(context) {
    context.commit("startGame");
  },
  endGame(context) {
    context.commit("endGame");
  },
  loadScores(context) {
    const difficulty = localStorage.getItem("difficulty");
    if (difficulty) {
      context.commit("setDifficulty", { difficulty });
    }
    const mode = localStorage.getItem("mode");
    if (mode) {
      context.commit("setMode", { mode });
    }
    const scores = JSON.parse(localStorage.getItem("scores"));
    if (scores) {
      context.commit("setScores", { scores });
    }
  },
};

export default actions;
