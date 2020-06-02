const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function correctSound() {
  document.getElementById("sfx1").play();
}

function wrongSound() {
  document.getElementById("sfx2").play();
}

function clickSound() {
  document.getElementById("sfx3").play();
}

function startGame() {
  clickSound()
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    correctSound();
    element.classList.add('correct')
  } else {
    wrongSound();
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
//multiplication of 8

{
    question: "8 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "18", correct: false},
        { text: "8", correct: true}

    ]
},
{
    question: "8 x 2 ",
    answers: [
        { text: "16", correct: true},
        { text: "3", correct: false},
        { text: "9", correct: false},
        { text: "12", correct: false}

    ]
},
{
    question: "8 x 3 ",
    answers: [
        { text: "24", correct:true },
        { text: "33", correct: false},
        { text: "8", correct: false},
        { text: "11", correct: false}

    ]
},
{
    question: "8 x 4 ",
    answers: [
        { text: "15", correct: false },
        { text: "48", correct: false},
        { text: "32", correct: true},
        { text: "14", correct: false}

    ]
},

{
    question: "8 x 5 ",
    answers: [
        { text: "45", correct: false },
        { text: "21", correct: false},
        { text: "56", correct: false},
        { text: "40", correct: true}

    ]
},

{
    question: "8 x 6 ",
    answers: [
        { text: "48", correct: true },
        { text: "11", correct: false},
        { text: "14", correct: false},
        { text: "76", correct: false}

    ]
},

{
    question: "8 x 7 ",
    answers: [
        { text: "18", correct: false },
        { text: "81", correct: false},
        { text: "56", correct: true},
        { text: "48", correct: false}

    ]
},

{
    question: "8 x 8 ",
    answers: [
        { text: "16", correct: false },
        { text: "56", correct: false},
        { text: "64", correct: true},
        { text: "84", correct: false}

    ]
},

{
    question: "8 x 9 ",
    answers: [
        { text: "79", correct: false},
        { text: "13", correct: false},
        { text: "72", correct: true},
        { text: "9", correct: false}

    ]
},


{
    question: "8 x 10 ",
    answers: [
        { text: "80", correct: true },
        { text: "73", correct: false},
        { text: "18", correct: false},
        { text: "17", correct: false}

    ]
},

{
    question: "8 x 11 ",
    answers: [
        { text: "16", correct: false },
        { text: "14", correct: false},
        { text: "88", correct: true},
        { text: "18", correct: false}

    ]
},

{
    question: "8 x 12 ",
    answers: [
        { text: "15", correct: false },
        { text: "30", correct: false},
        { text: "96", correct: true},
        { text: "24", correct: false}

    ]
} 

]