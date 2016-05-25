//Trivia game JS file -- week 5 homework

//global variables
var  currentQuestionNdx = 0;
var trivia = [{
    question: "What is the Wizard's First Rule? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 1
    },{
    question: "blah blah? ",
    possibleAnswers: ["Never let them see you be afraid" ,
                      "People are stupid. They will beleive a lie because they want it to be true or are afraid it might be true",
                      "Only an ordained Wizard has the power to not be corrupted by the power",
                      "Do or do not, there is no try" ],
    correctAnswer: 0
    }]

///event listeners
$(document).ready(function(){
    displayCurrentQuestion();
  }) //end of $(document).ready

//support functions
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
newEventListeners();
}// end displayCurrentQuestion()
