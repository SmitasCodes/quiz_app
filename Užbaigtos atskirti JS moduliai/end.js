import questions from './data.js';

console.log(questions);

const mainDiv = document.getElementById('mainDiv');

function EndScreen(){

    const start = document.createElement('div')
    start.setAttribute('id', 'darbas')
    start.className = "container-fluid"

    const begining1 = document.createElement('div')
    begining1.className = "row"

    const begining2 = document.createElement('div')
    begining2.className = "col-5 col-sm-8 bg-white p-5 mx-auto mt-5 rounded"

    const ResultsDesc = document.createElement('h2');
    ResultsDesc.textContent = "Frazės"                 //Dariaus frazės      
    ResultsDesc.className = "display-5 fw-bold"

    const hr = document.createElement('hr')

    const points = document.createElement('p');
    points.textContent = "16 is 20 Klausimu";          //Taškai

    mainDiv.appendChild(start)
    start.appendChild(begining1)
    begining1.appendChild(begining2)
    begining2.appendChild(ResultsDesc)
    begining2.appendChild(hr)
    begining2.appendChild(points)

}

//EndScreen()