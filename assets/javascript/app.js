//Trivia game JS file -- week 5 homework

//global variables
var timerCount;
var  currentQuestionNdx = 0;
var trivia = [{
    question: "What is the Wizard's First Rule? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 1
    },{
    question: "1blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 2
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

var gameArrayChooser  = [];

///event listeners

$(document).ready(function(){
    $('#resetButton').on("click", function() {
      reset()
    }) //end #resetButton').on("click"
    $('#submitButton').on("click", function() {
      submit()
      countDownTimerObj.start();
    }) //end #submitButton').on("click"

  initGameArrayChooser();
  displayCurrentQuestion();
  }) //end of $(document).ready

//support functions
function reset(){
  alert("reset");
}
function submit(){
  alert("submit");
}
function initGameArrayChooser(){
  for (var i = 0; i < trivia.length; i++) {
    gameArrayChooser[i] = i;
  }
}

function newEventListeners(){
  $('.possibleAnswer').on("click", function(answerClicked) {
    alert("possibleAnswer).on(click")
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
gameArrayChooser.splice(currentQuestionNdx,1);
newEventListeners();
}// end displayCurrentQuestion()
///////////////////////////////////////////////////////////////////////////////
//solution if you put the whole thing in an object:
//$(document).ready(function(){
//  $('#stop').on('click', countDownTimerObj.stop);
//  $('#reset').on('click', countDownTimerObj.reset);
//  $('#start').on('click', countDownTimerObj.start);
//  $('#timerInputSubmit').on('click', countDownTimerObj.inputTime)
//});

var timerController;
var countDownTimerObj= {
  time:30,
  setTime:23,
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
    }
    else{
      $('#timerDisplay').html(time);
    }
  }
};