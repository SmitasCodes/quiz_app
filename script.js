import questions from './data.js'


console.log(questions)

function displayEndScore(score) {
    let output = 'Invalid score'
    
    switch (true) {
        case score <= 5:
            output = 'Very bad'
            break
        case score <= 9:
            output = 'Bad'
            break
        case score <= 15:
            output = 'Pretty good'
            break
        case score <= 19:
            output = 'Good'
            break
        case score >= 20:
            output = 'Perfect'
            break
    }

    console.log(output)
    
    //To do: display as div
}
