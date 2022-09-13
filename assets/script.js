

/* Variable declaration section */
var startButton = document.querySelector("#buttonStart");
var timerDisplay = document.querySelector(".timerDisplay");

var correctCounter;
var inCorrectCounter;
var timeLeft;
var identify;
var highScores=[];


const answersDisplay = document.querySelector(".results");
const questionFeed = document.querySelector(".quizDisplay");
const highScoreDisplay = document.querySelector(".highScoreInput");
const highScoreButtonDisplay = document.querySelector(".highScoreButton");
const highScoreSubmit = document.querySelector(".highScore");
const highScoreType = document.querySelector(".highScoreInput");
const highScoresListDisplay = document.querySelector(".highScoresList");
const introductionDisplay = document.querySelector(".introductionDisplaytext");


const button1Display = document.querySelector(".b1");
const button2Display = document.querySelector(".b2");
const button3Display = document.querySelector(".b3");
const button4Display = document.querySelector(".b4");
const goBackButtonDisplay = document.querySelector (".goBack");
const scoreResetButtonDisplay = document.querySelector (".scoreReset");



/* These are the questions and answers to the quiz put into an array format. */

let questionsSet = [
    {
        identify: 0,
        question : "Which one of the following statements about var, let and const are true?",
        answers:[
            {optionA: "There is no difference", isCorrect: false},
            {optionB: "let does not have block scope and can be accessed from outside the block it was declared in. var has block scope and cannot be accessed from outside the block it was declared in. const is a variable that can be changed throughout the script.", isCorrect: false},
            {optionC: "let does have block scope and cannot be accessed from outside the block it was declared in. var does not have block scope can be accessed from outside the block it was declared in. const does have block scope, and additionally is a variable that cannot be changed later in the script.", isCorrect: true},
            {optionD: "let does have block scope and cannot be accessed from outside the block it was declared in. var does not have block scope can be accessed from outside the block it was declared in. const does not have block scope, and additionally is a variable that cannot be changed later in the script.", isCorrect: false}
        ]

    } ,
   {
        identify: 1,
        question: "Which of the following statements regarding for loops is true?",
        answers:
        [
            {optionA: "Any one of the 3 condition statement can be left out and does not require additional semi-colons, for example for ()", isCorrect: false},
            {optionB: "All three of the condition statements are always required for a 'for' function to work, for example for(i=0; i<3; i++) ", isCorrect: false},
            {optionC: "A maximum of 1 out of the three statements must be declared for a 'for' funcdtion to work, for example for(i=0; ;)", isCorrect: false},
            {optionD: "None of the condition statements can be filled out for a 'for' statement to work, but requires the semi-colons, for example for( ; ;)", isCorrect: true}
        ]
   },

{
    identify: 2,
    question: "Which one of the statements regarded querySelectorAll and getElementsByClassName is true?",
    answers:
    [
        {optionA: "querySelectorAll makes it possible to select both by element name and by class name. getElementsByClassName only allows selecting by class name", isCorrect: true},
        {optionB: "There are no differences between the 2 options ", isCorrect: false},
        {optionC: "querySelectorAll only allows selecting by class name. getElementsByClassName makes it possible to select both by element name and by class name. ", isCorrect: false},
        {optionD: "querySelectorAll only searches for matches in CSS type files.getElementsByClassName allows searches on HTML and CSS files only.", isCorrect: false}
    ]
}
]


/* actions for the start button to initiate the game. includes resetting all of the 'base' variables to initial values, starting the timer, clearing out the introduction messages and displaying the 1st question. */
startButton.addEventListener("click", function(event){
    startQuiz(0)
    startTimer()

    identify = 0;
    timeLeft = 60;
    correctCounter = 0;
    inCorrectCounter = 0;

    answersDisplay.style.display = 'block';
    timerDisplay.textContent = timeLeft;
    document.querySelector('.quizButtons').style.display = 'block';
    document.querySelector('.introduction').style.display = 'none';
    document.querySelector('#buttonStart').style.display = 'none';
    document.querySelector('.timer h2').style.display='block';
    questionFeed.style.display = 'block';
    var introArray = document.getElementsByClassName("introductionRules");
    var i;
    for (i=0; i<introArray.length; i++) {
        introArray[i].style.display = "none";
    }
});

/* This is the function that sets the action items for the  quiz itself */
function startQuiz(identify) {

    questionFeed.textContent = questionsSet[identify].question;

    button1Display.textContent = questionsSet[identify].answers[0].optionA;
    button2Display.textContent = questionsSet[identify].answers[1].optionB;
    button3Display.textContent = questionsSet[identify].answers[2].optionC;
    button4Display.textContent = questionsSet[identify].answers[3].optionD;

    button1Display.value = questionsSet[identify].answers[0].isCorrect;
    button2Display.value = questionsSet[identify].answers[1].isCorrect;
    button3Display.value = questionsSet[identify].answers[2].isCorrect;
    button4Display.value = questionsSet[identify].answers[3].isCorrect;
}

button1Display.addEventListener("click", function evaluate () {
        
    if (questionsSet[identify].answers[0].isCorrect===true) {
        correctAnswer();
    }
    else {
        inCorrectAnswer();
    }
} )

button2Display.addEventListener("click", function evaluate () {
  
    if (questionsSet[identify].answers[1].isCorrect===true) {
        correctAnswer();
    }
    else {
        inCorrectAnswer();
    }
} )


button3Display.addEventListener("click", function evaluate () {
   
    if (questionsSet[identify].answers[2].isCorrect===true) {
        correctAnswer();
    }
    else {
        inCorrectAnswer();
    }
} )

button4Display.addEventListener("click", function evaluate () {
   
    if (questionsSet[identify].answers[3].isCorrect===true) {
        correctAnswer();
    }
    else {
        inCorrectAnswer();
    }
} )


/* Function that loops through the array of quiz questions and asnwers */
function reRun() {
    if (identify < 3) {
   
    startQuiz(identify)
    }
    else {
        endGame()
    }
}

/* Functions that define results depending on the action items for correct of incorrect answers of the quiz */
function correctAnswer() {
    answersDisplay.textContent = "Correct";
    correctCounter ++;
    identify ++
    reRun()
    
}

function inCorrectAnswer() {
    answersDisplay.textContent = "Incorrect";
    timeLeft -= 10;
    inCorrectCounter ++;
    identify ++
    reRun()
}

/* Function defines that applies once the quiz ends with either the end of the questions, or the time limit expiring */
function endGame() {
questionFeed.textContent = "End of Game";
document.querySelector('.quizButtons').style.display = 'none';
clearInterval(timer);
answersDisplay.style.display = 'block';
document.querySelector('.resultsText').style.display = 'block';
document.querySelector('.resultsText').textContent = "The Final Score is:  " + correctCounter;
highScoreDisplay.style.display='block';
highScoreButtonDisplay.style.display='block';
highScoreSubmit.style.display = 'block';
document.querySelector('.timer h2').style.display='none';
timerDisplay.style.display = 'none';

}

/* Function for when the high score submit button is taken by the user */
highScoreSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    highScoresListDisplay.textContent = "";
    var highScoreText = highScoreType.value.trim();

    if(highScoreText==="") {
        return;
    }

    highScores.push(highScoreText + " - " + correctCounter);
    highScoreType.value='';

    storeHighScores();

    goBackButtonDisplay.style.display = 'block';
    scoreResetButtonDisplay.style.display = 'block';
    highScoresListDisplay.style.display = 'block';
    questionFeed.style.display = 'none';
    answersDisplay.style.display = 'none';
    highScoreDisplay.style.display='none';
    highScoreButtonDisplay.style.display='none';
    highScoreSubmit.style.display = 'none';
    document.querySelector('.resultsText').style.display = 'none'

})

/* Function to store the high score locally, and additionally to display the high scores on screen */
function storeHighScores () {
    localStorage.setItem("highScores", JSON.stringify(highScores))

    for (var x=0; x < highScores.length; x++) {
        var highScore = highScores[x];

        var li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index",x);

        highScoresListDisplay.appendChild(li);
    }
}

/* This is the function that will run to grab the high scores that are stored locally */
function highScoresGrab() {
var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
if (storedHighScores !== null) {
    highScores = storedHighScores;
}
}

highScoresGrab()



/* functions to get back to the original homescreen of the quiz once the end of the quiz is reached */
goBackButtonDisplay.addEventListener("click", function() {
    document.querySelector('.introduction').style.display = 'block';

    var introArray = document.getElementsByClassName("introductionRules");
    var i;
    for (i=0; i<introArray.length; i++) {
       introArray[i].style.display = "block";
    }
    answersDisplay.textContent = " ";
    questionFeed.style.display = 'none';
    goBackButtonDisplay.style.display = 'none';
    scoreResetButtonDisplay.style.display = 'none';
    highScoresListDisplay.style.display = 'none';
    document.querySelector('#buttonStart').style.display = 'block';
})

scoreResetButtonDisplay.addEventListener("click", function() {
    highScores=[]
    questionFeed.style.display = 'block';
    questionFeed.textContent = "High Scores Reset";
    highScoresListDisplay.textContent = "";
})

/* Function to start the game timer, display game clock, and end the game once the timer reaches 0 or less. */
function startTimer() {
    
    timerDisplay.style.display = 'block';

    timer = setInterval(function(){
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}
,1000)
}



