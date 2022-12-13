import questions from './data.js'

let score = 0;
let QuestionNumber = 0;
let bubblesExist = false;

const startBtn = document.querySelector("#start-btn");
const welcomeText = document.querySelector("#welcome-text")


startBtn.addEventListener("click", () => {
    play();
})

function play() {
    welcomeText.style.cssText = "display:none;"
    startBtn.style.cssText = "display:none;"
    loadQuiz(true);
    bubbles("clear");
}


function loadQuiz(replay) {
    if(replay == true){
        QuestionNumber = 0;
        score = 0;
    }
    const CurrentQuestion = questions[QuestionNumber]

    const quizQuestionElement = document.getElementById("question-txt");
    const quizAnswersElement = document.getElementById("quiz-answers");
    const QuestionNum = document.getElementById("question-numb")
    const scoreNumb = document.querySelector("#score-numb")

    scoreNumb.innerText = `Taškai: ${score}`
    quizQuestionElement.innerHTML = CurrentQuestion.question;
    quizQuestionElement.classList.add("fw-bold");
    quizAnswersElement.innerHTML = "";

    for (const answer of CurrentQuestion.answers) {
        QuestionNum.innerHTML = `Klausimas ${QuestionNumber + 1} iš ${questions.length}`
        const button = document.createElement("button");
        const lineBreak = document.createElement('br');

        button.classList.add("btn", "btn-success", "mb-2", "w-100");
        button.innerText = answer.text;

        button.addEventListener("click", () => {
            bubbles(answer.isCorrect, QuestionNumber);
            QuestionNumber += 1;
            
            if (answer.isCorrect === true) {
                score += 1;
            }

            if (QuestionNumber == questions.length) {
                displayEndScore(score);
            } else {
                loadQuiz();
            }
        })
        quizAnswersElement.appendChild(button);
        quizAnswersElement.appendChild(lineBreak);
    }
}

function bubbles(answer, number) {
    let liList = document.querySelectorAll("li");
    const contentDiv = document.querySelector("#content_div");
    if (answer === "clear"&& document.querySelector("ul") != null) {
        liList.forEach(bubble => {
            bubble.style.cssText = "";
        })
    } else if (bubblesExist != true) {
        const ul_wrapper = document.createElement("div");
        // ul_wrapper.id = "ul_wrapper";
        const ul = document.createElement("ul");
        for (let i = 0; i < 20; i++) {
            let li = document.createElement("li");
            ul.appendChild(li)
        }
        // ul_wrapper.appendChild(ul);
        contentDiv.appendChild(ul);
        bubblesExist = true;
    } else {
        if (answer) {
            liList[number].style.cssText = "background:#50C878;";
        } else {
            liList[number].style.cssText = "background:#C70039;";
        }
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

    const pagr = document.getElementById('content_div')
    const quizEnd = document.createElement('div')
    quizEnd.id = 'quizEnd'
    pagr.appendChild(quizEnd)


    const scoreResult = document.createElement('h2')
    const TryAgianButton = document.createElement('button')

    scoreResult.innerText = `Rezultatas ${output} surinkai tašku: ${score}/20`
    quizEnd.appendChild(scoreResult)

    TryAgianButton.classList.add("btn", "btn-success", "mb-1");
    TryAgianButton.innerText = 'Bandyti dar karta'

    quizEnd.appendChild(TryAgianButton)
    TryAgianButton.addEventListener('click', () => {
        quizEnd.remove()
        question.style.display = "block"
        play();
    })
}
