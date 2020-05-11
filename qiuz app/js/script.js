const startGame = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questContainer = document.getElementById("question-container");
let shuffledQuestions, currentQuestionsIndex
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

var clickSound;
var wrongSound;
var correctSound;

startGame.addEventListener("click", startGame)
nextButton.addEventListener("click", () =>{

})

function Sound() {
    clickSound = loadSound("sounds/MouseClick.mp3");
    wrongSound = loadSound("sounds/WrongBuzzer.mp3");
    correctSound = loadSound("sounds/Correct.mp3");
}



function startGame() {
    clickSound.play()
    reset()
    startGame.classList.add("hide")
    questionContainer.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionsIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
     }
     button.addEventListener("click", selectAnswer)
     answerButtonsElement.appendChild(button)
  });
}

function reset() {
clearStatusClass(document.body)    
nextButton.classList.add("hide")
while (answerButtonsElement.firstChild) {
     answerButtonsElement.removeChild
     (answerButtonsElement.firstChild)
   }
 }

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct) 
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, buttton.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionsIndex + 1) {
 nextButton.classList.remove("hide")
  }else{
    clickSound.play()
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
 }


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        correctSound.play();
        element.classList.add("correct")
    } else{
    wrongSound.play();
    element.classList.add("wrong")
    }

}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")

}

const questions = [
    {
        question: "1 x 1",
        answers: [
            { text: "2", correct:false },
            { text: "3", correct: false},
            { text: "12", correct: false},
            { text: "1", correct: true}

        ]
    },
    {
        question: "1 x 2 ",
        answers: [
            { text: "11", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "13", correct: false}

        ]
    },
    {
        question: "1 x 3 ",
        answers: [
            { text: "3", correct:true },
            { text: "10", correct: false},
            { text: "4", correct: false},
            { text: "13", correct: false}

        ]
    },
    {
        question: "1 x 4 ",
        answers: [
            { text: "8", correct: false },
            { text: "5", correct: false},
            { text: "4", correct: true},
            { text: "17", correct: false}

        ]
    },
    
    {
        question: "1 x 5 ",
        answers: [
            { text: "2", correct: false },
            { text: "1", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true}

        ]
    },

    {
        question: "1 x 6 ",
        answers: [
            { text: "6", correct: true },
            { text: "9", correct: false},
            { text: "16", correct: false},
            { text: "51", correct: false}

        ]
    },

    {
        question: "1 x 7 ",
        answers: [
            { text: "64", correct: false },
            { text: "19", correct: false},
            { text: "7", correct: true},
            { text: "8", correct: false}

        ]
    },

    {
        question: "1 x 8 ",
        answers: [
            { text: "16", correct: false },
            { text: "8", correct: true},
            { text: "81", correct: false},
            { text: "9", correct: false}

        ]
    },

    {
        question: "1 x 9 ",
        answers: [
            { text: "9", correct: true },
            { text: "13", correct: false},
            { text: "6", correct: false},
            { text: "19", correct: false}

        ]
    },

   
    {
        question: "1 x 10 ",
        answers: [
            { text: "4", correct: false },
            { text: "10", correct: true},
            { text: "12", correct: false},
            { text: "14", correct: false}

        ]
    },

    {
        question: "1 x 11 ",
        answers: [
            { text: "14", correct: false },
            { text: "1", correct: false},
            { text: "19", correct: false},
            { text: "11", correct: true}

        ]
    },

    {
        question: "1 x 12 ",
        answers: [
            { text: "15", correct: false },
            { text: "21", correct: false},
            { text: "12", correct: true},
            { text: "71", correct: true}

        ]
    },
    // mutliplication for 2 

    {
        question: "2 x 1",
        answers: [
            { text: "4", correct:false },
            { text: "3", correct: false},
            { text: "21", correct: false},
            { text: "2", correct: true}

        ]
    },
    {
        question: "2 x 2 ",
        answers: [
            { text: "11", correct: false},
            { text: "2", correct: true},
            { text: "41", correct: false},
            { text: "13", correct: false}

        ]
    },
    {
        question: "2 x 3 ",
        answers: [
            { text: "6", correct:true },
            { text: "16", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: false}

        ]
    },
    {
        question: "2 x 4 ",
        answers: [
            { text: "8", correct: false },
            { text: "15", correct: false},
            { text: "8", correct: true},
            { text: "17", correct: false}

        ]
    },
    
    {
        question: "2 x 5 ",
        answers: [
            { text: "2", correct: false },
            { text: "1", correct: false},
            { text: "4", correct: false},
            { text: "10", correct: true}

        ]
    },

    {
        question: "2 x 6 ",
        answers: [
            { text: "22", correct: true },
            { text: "9", correct: false},
            { text: "13", correct: false},
            { text: "15", correct: false}

        ]
    },

    {
        question: "2 x 7 ",
        answers: [
            { text: "64", correct: false },
            { text: "19", correct: false},
            { text: "7", correct: true},
            { text: "8", correct: false}

        ]
    },

    {
        question: "2 x 8 ",
        answers: [
            { text: "11", correct: false },
            { text: "16", correct: true},
            { text: "81", correct: false},
            { text: "9", correct: false}

        ]
    },

    {
        question: "2 x 9 ",
        answers: [
            { text: "18", correct: true },
            { text: "13", correct: false},
            { text: "29", correct: false},
            { text: "92", correct: false}

        ]
    },

   
    {
        question: "2 x 10 ",
        answers: [
            { text: "20", correct: true },
            { text: "22", correct: false},
            { text: "12", correct: false},
            { text: "14", correct: false}

        ]
    },

    {
        question: "2 x 11 ",
        answers: [
            { text: "10", correct: false },
            { text: "1", correct: false},
            { text: "19", correct: false},
            { text: "11", correct: true}

        ]
    },

    {
        question: "2 x 12 ",
        answers: [
            { text: "15", correct: false },
            { text: "21", correct: false},
            { text: "24", correct: true},
            { text: "31", correct: false}

        ]
    },
// mutliplication for 3 
{
    question: "3 x 1",
    answers: [
        { text: "4", correct:false },
        { text: "41", correct: false},
        { text: "14", correct: false},
        { text: "3", correct: true}

    ]
},
{
    question: "3 x 2 ",
    answers: [
        { text: "11", correct: false},
        { text: "6", correct: true},
        { text: "41", correct: false},
        { text: "13", correct: false}

    ]
},
{
    question: "3 x 3 ",
    answers: [
        { text: "9", correct:true },
        { text: "6", correct: false},
        { text: "7", correct: false},
        { text: "19", correct: false}

    ]
},
{
    question: "3 x 4 ",
    answers: [
        { text: "18", correct: false },
        { text: "15", correct: false},
        { text: "12", correct: true},
        { text: "16", correct: false}

    ]
},

{
    question: "3 x 5 ",
    answers: [
        { text: "53", correct: false },
        { text: "35", correct: false},
        { text: "8", correct: false},
        { text: "15", correct: true}

    ]
},

{
    question: "3 x 6 ",
    answers: [
        { text: "18", correct: true },
        { text: "63", correct: false},
        { text: "13", correct: false},
        { text: "16", correct: false}

    ]
},

{
    question: "3 x 7 ",
    answers: [
        { text: "64", correct: false },
        { text: "19", correct: false},
        { text: "21", correct: true},
        { text: "8", correct: false}

    ]
},

{
    question: "3 x 8 ",
    answers: [
        { text: "11", correct: false },
        { text: "24", correct: true},
        { text: "81", correct: false},
        { text: "9", correct: false}

    ]
},

{
    question: "3 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "13", correct: false},
        { text: "27", correct: true},
        { text: "92", correct: false}

    ]
},


{
    question: "3 x 10 ",
    answers: [
        { text: "30", correct: true },
        { text: "23", correct: false},
        { text: "13", correct: false},
        { text: "31", correct: false}

    ]
},

{
    question: "3 x 11 ",
    answers: [
        { text: "10", correct: false },
        { text: "1", correct: false},
        { text: "19", correct: false},
        { text: "33", correct: true}

    ]
},

{
    question: "3 x 12 ",
    answers: [
        { text: "15", correct: false },
        { text: "21", correct: false},
        { text: "36", correct: true},
        { text: "23", correct: false}

    ]
},

// mutliplication for 4
{
    question: "4 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "17", correct: false},
        { text: "4", correct: true}

    ]
},
{
    question: "4 x 2 ",
    answers: [
        { text: "12", correct: false},
        { text: "8", correct: true},
        { text: "41", correct: false},
        { text: "11", correct: false}

    ]
},
{
    question: "4 x 3 ",
    answers: [
        { text: "12", correct:true },
        { text: "43", correct: false},
        { text: "7", correct: false},
        { text: "13", correct: false}

    ]
},
{
    question: "4 x 4 ",
    answers: [
        { text: "17", correct: false },
        { text: "15", correct: false},
        { text: "16", correct: true},
        { text: "8", correct: false}

    ]
},

{
    question: "4 x 5 ",
    answers: [
        { text: "45", correct: false },
        { text: "21", correct: false},
        { text: "5", correct: false},
        { text: "20", correct: true}

    ]
},

{
    question: "4 x 6 ",
    answers: [
        { text: "24", correct: true },
        { text: "10", correct: false},
        { text: "16", correct: false},
        { text: "14", correct: false}

    ]
},

{
    question: "4 x 7 ",
    answers: [
        { text: "64", correct: false },
        { text: "19", correct: false},
        { text: "28", correct: true},
        { text: "11", correct: false}

    ]
},

{
    question: "4 x 8 ",
    answers: [
        { text: "11", correct: false },
        { text: "32", correct: true},
        { text: "81", correct: false},
        { text: "8", correct: false}

    ]
},

{
    question: "4 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "13", correct: false},
        { text: "36", correct: true},
        { text: "64", correct: false}

    ]
},


{
    question: "4 x 10 ",
    answers: [
        { text: "40", correct: true },
        { text: "23", correct: false},
        { text: "13", correct: false},
        { text: "41", correct: false}

    ]
},

{
    question: "4 x 11 ",
    answers: [
        { text: "10", correct: false },
        { text: "14", correct: false},
        { text: "19", correct: false},
        { text: "44", correct: true}

    ]
},

{
    question: "4 x 12 ",
    answers: [
        { text: "15", correct: false },
        { text: "32", correct: false},
        { text: "48", correct: true},
        { text: "22", correct: false}

    ]
},

// mutliplication for 5
{
    question: "5 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "17", correct: false},
        { text: "5", correct: true}

    ]
},
{
    question: "5 x 2 ",
    answers: [
        { text: "12", correct: false},
        { text: "10", correct: true},
        { text: "7", correct: false},
        { text: "52", correct: false}

    ]
},
{
    question: "5 x 3 ",
    answers: [
        { text: "15", correct:true },
        { text: "43", correct: false},
        { text: "7", correct: false},
        { text: "13", correct: false}

    ]
},
{
    question: "5 x 4 ",
    answers: [
        { text: "17", correct: false },
        { text: "15", correct: false},
        { text: "20", correct: true},
        { text: "8", correct: false}

    ]
},

{
    question: "5 x 5 ",
    answers: [
        { text: "45", correct: false },
        { text: "21", correct: false},
        { text: "5", correct: false},
        { text: "25", correct: true}

    ]
},

{
    question: "5 x 6 ",
    answers: [
        { text: "30", correct: true },
        { text: "10", correct: false},
        { text: "16", correct: false},
        { text: "14", correct: false}

    ]
},

{
    question: "5 x 7 ",
    answers: [
        { text: "12", correct: false },
        { text: "57", correct: false},
        { text: "35", correct: true},
        { text: "75", correct: false}

    ]
},

{
    question: "5 x 8 ",
    answers: [
        { text: "11", correct: false },
        { text: "40", correct: true},
        { text: "81", correct: false},
        { text: "8", correct: false}

    ]
},

{
    question: "5 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "13", correct: false},
        { text: "45", correct: true},
        { text: "46", correct: false}

    ]
},


{
    question: "5 x 10 ",
    answers: [
        { text: "50", correct: true },
        { text: "23", correct: false},
        { text: "13", correct: false},
        { text: "41", correct: false}

    ]
},

{
    question: "5 x 11 ",
    answers: [
        { text: "10", correct: false },
        { text: "14", correct: false},
        { text: "19", correct: false},
        { text: "55", correct: true}

    ]
},

{
    question: "5 x 12 ",
    answers: [
        { text: "15", correct: false },
        { text: "32", correct: false},
        { text: "60", correct: true},
        { text: "22", correct: false}

    ]
},

//multiplication of 6
{
    question: "6 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "17", correct: false},
        { text: "6", correct: true}

    ]
},
{
    question: "6 x 2 ",
    answers: [
        { text: "12", correct: true},
        { text: "10", correct: false},
        { text: "7", correct: false},
        { text: "52", correct: false}

    ]
},
{
    question: "6 x 3 ",
    answers: [
        { text: "18", correct:true },
        { text: "43", correct: false},
        { text: "8", correct: false},
        { text: "11", correct: false}

    ]
},
{
    question: "6 x 4 ",
    answers: [
        { text: "10", correct: false },
        { text: "15", correct: false},
        { text: "24", correct: true},
        { text: "7", correct: false}

    ]
},

{
    question: "6 x 5 ",
    answers: [
        { text: "45", correct: false },
        { text: "21", correct: false},
        { text: "56", correct: false},
        { text: "30", correct: true}

    ]
},

{
    question: "6 x 6 ",
    answers: [
        { text: "30", correct: true },
        { text: "10", correct: false},
        { text: "16", correct: false},
        { text: "18", correct: false}

    ]
},

{
    question: "6 x 7 ",
    answers: [
        { text: "12", correct: false },
        { text: "57", correct: false},
        { text: "42", correct: true},
        { text: "47", correct: false}

    ]
},

{
    question: "6 x 8 ",
    answers: [
        { text: "11", correct: false },
        { text: "48", correct: true},
        { text: "81", correct: false},
        { text: "8", correct: false}

    ]
},

{
    question: "6 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "13", correct: false},
        { text: "54", correct: true},
        { text: "41", correct: false}

    ]
},


{
    question: "6 x 10 ",
    answers: [
        { text: "60", correct: true },
        { text: "23", correct: false},
        { text: "13", correct: false},
        { text: "41", correct: false}

    ]
},

{
    question: "6 x 11 ",
    answers: [
        { text: "10", correct: false },
        { text: "14", correct: false},
        { text: "66", correct: true},
        { text: "14", correct: false}

    ]
},

{
    question: "6 x 12 ",
    answers: [
        { text: "15", correct: false },
        { text: "32", correct: false},
        { text: "72", correct: true},
        { text: "26", correct: false}

    ]
},

//multiplication for 
{
    question: "7 x 1",
    answers: [
        { text: "6", correct:false },
        { text: "14", correct: false},
        { text: "17", correct: false},
        { text: "7", correct: true}

    ]
},
{
    question: "7 x 2 ",
    answers: [
        { text: "14", correct: true},
        { text: "12", correct: false},
        { text: "9", correct: false},
        { text: "2", correct: false}

    ]
},
{
    question: "7 x 3 ",
    answers: [
        { text: "21", correct:true },
        { text: "43", correct: false},
        { text: "8", correct: false},
        { text: "11", correct: false}

    ]
},
{
    question: "7 x 4 ",
    answers: [
        { text: "10", correct: false },
        { text: "15", correct: false},
        { text: "28", correct: true},
        { text: "7", correct: false}

    ]
},

{
    question: "7 x 5 ",
    answers: [
        { text: "45", correct: false },
        { text: "21", correct: false},
        { text: "56", correct: false},
        { text: "35", correct: true}

    ]
},

{
    question: "7 x 6 ",
    answers: [
        { text: "42", correct: true },
        { text: "11", correct: false},
        { text: "14", correct: false},
        { text: "76", correct: false}

    ]
},

{
    question: "7 x 7 ",
    answers: [
        { text: "12", correct: false },
        { text: "57", correct: false},
        { text: "49", correct: true},
        { text: "47", correct: false}

    ]
},

{
    question: "7 x 8 ",
    answers: [
        { text: "11", correct: false },
        { text: "56", correct: true},
        { text: "81", correct: false},
        { text: "87", correct: false}

    ]
},

{
    question: "7 x 9 ",
    answers: [
        { text: "79", correct: false},
        { text: "13", correct: false},
        { text: "63", correct: true},
        { text: "41", correct: false}

    ]
},


{
    question: "7 x 10 ",
    answers: [
        { text: "70", correct: true },
        { text: "73", correct: false},
        { text: "13", correct: false},
        { text: "71", correct: false}

    ]
},

{
    question: "7 x 11 ",
    answers: [
        { text: "16", correct: false },
        { text: "14", correct: false},
        { text: "77", correct: true},
        { text: "17", correct: false}

    ]
},

{
    question: "7 x 12 ",
    answers: [
        { text: "15", correct: false },
        { text: "30", correct: false},
        { text: "84", correct: true},
        { text: "24", correct: false}

    ]
}, 

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
}, 

//multiplication for 9
{
    question: "9 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "18", correct: false},
        { text: "9", correct: true}

    ]
},
{
    question: "9 x 2 ",
    answers: [
        { text: "18", correct: true},
        { text: "3", correct: false},
        { text: "9", correct: false},
        { text: "12", correct: false}

    ]
},
{
    question: "9 x 3 ",
    answers: [
        { text: "27", correct:true },
        { text: "33", correct: false},
        { text: "8", correct: false},
        { text: "15", correct: false}

    ]
},
{
    question: "9 x 4 ",
    answers: [
        { text: "13", correct: false },
        { text: "48", correct: false},
        { text: "36", correct: true},
        { text: "49", correct: false}

    ]
},

{
    question: "9 x 5 ",
    answers: [
        { text: "47", correct: false },
        { text: "21", correct: false},
        { text: "56", correct: false},
        { text: "45", correct: true}

    ]
},

{
    question: "9 x 6 ",
    answers: [
        { text: "54", correct: true },
        { text: "11", correct: false},
        { text: "14", correct: false},
        { text: "76", correct: false}

    ]
},

{
    question: "9 x 7 ",
    answers: [
        { text: "78", correct: false },
        { text: "81", correct: false},
        { text: "63", correct: true},
        { text: "76", correct: false}

    ]
},

{
    question: "9 x 8 ",
    answers: [
        { text: "17", correct: false },
        { text: "59", correct: false},
        { text: "72", correct: true},
        { text: "89", correct: false}

    ]
},

{
    question: "9 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "10", correct: false},
        { text: "81", correct: true},
        { text: "99", correct: false}

    ]
},


{
    question: "9 x 10 ",
    answers: [
        { text: "90", correct: true },
        { text: "71", correct: false},
        { text: "14", correct: false},
        { text: "71", correct: false}

    ]
},

{
    question: "9 x 11 ",
    answers: [
        { text: "16", correct: false },
        { text: "11", correct: false},
        { text: "99", correct: true},
        { text: "91", correct: false}

    ]
},

{
    question: "9 x 12 ",
    answers: [
        { text: "17", correct: false },
        { text: "30", correct: false},
        { text: "108", correct: true},
        { text: "96", correct: false}

    ]
},
// multiplication of 10
{
    question: "10 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "18", correct: false},
        { text: "10", correct: true}

    ]
},
{
    question: "10 x 2 ",
    answers: [
        { text: "20", correct: true},
        { text: "22", correct: false},
        { text: "10", correct: false},
        { text: "12", correct: false}

    ]
},
{
    question: "10 x 3 ",
    answers: [
        { text: "27", correct:true },
        { text: "33", correct: false},
        { text: "8", correct: false},
        { text: "15", correct: false}

    ]
},
{
    question: "10 x 4 ",
    answers: [
        { text: "13", correct: false },
        { text: "48", correct: false},
        { text: "40", correct: true},
        { text: "49", correct: false}

    ]
},

{
    question: "10 x 5 ",
    answers: [
        { text: "47", correct: false },
        { text: "21", correct: false},
        { text: "59", correct: false},
        { text: "50", correct: true}

    ]
},

{
    question: "10 x 6 ",
    answers: [
        { text: "60", correct: true },
        { text: "41", correct: false},
        { text: "15", correct: false},
        { text: "78", correct: false}

    ]
},

{
    question: "10 x 7 ",
    answers: [
        { text: "28", correct: false },
        { text: "81", correct: false},
        { text: "70", correct: true},
        { text: "15", correct: false}

    ]
},

{
    question: "10 x 8 ",
    answers: [
        { text: "41", correct: false },
        { text: "18", correct: false},
        { text: "80", correct: true},
        { text: "81", correct: false}

    ]
},

{
    question: "10 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "10", correct: false},
        { text: "90", correct: true},
        { text: "9", correct: false}

    ]
},


{
    question: "10 x 10 ",
    answers: [
        { text: "100", correct: true },
        { text: "41", correct: false},
        { text: "15", correct: false},
        { text: "51", correct: false}

    ]
},

{
    question: "10 x 11 ",
    answers: [
        { text: "10", correct: false },
        { text: "11", correct: false},
        { text: "110", correct: true},
        { text: "19", correct: false}

    ]
},

{
    question: "10 x 12 ",
    answers: [
        { text: "12", correct: false },
        { text: "112", correct: false},
        { text: "120", correct: true},
        { text: "21", correct: false}

    ]
},

//multiplication for 11
{
    question: "11 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "18", correct: false},
        { text: "11", correct: true}

    ]
},
{
    question: "11 x 2 ",
    answers: [
        { text: "22", correct: true},
        { text: "20", correct: false},
        { text: "10", correct: false},
        { text: "12", correct: false}

    ]
},
{
    question: "11 x 3 ",
    answers: [
        { text: "33", correct:true },
        { text: "33", correct: false},
        { text: "8", correct: false},
        { text: "15", correct: false}

    ]
},
{
    question: "11 x 4 ",
    answers: [
        { text: "13", correct: false },
        { text: "48", correct: false},
        { text: "44", correct: true},
        { text: "49", correct: false}

    ]
},

{
    question: "11 x 5 ",
    answers: [
        { text: "47", correct: false },
        { text: "21", correct: false},
        { text: "50", correct: false},
        { text: "55", correct: true}

    ]
},

{
    question: "11 x 6 ",
    answers: [
        { text: "66", correct: true },
        { text: "41", correct: false},
        { text: "15", correct: false},
        { text: "78", correct: false}

    ]
},

{
    question: "11 x 7 ",
    answers: [
        { text: "28", correct: false },
        { text: "81", correct: false},
        { text: "77", correct: true},
        { text: "15", correct: false}

    ]
},

{
    question: "11 x 8 ",
    answers: [
        { text: "41", correct: false },
        { text: "18", correct: false},
        { text: "88", correct: true},
        { text: "81", correct: false}

    ]
},

{
    question: "11 x 9 ",
    answers: [
        { text: "18", correct: false},
        { text: "10", correct: false},
        { text: "99", correct: true},
        { text: "9", correct: false}

    ]
},


{
    question: "11 x 10 ",
    answers: [
        { text: "110", correct: true },
        { text: "41", correct: false},
        { text: "15", correct: false},
        { text: "51", correct: false}

    ]
},

{
    question: "11 x 11 ",
    answers: [
        { text: "101", correct: false },
        { text: "110", correct: false},
        { text: "121", correct: true},
        { text: "111", correct: false}

    ]
},

{
    question: "11 x 12 ",
    answers: [
        { text: "121", correct: false },
        { text: "112", correct: false},
        { text: "132", correct: true},
        { text: "211", correct: false}

    ]
},

//multiplication 12
//multiplication for 11
{
    question: "12 x 1",
    answers: [
        { text: "5", correct:false },
        { text: "14", correct: false},
        { text: "18", correct: false},
        { text: "12;", correct: true}

    ]
},
{
    question: "11 x 2 ",
    answers: [
        { text: "24", correct: true},
        { text: "21", correct: false},
        { text: "18", correct: false},
        { text: "12", correct: false}

    ]
},
{
    question: "12 x 3 ",
    answers: [
        { text: "36", correct:true },
        { text: "33", correct: false},
        { text: "8", correct: false},
        { text: "15", correct: false}

    ]
},
{
    question: "12 x 4 ",
    answers: [
        { text: "14", correct: false },
        { text: "44", correct: false},
        { text: "48", correct: true},
        { text: "49", correct: false}

    ]
},

{
    question: "12 x 5 ",
    answers: [
        { text: "47", correct: false },
        { text: "21", correct: false},
        { text: "50", correct: false},
        { text: "60", correct: true}

    ]
},

{
    question: "12 x 6 ",
    answers: [
        { text: "72", correct: true },
        { text: "41", correct: false},
        { text: "15", correct: false},
        { text: "78", correct: false}

    ]
},

{
    question: "12 x 7 ",
    answers: [
        { text: "28", correct: false },
        { text: "81", correct: false},
        { text: "84", correct: true},
        { text: "15", correct: false}

    ]
},

{
    question: "12 x 8 ",
    answers: [
        { text: "61", correct: false },
        { text: "81", correct: false},
        { text: "96", correct: true},
        { text: "86", correct: false}

    ]
},

{
    question: "12 x 9 ",
    answers: [
        { text: "191", correct: false},
        { text: "102", correct: false},
        { text: "108", correct: true},
        { text: "109", correct: false}

    ]
},


{
    question: "12 x 10 ",
    answers: [
        { text: "120", correct: true },
        { text: "101", correct: false},
        { text: "100", correct: false},
        { text: "110", correct: false}

    ]
},

{
    question: "12 x 11 ",
    answers: [
        { text: "101", correct: false },
        { text: "110", correct: false},
        { text: "132", correct: true},
        { text: "111", correct: false}

    ]
},

{
    question: "12 x 12 ",
    answers: [
        { text: "121", correct: false },
        { text: "112", correct: false},
        { text: "144", correct: true},
        { text: "211", correct: false}

    ]
},

   

   

]