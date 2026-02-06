import data from "../data.json";

function getRandomPassage(mode) {
  const arr = data[mode];
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex].text;
}

export default getRandomPassage;
