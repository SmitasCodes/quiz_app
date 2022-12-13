import questions from './data.js'

console.log(questions)

const mainDiv = document.getElementById('mainDiv')

const questionNumb = questions.length

console.log(questionNumb)


function startScreen(){
    const start = document.createElement('div')
    start.setAttribute('id', 'Start')
    start.className = "container-fluid"

    const begining1 = document.createElement('div')
    begining1.className = "row"

    const begining2 = document.createElement('div')
    begining2.className = "col-5 col-sm-8 bg-white p-5 mx-auto mt-5 rounded"

    const name = document.createElement('h2');
    name.textContent = "Projekto vardas čia"             //Vardas čia
    name.className = "display-5 fw-bold"

    const descrption = document.createElement('p');
    descrption.textContent = "Iš viso klausimų: "+questionNumb;

    const startBTN = document.createElement('button');
    startBTN.textContent = "Pradėti";
    startBTN.className = "btn btn-success"
    //startBTN.setAtribute("id", "")

    mainDiv.appendChild(start)
    start.appendChild(begining1)
    begining1.appendChild(begining2)
    begining2.appendChild(name)
    begining2.appendChild(descrption)
    begining2.appendChild(startBTN)
}

//startScreen()