var but01 = document.querySelector(".viewhs");
var timer = document.querySelector("#timer");
var main = document.querySelector("main");
var mainPage = document.querySelector(".mainpagep");
var startButt = document.querySelector("#start");
var heah2 = document.querySelector(".mh2");
var result = document.querySelector("#result");
var resultDiv = document.querySelector(".results");
let hr = document.createElement("hr");
let newh3 = document.createElement("h3");
resultDiv.appendChild(hr);
resultDiv.appendChild(newh3);

function displayResult(isCorrect) {
    if (isCorrect) {
        newh3.textContent = "Correct";
    } else {
        newh3.textContent = "Incorrect";
    }
}

var resultSI = "";
var hightScoresP = "";
var timer1;
var timerAfterClick = 75;
var iCurrentQuestion = 0;

var questions = [
    {
        title: "Commonly used data types DO NOT include :",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if/else statement is enclosed within --- .",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets",
    },
    {
        title: "Arrays in JavaScript can be used to store --- .",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "String values must be enclosed within --- when being assigned to variables",
        choices: ["commas", "curly bracelets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title: "A very useful tool used during developing and debugging for printing content to the debugger is",
        choices: ["Java Script", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    }
];

startButt.addEventListener("click", function (event) {
    timer1 = setInterval(function () {
        timerAfterClick--;
        timer.textContent = "time: " + timerAfterClick;
        if (timerAfterClick === 0) {
            clearInterval(timer1);
        }
    }, 1000);

    startButt.style.display = 'none';

    nextQuestion();
});

function nextQuestion() {
    mainPage.innerHTML = "";
    var currentQuestion = questions[iCurrentQuestion];
    heah2.textContent = currentQuestion.title;
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var buttonE = document.createElement("button");
        buttonE.setAttribute('class', 'choice');
        buttonE.textContent = currentQuestion.choices[i];
        mainPage.appendChild(buttonE);
    }

    var answerE = document.createElement("p");
    answerE.textContent = "";
    mainPage.appendChild(answerE);
    result = document.querySelector("#result");

}

mainPage.addEventListener("click", function (event) {
    var currentQuestion = questions[iCurrentQuestion];
    var timernew = 0;
    event.preventDefault();

    if (event.target.matches('.choice')) {
        if (event.target.textContent === currentQuestion.answer) {
            timernew = timerAfterClick + 10;
            timer.textContent = "time: " + timernew;
            displayResult(true);
        } else {
            timernew = timerAfterClick - 10;
            timer.textContent = "time: " + timernew;
            displayResult(false);
        }

        iCurrentQuestion++;
        if (iCurrentQuestion < questions.length) {
            timerAfterClick = timernew;
            nextQuestion();
        } else {
            main.textContent = "";
            clearInterval(timer1);
            timer.textContent = "time: " + timerAfterClick;
            submitNew();
        }
    }

});

let container = document.createElement("div");
let newsubmit = document.createElement("button");
let input = document.createElement("input");

function submitNew() {

    let NewH2 = document.createElement("h2");
    let NewP = document.createElement("p");
    let NewPe = document.createElement("p");


    console.log(newsubmit);

    NewH2.textContent = "All Done";
    NewP.textContent = "Your final score is " + timerAfterClick;
    NewPe.textContent = "enter your Initials";
    input.textContent = input.value

    newsubmit.textContent = "Submit";

    container.appendChild(NewH2);
    container.appendChild(NewP);
    container.appendChild(NewPe);
    container.appendChild(input);
    container.appendChild(newsubmit);

    document.body.appendChild(container);

};

newsubmit.addEventListener("click", function (event) {
    container.innerHTML = "";
    let containernew = document.createElement("div");
    let newEsth2 = document.createElement("h2");
    let nwestdp = document.createElement("p");

    input11 = input.value;
    let allToBe = [input11, " - ", timerAfterClick];

    newEsth2.textContent = "High Score";
    nwestdp.textContent = allToBe.join("");

    containernew.appendChild(newEsth2);
    containernew.appendChild(nwestdp);

    document.body.appendChild(containernew);

    localStorage.setItem("allToBe", JSON.stringify(allToBe));

    console.log(allToBe);
});


but01.addEventListener("click", function handleButtonClick(event) {
    but01.removeEventListener("click", handleButtonClick);
    
    mainPage.innerHTML = "";
    startButt.style.display = 'none'
    heah2.textContent = "";

    let containernewE = document.createElement("div");
    let newEsth2 = document.createElement("h2");
    let nwestdp = document.createElement("p");

    newEsth2.textContent = "High Score"
    nwestdp.textContent = JSON.parse(localStorage.getItem('allToBe'));

    containernewE.appendChild(newEsth2);
    containernewE.appendChild(nwestdp);

    document.body.appendChild(containernewE);
});