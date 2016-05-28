//Trivia game JS file -- week 5 homework

//global variables
var  timerCount;
var  currentQuestionNdx = 0;
var  numberOfWins = 0;
var  numberOfLoses = 0;
var  numberUnAnswered = 0;
var trivia = [{
    question: "What is the Wizard's First Rule? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
    },{
    question: "1blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: "Do or do not, there is no try"
    },{
    question: "2blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 3
    },{
    question: "3blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 4
    },{
    question: "4blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 5
    },{
    question: "5blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    },{
    question: "6blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 6
    },{
    question: "7blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 7
    },{
    question: "8blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 8
    },{
    question: "9blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 9
    },{
    question: "10blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 10
    }];


///event listeners

$(document).ready(function(){
    $('#resetButton').on("click", function() {
      reset()
    }) //end #resetButton').on("click"
  displayCurrentQuestion();
  }) //end of $(document).ready

//support functions
function resart(){
  numberOfWins = 0;
  numberOfLoses = 0;
  numberUnAnswered = 0;
  currentQuestionNdx = 0;
}

function initGameArrayChooser(){
  for (var i = 0; i < trivia.length; i++) {
    gameArrayChooser[i] = i;
  }
}

function newEventListeners(){
  $('.possibleAnswer').on("click", function() {
    checkClickedAnswer(this.textContent);
    }) //end possibleAnswer').on("click"
}// newEventListeners()

function displayCurrentQuestion(){

  var   currentQuestion = trivia[currentQuestionNdx].question;
  //output the current question to the DOM
  $(".theCurrentQuestion").text(currentQuestion);
  //get rid of any answers from last game
  $(".answersUnOrderedList").empty();
  var answer;
  var theList = $(".answersUnOrderedList")

  for (var i = 0; i < trivia[currentQuestionNdx].possibleAnswers.length; i++) {
    answer = trivia[currentQuestionNdx].possibleAnswers[i];
    $("<li class='possibleAnswer'> " + answer + "</li>").appendTo(theList)
  }
newEventListeners();
countDownTimerObj.start();
}// end displayCurrentQuestion()

//count down timer section
var timerController;
var countDownTimerObj= {
  time:30,
  setTime:30,
  reset: function(){
    countDownTimerObj.time = countDownTimerObj.setTime;
    countDownTimerObj.updateDisplay(countDownTimerObj.time);
  },
  start: function(){
    timerController = setInterval(countDownTimerObj.count, 1000);
  },
  stop: function(){
    clearInterval(timerController);
  },
  count: function(){
    countDownTimerObj.time--;
    countDownTimerObj.updateDisplay(countDownTimerObj.time);
    //$('#display').html(countDownTimerObj.time);
  },
  inputTime: function(){
    // This line of code will grab the input from the textbox
    countDownTimerObj.setTime = $('#timeInput').val().trim();
    countDownTimerObj.time =countDownTimerObj.setTime;
    countDownTimerObj.updateDisplay(countDownTimerObj.time);
    // We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
    return false;
  },
  updateDisplay: function(time){
    if (time < 7) {
      $('#timerDisplay').addClass('shortTime');
    }
    else{
      $('#timerDisplay').removeClass('shortTime');
    }
    if (time<=0) {
      $('#timerDisplay').html(time);
      this.stop();
      //if time runs out check agianst ""
      checkClickedAnswer("");
    }
    else{
      $('#timerDisplay').html(time);
    }
  }
}; //end count down timer section

//check clicked answer
function checkClickedAnswer(answerClicked){
  //added .trim() to fix leading spaces problem!!!
  if(trivia[currentQuestionNdx].correctAnswer === answerClicked.trim()){
    countDownTimerObj.stop();
    numberOfWins++;
    $('#winLose').addClass('winner');
    $('#winLose').html('&#10004');
    var resetWinLose = setTimeout(resetWL, 1500);
  }
  else if (answerClicked === "") {
    //unanswered case
    numberUnAnswered++;
    countDownTimerObj.stop();
    $('#winLose').addClass('loser');
    $('#winLose').html('X');
    var resetWinLose = setTimeout(resetWL, 1500);
  }
  else{
    numberOfLoses++;
    countDownTimerObj.stop();
    $('#winLose').addClass('loser');
    $('#winLose').html('X');
    var resetWinLose = setTimeout(resetWL, 1500);
  }
}// end check clicked answer

function resetWL(){
  $('#winLose').removeClass('winner loser');
  $('#winLose').html('');
  countDownTimerObj.reset();
  currentQuestionNdx++;
  if (currentQuestionNdx> trivia.length) {
    //output stats and wait for restart button
  }
  else{
    displayCurrentQuestion();
  }

}
