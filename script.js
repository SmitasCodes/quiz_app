import questions from './data.js'

let score = 0;
let QuestionNumber = 0;

function loadQuiz() {

    const CurrentQuestion = questions[QuestionNumber]

    const quizQuestionElement = document.getElementById("question-txt");
    const quizAnswersElement = document.getElementById("quiz-answers");
    const QuestionNum = document.getElementById("question-numb")

    quizQuestionElement.innerHTML = CurrentQuestion.question;
    quizQuestionElement.classList.add("fw-bold");

    quizAnswersElement.innerHTML = "";

        for(const answer of CurrentQuestion.answers){
            QuestionNum.innerHTML = `Klausimas ${QuestionNumber+1} iš ${questions.length}`
            const button = document.createElement("button");
            const lineBreak = document.createElement('br');
            
            button.classList.add("btn", "btn-success", "mb-1");
            button.innerText = answer.text;

            button.addEventListener("click", () => {
                if(answer.isCorrect === true){
                    score += 1;
                }

                QuestionNumber += 1;

                if(QuestionNumber == questions.length){
                    alert(`Jusu Taškai: ${score}`);
                    QuestionNumber = -1;
                    score = 0;
                } else{
                    loadQuiz();
                }
            })
        quizAnswersElement.appendChild(button);
        quizAnswersElement.appendChild(lineBreak);
    }
    
  }    

loadQuiz()

// console.log(questions)