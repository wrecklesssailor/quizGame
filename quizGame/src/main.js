/* -------------------------------------------------------------------------- */
/*                                Dom Elements                                */
/* -------------------------------------------------------------------------- */

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("start");
const answersContainer = document.getElementById("answersContainer");
const question = document.getElementById("question");
const currentQuestionNumber = document.getElementById("current");
const totalQuestions = document.getElementById("total");
const scoreCurrent = document.getElementById("score");
const progressBar = document.getElementById("progress");
const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const restartButton = document.getElementById("playAgain");

/* -------------------------------------------------------------------------- */
/*                                  Questions                                 */
/* -------------------------------------------------------------------------- */

const quizQuestions = [
    {
        question: "Which of these types are WEAK against STEEL type Pokemon?",
        answers: [
            { text: "Fire", correct: false },
            { text: "Ice", correct: true },
            { text: "Dragon", correct: false },
            { text: "Electric", correct: false },
        ],
    },
    {
        question: "Which Pokémon is known as the “Guardian of the Sea”?",
        answers: [
            { text: "Manaphy", correct: false },
            { text: "Suicune", correct: false },
            { text: "Kyogre", correct: false },
            { text: "Lugia", correct: true },
        ],
    },
    {
        question: "How many forms does the Pokémon Deoxys have?",
        answers: [
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ],
    },
    {
        question: "What is the first Pokémon in the National Pokédex?",
        answers: [
            { text: "Squirtle", correct: false },
            { text: "Bulbasaur", correct: true },
            { text: "Pikachu", correct: false },
            { text: "Charmander", correct: false },
        ],
    },
    {
        question: "Which Pokémon is known as the “Sword of Justice”?",
        answers: [
            { text: "Virizion", correct: false },
            { text: "Cobalion", correct: false },
            { text: "Keldeo", correct: true },
            { text: "Terrakion", correct: false },
        ],
    },
    {
        question: "What is the effect of the move “Spore”?",
        answers: [
            { text: "Paralyzes the target", correct: false },
            { text: "Reduces the target’s Speed", correct: false },
            { text: "Poisons the target", correct: false },
            { text: "Puts the target to sleep", correct: true },
        ],
    },
    {
        question: "Which is NOT a real region in Pokemon?",
        answers: [
            { text: "Unova", correct: false },
            { text: "Sinnoh", correct: false },
            { text: "Sacharo ", correct: true },
            { text: "Hoenn", correct: false },
        ],
    },
    {
        question: "Which of these types are STRONG against ELECTRIC type Pokemon?",
        answers: [
            { text: "Water", correct: false },
            { text: "Ice", correct: false },
            { text: "Ground", correct: true },
            { text: "Rock", correct: false },
        ],
    },
    {
        question: "Which of these types are have NO EFFECT against FAIRY type Pokemon?",
        answers: [
            { text: "Dragon", correct: true },
            { text: "Ice", correct: false },
            { text: "Psychic", correct: false },
            { text: "Normal", correct: false },
        ],
    },
    {
        question: "Besides DRAGON what other type is Giratina?",
        answers: [
            { text: "Flying", correct: false },
            { text: "Psychic", correct: false },
            { text: "Poison", correct: false },
            { text: "Ghost", correct: true },
        ],
    },
    {
        question: "Which of these is NOT a gang in Pokemon?",
        answers: [
            { text: "Skull", correct: false },
            { text: "Plasma", correct: false },
            { text: "Rainbow Rocket", correct: false },
            { text: "Beast", correct: true },
        ],
    },
    {
        question: "Which generation did Pokemon start Mega Evolution in?",
        answers: [
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "5", correct: false },
            { text: "8", correct: false },
        ],
    },
    {
        question: "Which of these are NOT the name of a Island in Pokemon?",
        answers: [
            { text: "Cinnabar", correct: false },
            { text: "Stormy", correct: true },
            { text: "Faraway", correct: false },
            { text: "Chrono", correct: false },
        ],
    },
    {
        question: "Name Meowth's final evolution.",
        answers: [
            { text: "Lieperd", correct: false },
            { text: "Purrloin", correct: false },
            { text: "Persian", correct: true },
            { text: "Glameow", correct: false },
        ],
    },
    {
        question: "Who is th legendary Pokemon of the Oceans?",
        answers: [
            { text: "Tornadus", correct: false },
            { text: "Latios", correct: false },
            { text: "Kyogre", correct: true },
            { text: "Articuno", correct: false },
        ],
    }
];

/* -------------------------------------------------------------------------- */
/*                               Quiz State Vars                              */
/* -------------------------------------------------------------------------- */
let currentQuestionCount = 0;
let score = 0;
let questionAnswered = false;

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function startQuiz() {
    currentQuestionCount = 0;
    score = 0;
    questionAnswered = false;
    startScreen.classList.remove("active");
    questionScreen.classList.add("active");
    loadQuestion();
    console.log('quiz started');
}

function restartQuiz() {
    console.log('quiz restarted');
}

function loadQuestion() {
    // reset state
questionAnswered = false;

// get current question
const currentQuestion = quizQuestions[currentQuestionCount];

// track progress
currentQuestionNumber.textContent = currentQuestionCount + 1;

const progressPercent = (currentQuestionCount / quizQuestions.length) * 100;
progressBar.style.width = `${progressPercent}%`;

// Load Text
question.textContent = currentQuestion.question;

answersContainer.innerHTML = "";
currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer");

    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
});
}

function selectAnswer(e) {
    const selectedAnswer = e.target;

    if (questionAnswered) {return};

    questionAnswered = true;

    const isCorrect = selectedAnswer.dataset.correct === "true";

    if (isCorrect) {
        selectedAnswer.classList.add("correct");
        score++;
        scoreCurrent.textContent = score;
    } else {
        selectedAnswer.classList.add("incorrect");
    }

      setTimeout(() => {
    currentQuestionCount++;
    if (currentQuestionCount < quizQuestions.length) {
      loadQuestion();
    } else {
      questionScreen.classList.remove("active");
      resultScreen.classList.add("active");
      showResult();
    }
  }, 1000);
};

function showResult() {
    finalScore.textContent = score;

    if (score >= 15) {
        resultMessage.textContent = "You are a Pokemon Master!"
    } else if (score >= 12) {
        resultMessage.textContent = "Amazing!"
    } else if (score >= 10) {
        resultMessage.textContent = "You did great!"
    } else if (score >= 7) {
        resultMessage.textContent = "Timid!"
    } else {
        resultMessage.textContent = "You can do better!"
    }
}