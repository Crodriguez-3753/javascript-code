// variables to keep track of quiz
var currentQuestionsIndex = 0;
var time = questions.length * 15;
var timerId;

//variables to refrence DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialEl = document.getElementById("initial");
var feedbackEl = document.getElementById("feedback");

//sound effects
var sfxRight = new Audio("assetes/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
    //hide start screen
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "start hide");

    // un-hide questions section
    questionsEl.setAttribute("class", "");
    //start timer
    timerId = setInterval(function(){
        clockTick();
    }, 1000);
    //show starting time
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    //get current question object from array
    var currentQuestion = questions[currentQuestionsIndex];
    //update title with current question
    questionsEl.children[0].textContent = currentQuestion.setInterval;
    //clear out any old question choices
    while (choicesEl.hasChildNodes()){
        choicesEl.removeChild(choicesEl,lastChild);
    }

    //loop choices
    for(var i = 0; i < currentQuestion.choicesEl.length; i++) {
    
    // create new button for each choice
    var choiceButton = document.createElement("button");
    
    //display on the page
    choicesEl.appendChild(choiceButton)
    }

        // click event listener to each choice
    choicesEl.children[0].addEventListener("click", function(event){
        questionClick(choicesEl.children[0]);
    });
    choicesEl.children[1].addEventListener("click", function(event){
        questionClick(choicesEl.children[1]);
    });
    choicesEl.children[2].addEventListener("click", function(event){
        questionClick(choicesEl.children[2]);
    });
    choicesEl.children[3].addEventListener("click", function(event){
        questionClick(choicesEl.children[3]);
    });
}

function questionClick(answerChoice){
    if(answerChoice.textContent != question[currentQuestionsIndex].answer){
        // reduce time if wrong
        time -= 10;
        //display new time on page
        feedbackEl.textContent = "Incorrect";
        // play "wrong" sound effect 
        sfxWrong.play();
    }
    else{
        //play "right" sound effect
        feedbackEl.textContent = "Correct";
        sfxRight.play();
    }
    
    //flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback hide");
    setInterval(function(){
        feedbackEl.setAttribute("class", "feedback hide");
    },500);


}