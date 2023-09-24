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
    main.innerHTML = `<h1 class="question">${question}</h1>`

    let answers = allQuestions[currentQuestions].answers
    let btn_block = ""
    for (let i of answers) {
        btn_block += `<button class="btn" onclick="checkQuestion(${i})">${i}</button>`
        
    }
    main.innerHTML += `<nav class="btn_block">${btn_block}</button>`

}
