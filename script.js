import questions from './data.js'


console.log(questions)

function displayEndScore(score) {
    let output = 'Invalid score'

    if (score <= 5) {
        output = 'Very bad'
    }
    else if (score <= 9) {
        output = 'bad'
    }
    else if (score <= 15) {
        output = 'Pretty good'
    }
    else if (score <= 19) {
        output = 'Good'
    }
    else {
        output = 'Perfect'
    }

    console.log(output)
    
    //To do: display as div
}

