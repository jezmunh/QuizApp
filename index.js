let start = document.getElementById('start')
let result = document.getElementById('result')
let main = document.getElementById('main')

start.addEventListener("click", startProgram)

let currentQuestions = 0
let countSuccess = 0
let allQuestions = [
    {
    question: "4+4",
    correct: 8,
    answers: [4,8,12]
    },
    {
    question: "2+2",
    correct: 4,
    answers: [4,5,2]
    }
]

function startProgram() {
    start.classList.add('none')
    main.classList.remove('none')
    result.classList.add('none')
    generateQuestion()
}
function generateQuestion() {
    let question = allQuestions[currentQuestions].question
    main.innerHTML = `<h1 class="my-5" style="font-size:100px !important">${question}</h1>`

    let answers = allQuestions[currentQuestions].answers
    let btn_block = ""
    for (let i of answers) {
        btn_block += `<button class="btn btn-outline-primary fs-1" onclick="checkQuestion(${i})">${i}</button>`
        
    }
    main.innerHTML += `<nav class="d-flex justify-content-between" style="width:50vw !important">${btn_block}</button>`

}

function checkQuestion(num) {
    let correct = allQuestions[currentQuestions].correct
    if (num == correct) {
        countSuccess += 1
    }
    currentQuestions += 1
    if (allQuestions.length > currentQuestions) {
        generateQuestion()
    } else {
        stopQuiz()
    }


}

function stopQuiz() {
    start.classList.remove('none')
    main.classList.add('none')
    result.classList.remove('none')
    result.innerHTML = `Результат ${countSuccess} из ${allQuestions.length}`

    currentQuestions = 0
    countSuccess = 0
} 