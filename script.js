import questions from './data.js'

let score = 0;
let QuestionNumber = 0;

const startBtn = document.querySelector("#start-btn");
const welcomeText = document.querySelector("#welcome-text")


startBtn.addEventListener("click",()=>{
    welcomeText.style.cssText = "display:none;"
    startBtn.style.cssText = "display:none;"
    loadQuiz();
})


function loadQuiz() {

    const CurrentQuestion = questions[QuestionNumber]

    const quizQuestionElement = document.getElementById("question-txt");
    const quizAnswersElement = document.getElementById("quiz-answers");
    const QuestionNum = document.getElementById("question-numb")
    const scoreNumb = document.querySelector("#score-numb")
    scoreNumb.innerText = `Score: ${score}`
    quizQuestionElement.innerHTML = CurrentQuestion.question;
    quizQuestionElement.classList.add("fw-bold");

    quizAnswersElement.innerHTML = "";

    for (const answer of CurrentQuestion.answers) {
        QuestionNum.innerHTML = `Klausimas ${QuestionNumber + 1} iš ${questions.length}`
        const button = document.createElement("button");
        const lineBreak = document.createElement('br');

        button.classList.add("btn", "btn-success", "mb-1");
        button.innerText = answer.text;

        button.addEventListener("click", () => {
            if (answer.isCorrect === true) {
                score += 1;
            }  

            QuestionNumber += 1;

            if (QuestionNumber == questions.length) {
                displayEndScore(score)
                QuestionNumber = -1;
                score = 0;
            } else {
                loadQuiz();
            }
        })
        quizAnswersElement.appendChild(button);
        quizAnswersElement.appendChild(lineBreak);
    }

}

function displayEndScore(score) {
    let output = 'Invalid score'
    
    switch (true) {
        case score <= 5:
            output = 'labai blogas'
            break
        case score <= 9:
            output = 'blogas'
            break
        case score <= 15:
            output = 'visai Geras'
            break
        case score <= 19:
            output = 'geras'
            break
        case score >= 20:
            output = 'labai geras'
            break
    }

    const question = document.getElementById('question')
    question.style.display = "none"
    
    const pagr = document.getElementById('pagr')
    const quizEnd = document.createElement('div')
    quizEnd.id = 'quizEnd'
    pagr.appendChild(quizEnd)

    
    const scoreResult = document.createElement('h2')
    const TryAgianButton = document.createElement('button')

    scoreResult.innerText = `Rezultatas ${output} surinkai tasku: ${score}/20`
    quizEnd.appendChild(scoreResult)

    
    TryAgianButton.classList.add("btn", "btn-success", "mb-1");
    TryAgianButton.innerText = 'Bandyti dar karta'

    quizEnd.appendChild(TryAgianButton)

    TryAgianButton.addEventListener('click', () => {
        quizEnd.remove()
        question.style.display = "block"
        document.location.reload();
    })
}
