const questions = [
    {
      question: `Which of the following is the best main line Star Wars film?`,
      options: [`Revenge of the Sith`, `The Empire Strikes Back`, `A New Hope`, `Return of the Jedi`],
      images: [`RotS.jpeg`, `TESB.jpeg`, `ANH.jpeg`, `RotJ.jpeg`],
      answer: `Return of the Jedi`
    },
    {
      question: `How many Star Wars films are there that DESERVE to exist?`,
      options: [`7`, `8`, `11`, `0`],
      images: [`Giga.jpeg`, `Wojak.jpeg`, `Cryjak.jpeg`, `Help.jpeg`],
      answer: `7`
    },
    {
      question: `Who is the coolest G. I. Joe Character, possibly ever?`,
      options: [`Snake Eyes`, `Zartan`, `Dusty`, `Night Creeper`],
      images: [`Snake.jpeg`, `Zartan.jpeg`, `Dusty.jpeg`, `Creep.jpeg`],
      answer: `Night Creeper`
    },
    {
      question: `Is Moon Knight just Marvel Batman?`,
      options: [`Yes`, `No`, `I mean... maybe? idk`, `The question in its immense simplicity is flawed. Moon Knight is an immensely complex character. He is represented through several personalities, much like Batman, known as Marc Spector, Steven Grant, and Jake Lockley. All of these personalities have aspects of Batman; Marc has his code, Steven has his morals, and Jake has his great love for beating the underclass. Each, however, is much more than just these aspects, and are simply parts of his complex whole. So, to answer this measly question, no, Moon Knight is not just Marvel Batman.`],
      images: [`Yes.jpeg`, `No.jpeg`, `Idk.jpeg`, `God.jpeg`],
      answer: `The question in its immense simplicity is flawed. Moon Knight is an immensely complex character. He is represented through several personalities, much like Batman, known as Marc Spector, Steven Grant, and Jake Lockley. All of these personalities have aspects of Batman; Marc has his code, Steven has his morals, and Jake has his great love for beating the underclass. Each, however, is much more than just these aspects, and are simply parts of his complex whole. So, to answer this measly question, no, Moon Knight is not just Marvel Batman.`
    },
    {
      question: `Is he Invincible?`,
      options: [`Yes`, `Title Card`, `No`, `THINK MARK`],
      images: [`Invincible.jpeg`, `TitleCard.jpeg`, `NotInvincible.jpeg`, `THINK.jpeg`],
      answer: `Title Card`
    },
  ];
  let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextEl = document.getElementById("next");
const showAnswersEl = document.getElementById("show-answers");
const scoreEl = document.getElementById("score");

function showQuestion() {
    const question = questions[currentQuestion];
    questionEl.innerText = question.question;
    question.options.forEach((option, index) => {
        const optionElement = optionsContainer.children[index];
        optionElement.querySelector(".option-button").innerText = option;
        optionElement.querySelector(".option-image").src = question.images[index];
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    scoreEl.innerText = `Your final score is ${score}/${questions.length}`;
}

nextEl.addEventListener("click", () => {
    const selectedOption = document.querySelector(".option-button.selected");
    if (selectedOption) {
        checkAnswer(selectedOption.innerText);
        selectedOption.classList.remove("selected");
    }
});

showAnswersEl.addEventListener("click", () => {
    questions.forEach((question, index) => {
        const answer = document.createElement("p");
        answer.innerText = `${index + 1}. ${question.answer}`;
        scoreEl.appendChild(answer);
    });
    showAnswersEl.disabled = true;
});

document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".option-button").forEach((button) => {
            button.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});

showQuestion();