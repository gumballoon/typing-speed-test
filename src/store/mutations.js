import getRandomPassage from "./utilities";

const mutations = {
  setDifficulty(state, payload) {
    // to update the state and the localStorage
    const { difficulty } = payload;
    state.difficulty = difficulty;
    state.passage = getRandomPassage(difficulty.toLowerCase());
    localStorage.setItem("difficulty", state.difficulty);
  },
  setMode(state, payload) {
    // to update the state and the localStorage
    state.mode = payload.mode;
    localStorage.setItem("mode", state.mode);
  },
  setWPM(state, payload) {
    state.wpm = payload.wpm;
  },
  increaseAccuracy(state) {
    state.accuracy.success++;
  },
  decreaseAccuracy(state) {
    state.accuracy.fail++;
  },
  decreaseSecondsLeft(state) {
    if (state.secondsLeft) state.secondsLeft--;
  },
  newGame(state) {
    state.passage = getRandomPassage(state.difficulty.toLowerCase());
    state.wpm = 0;
    state.accuracy = {
      success: 0,
      fail: 0,
    };
    state.secondsLeft = 60;
    state.hasStarted = false;
    state.hasEnded = false;
  },
  startGame(state) {
    state.hasStarted = true;
  },
  endGame(state) {
    state.hasEnded = true;
    const currentBest = state.scores[state.difficulty];
    if (!currentBest || state.wpm > currentBest) {
      // to update the state and the localStorage
      state.scores[state.difficulty] = state.wpm;
      localStorage.setItem("scores", JSON.stringify(state.scores));

      // if it was the first attempt on this difficulty
      if (!currentBest) {
        state.lastRound = "baseline";
        // if it beats the previous score
      } else {
        state.lastRound = "best";
      }
      // if there was a previous score & it didn't beat it
    } else {
      state.lastRound = "try";
    }
  },
  setScores(state, payload) {
    if (payload.scores) {
      state.scores = payload.scores;
    }
  },
};

export default mutations;
