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
    const contentDiv = document.querySelector("#bubbles");
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
    startConfetti() /*Confetti funkcijos iskvietimas*/ 

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

        let confetti = document.getElementById('confetti')
        confetti.remove()
        play();
    })
}



function startConfetti() {
  
  var random = Math.random
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];

  var particles = 10
    , spread = 40
    , sizeMin = 3
    , sizeMax = 12 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;

  var colorThemes = [
    function() {
      return color(200 * random()|0, 200 * random()|0, 200 * random()|0);
    }, function() {
      var black = 200 * random()|0; return color(200, black, black);
    }, function() {
      var black = 200 * random()|0; return color(black, 200, black);
    }, function() {
      var black = 200 * random()|0; return color(black, black, 200);
    }, function() {
      return color(200, 100, 200 * random()|0);
    }, function() {
      return color(200 * random()|0, 200, 200);
    }, function() {
      var black = 256 * random()|0; return color(black, black, black);
    }, function() {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function() {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function() {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  
  function interpolation(a, b, t) {
    return (1-cos(PI*t))/2 * (b-a) + a;
  }

  
  var radius = 1/eccentricity, radius2 = radius+radius;
  function createPoisson() {
    
    var domain = [radius, 1-radius], measure = 1-radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;

      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i+1], interval = b-a;
        if (dart < measure+interval) {
          spline.push(dart += a-measure);
          break;
        }
        measure += interval;
      }
      c = dart-radius, d = dart+radius;

      for (i = domain.length-1; i > 0; i -= 2) {
        l = i-1, a = domain[l], b = domain[i];

        if (a >= c && a < d)
          if (b > d) domain[l] = d;
          else domain.splice(l, 2);
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; 
          else domain.splice(i, 0, c, d);
      }

      
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i+1]-domain[i];
    }

    return spline.sort();
  }

  
  var container = document.createElement('div');
  container.id = 'confetti'
  container.style.position = 'fixed';
  container.style.top      = '0';
  container.style.left     = '0';
  container.style.width    = '100%';
  container.style.height   = '0';
  container.style.overflow = 'visible';
  container.style.zIndex   = '9999';

  
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width  = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width  = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top  = this.y + 'px';

    
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length-1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function(height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi-this.splineX[i]) / (this.splineX[j]-this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top  = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height+deviation;
    };
  }

  function poof() {
    if (!frame) {
      
      document.body.appendChild(container);

      var theme = colorThemes[0]
        , count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);
      
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;

        for (var i = confetti.length-1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }

        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);

        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }

  poof();
};
