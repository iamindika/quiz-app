export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?${amount}=10&difficulty=${difficulty}&category=17&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
}