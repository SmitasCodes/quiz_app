import questions from './data.js'

let score = 0;
let QuestionNumber = 0;
let bubblesExist = false;

const startBtn = document.querySelector("#start-btn");
const welcomeText = document.querySelector("#welcome-text")

startBtn.addEventListener("click",()=>{
    welcomeText.style.cssText = "display:none;"
    startBtn.style.cssText = "display:none;"
    loadQuiz();
})



function loadQuiz() {
    bubbles();
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
            bubbles(answer.isCorrect,QuestionNumber);
            QuestionNumber += 1;
            
            if (answer.isCorrect === true) {
                score += 1;
            } 

            if (QuestionNumber == questions.length) {
                alert(`Jusu Taškai: ${score}`);
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

function bubbles(answer,number){
    const contentDiv = document.querySelector("#content_div");
    if(bubblesExist!=true){
        const ul = document.createElement("ul");
        for(let i = 0; i<20;i++){
            let li = document.createElement("li");
            ul.appendChild(li)
        }
        contentDiv.appendChild(ul); 
        bubblesExist = true;
    } else{
        let liList = document.querySelectorAll("li")
        if(answer){
            liList[number].style.cssText ="background:#50C878;";
        } else {
            liList[number].style.cssText ="background:#C70039;";
        }
    }
}

// function displayEndScore(score) {
//     let output = 'Invalid score'
    
//     switch (true) {
//         case score <= 5:
//             output = 'Very bad'
//             break
//         case score <= 9:
//             output = 'Bad'
//             break
//         case score <= 15:
//             output = 'Pretty good'
//             break
//         case score <= 19:
//             output = 'Good'
//             break
//         case score >= 20:
//             output = 'Perfect'
//             break
//     }

//     console.log(output)
    
    //To do: display as div
// }

// console.log(output)



// ul.setAttribute("id","bubble_list");
    // const li_elements = ["li1","li2","li3","li4","li5","li6","li7","li8","li9","li10","li11","li12","li13","li14","li15","li16","li17","li18","li19","li20"]
    // for(let element in li_elements){
    // }
