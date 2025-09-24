const questions = [
  {
    question: "Which country is the largest in the world?",
    answers: [
      { text: "United States", correct: false },
      { text: "Russia", correct: true },
      { text: "China", correct: false },
      { text: "South America", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//nextButton and eventListener feature

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
