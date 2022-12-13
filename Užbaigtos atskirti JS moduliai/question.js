import questions from './data.js';

console.log(questions);

const mainDiv = document.getElementById('mainDiv');

const questionNumb = questions.length;

function QuestionScreen(){

    const start = document.createElement('div');
    start.setAttribute('id', 'questionScreen');
    start.className = "container-fluid";

    const begining1 = document.createElement('div');
    begining1.className = "row h-100";

    const begining2 = document.createElement('div');
    begining2.className = "col-6 col-sm-9 bg-white p-5 mx-auto mt-5 rounded";

    const tracker = document.createElement('p');
    tracker.textContent = "Klausimas " +questions[0].id +" iš " +questionNumb ;  // pvz kas galetu buti

    const hr = document.createElement('hr');

    const questionTXT = document.createElement('h2');
    questionTXT.className = "fw-bold mb-4";
    questionTXT.textContent = questions[0].question;  // pvz kas galetu buti

    const answer1 = document.createElement('button');
    answer1.className = "btn btn-success mb-1 w-100"; // note to self: add text-left if it has to align to the left
    answer1.textContent = questions[0].answers[0].text // ats. tekstas
    //answer1.setAtribute("id", "")

    const answer2 = document.createElement('button');
    answer2.className = "btn btn-success mb-1 w-100";
    answer2.textContent = questions[0].answers[1].text

    const answer3 = document.createElement('button');
    answer3.className = "btn btn-success mb-1 w-100";
    answer3.textContent = questions[0].answers[2].text   

    const answer4 = document.createElement('button');
    answer4.className = "btn btn-success mb-1 w-100";
    answer4.textContent = questions[0].answers[3].text

    const answer5 = document.createElement('button');
    answer5.className = "btn btn-success w-100";
    answer5.textContent = questions[0].answers[4].text


    mainDiv.appendChild(start);
    start.appendChild(begining1);
    begining1.appendChild(begining2);
    begining2.appendChild(tracker);
    begining2.appendChild(hr);
    begining2.appendChild(questionTXT);
    begining2.appendChild(answer1);
    begining2.appendChild(answer2);
    begining2.appendChild(answer3);
    begining2.appendChild(answer4);
    begining2.appendChild(answer5);
}

//QuestionScreen()