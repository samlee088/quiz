
/* creation of a start button  */
/* timer goes off when start button starts */
/* game ends when the timer or when the questions are done */
/* incorrect anser to a question subtracts time from the clock */
/* able to save my initials and my score */



/* start of the code */
/* creation of the button */
/* able to click the button */
/* when the webpage loads, grab the saved scores */
/* use css display none to make introduction go away and start quiz */


/* Quiz */
/* Timer creation once the quiz starts with start button */
/* timer goes down with incorrect asnwers */
/* questions are list? or are they arrays? */
/* question answers are a form of 'touch' */
/* depending on touch outcome, correct answer or incorrect answer */
/* answer will show correct or incorrect */
/* goes through next questions */
/* end of the quiz once the timer hits 0, or all of the questions are  */
/* once the quiz completes, then the wins and loss counters are set to 0 again */
/* questions are to sourced in the javascript, while the buttons are in the HTML */


/* Post Quiz */
/* Able to create list of dropdown of initials of scores */
/*quiz answers results are to be stored as variables */
/* the variables are then going to be able to be stored as local storage for the list */


var startButton = document.querySelector("button");
var timerDisplay = document.querySelector(".timerDisplay");


var correctCounter = 0;
var inCorrectCounter = 0;
var timeLeft= 1000;
var identify = 0;

const answersDisplay = document.querySelector(".results");
const questionFeed = document.querySelector(".quizDisplay");
const button1Display = document.querySelector(".b1");
const button2Display = document.querySelector(".b2");
const button3Display = document.querySelector(".b3");
const button4Display = document.querySelector(".b4");



let questionsSet = [
    {
        identify: 0,
        question : "What is the difference between let, var, const?",
        answers:[
            {optionA: "There is no difference", isCorrect: false},
            {optionB: "let can be declared locally but only used locally, must be delcared globally to be used globally. var can be delcared anywhere to be used anywhere. const is a variable that can be changed throughout the script.", isCorrect: false},
            {optionC: "let can be declared locally but only used locally, must be delcared globally to be used globally. var can be delcared anywhere to be used anywhere. const is a variable that cannot be changed later in the script.", isCorrect: true},
            {optionD: "let can be declared anywhere to be used globally. var can be declared locally but only used locally, must be delcared globally to be used globally.. const is a variable that cannot be changed later in the script.", isCorrect: false}
        ]

    } ,
   {
        identify: 1,
        question: "Which of the following statements regarding 'for' loops is true?",
        answers:
        [
            {optionA: "Any one of the 3 condition statement can be left out and does not require additional semi-colons, for example for ()", isCorrect: false},
            {optionB: "All three of the condition statements are always required for a 'for' function to work, for example for(i=0; i<3; i++) ", isCorrect: false},
            {optionC: "A maximum of 1 out of the three statements must be declared for a 'for' funcdtion to work, for example for(i=0; ;)", isCorrect: false},
            {optionD: "None of the condition statements can be filled out for a 'for' statement to work, but requires the semi-colons, for example for( ; ;)", isCorrect: true}
        ]
   }
]



startButton.addEventListener("click", function(event){
    startQuiz(0)
    startTimer()
    console.log(event.target.textContent)
   
});


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

    console.log(button1Display.value);
    console.log(button2Display.value);
    console.log(button3Display.value);
    console.log(button4Display.value);



    // var status = "";

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


   

    // if (status===true) {
    //     answersDisplay.textContent = "Correct";
    // }
    // else {
    //     answersDisplay.textContent = "Incorrect";
    //     timeLeft -= 100;
    // }

    // button1Display.setAttribute("data-correct",questionsSet[identify].answers[0].isCorrect);
    // button2Display.setAttribute("data-correct",questionsSet[identify].answers[1].isCorrect);
    // button3Display.setAttribute("data-correct",questionsSet[identify].answers[2].isCorrect);
    // button4Display.setAttribute("data-correct",questionsSet[identify].answers[3].isCorrect);

    // function click(event) {
    //     event.target.getattribute('data-correct');
    //    }
 

    // button1Display.addEventListener("click", function button() {
    //    click()
    //     if (click())  {
    //         answersDisplay.textContent = "Correct"
    //     }   
    //         else {
    //             answersDisplay.textContent = "Incorrect"
    //         }
    //     })
    // button2Display.addEventListener("click", function(event){
    //     console.log(event.target.attribute('data-correct'));
    //     if (event.target.getattribute('data-correct')) {
    //         answersDisplay.textContent = "Correct"
    //     }   
    //         else {
    //             answersDisplay.textContent = "Incorrect"
    //         }
    //     })
    // button3Display.addEventListener("click", function(event){
    //     console.log(event.target.attribute('data-correct'));
    //     if (event.target.getattribute('data-correct')) {
    //         answersDisplay.textContent = "Correct"
    //     }   
    //         else {
    //             answersDisplay.textContent = "Incorrect"
    //         }
    //     })
    // button4Display.addEventListener("click", function(event){
    //     console.log(event.target.attribute('data-correct'));
    //     if (event.target.getattribute('data-correct')) {
    //         answersDisplay.textContent = "Correct"
    //     }   
    //         else {
    //             answersDisplay.textContent = "Incorrect"
    //         }

    // })
}


function reRun() {
    if (identify < 2) {
   
    startQuiz(identify)
    }
    else {
        endGame()
    }
}

function correctAnswer() {
    answersDisplay.textContent = "Correct";
    correctCounter ++;
    identify ++
    reRun()
    
}

function inCorrectAnswer() {
    answersDisplay.textContent = "Incorrect";
    timeLeft -= 100;
    inCorrectCounter ++;
    identify ++
    reRun()
}


function endGame() {
questionFeed.textContent = "End of Game";
button1Display.style.display = "none";
button2Display.style.display = "none";
button3Display.style.display = "none";
button4Display.style.display = "none";
clearInterval(timer);
answersDisplay.textContent = correctCounter;
}




function startTimer
() {
   
    timerDisplay.textContent = timeLeft;
timer = setInterval(function(){
    timeLeft--;
    timerDisplay.textContent = timeLeft;

;
    if (timeLeft > 0) {


        
    } else if (timeLeft === 0) {
        clearInterval(timer);
    }
}
,1000)

}


