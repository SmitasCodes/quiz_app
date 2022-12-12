import questions from './data.js'

const mainDiv = document.querySelector("#main")


// function print_questions_number(){
//     for(let i in questions){
//         const my_p = document.createElement("p")
//         my_p.innerText = `Klausimas ${questions[i].id} iš ${questions.length}`
//         mainDiv.appendChild(my_p)
//     }    
// }

// print_questions_number()




// questions.forEach(i => {
//     for(let j=0;j<i.answers.length;j++){
//         const my_answers = document.createElement("button")
//         my_answers.innerText = i.answers[j].text
//         mainDiv.appendChild(my_answers)
//     }        
// })

// console.log(questions)