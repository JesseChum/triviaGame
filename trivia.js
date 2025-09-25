let currentQuestionIndex = 0;

let score = 0;

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

  {

    question: "What is the best season?",

    answers: [

      { text: "Summer", correct: false },

      { text: "Fall", correct: false },

      { text: "Spring", correct: true },

      { text: "Winter", correct: false },

    ],

  },

  {

    question: "What is the objective best option to get?",

    answers: [

      { text: "Xbox", correct: false },

      { text: "PS5", correct: false },

      { text: "PC", correct: true },

      { text: "Switch 2", correct: false },

    ],

  },

    {

    question: 'Which is the most "fun" and least chaotic class we have had? (There is two correct answers)',

    answers: [

      { text: "SDEV 328", correct: true },

      { text: "ENG 101", correct: false },

      { text: "SDEV 333", correct: false },

      { text: "ENGL 335", correct: true },

    ],

  },

    {

    question: "What is the best fastfood restraunt?",

    answers: [

      { text: "Mcdonalds", correct: false },

      { text: "Burgerking", correct: false },

      { text: "Chick-fila", correct: false },

      { text: "Los pollos hermanos", correct: true },

    ],

  },

  {

    question: "Which football team won the superbowl in 2014(superbowl 48)",

    answers: [

      { text: "49ers", correct: false },

      { text: "LA Rams", correct: false },

      { text: "Seattle Seahawks", correct: true},

      { text: "Denver Broncos", correct: true },

    ],

  },

  {

    question: "World longest floating bridge is located in which country?",

    answers: [

      { text: "49ers", correct: false },

      { text: "LA Rams", correct: false },

      { text: "Seattle Seahawks", correct: true},

      { text: "Denver Broncos", correct: true },

    ],

  }

];

 

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");




function showQuestion() {

  const currentQuestion = questions[currentQuestionIndex];

 

  questionElement.innerHTML = currentQuestion.question;

  answerButton.innerHTML = "";

 

  currentQuestion.answers.forEach(answer => {

    const button = document.createElement("button");

    button.innerText = answer.text;

    button.classList.add("btn");

 

    button.addEventListener("click", () => {

      if (answer.correct) {

        score++;

        document.getElementById("rightOrWrong").innerText = "Correct!";

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {

          showQuestion();

        } else {

          questionElement.innerText = "Quiz Over! Your final score is: " + score + "/" + questions.length;

          answerButton.innerHTML = "";

        }

      } else {

        if(score < 0) {

          score = 0;

        }

        else score--;

        document.getElementById("rightOrWrong").innerText = "Wrong!";

      }

    });

    answerButton.appendChild(button);

  });

}

showQuestion();