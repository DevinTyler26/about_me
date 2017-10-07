'use strict';

var userPoints = 0;

console.log('Game On');

var user = prompt('Welcome to my favorite guessing game! What is your name?');

while (!user){
  user = prompt('What is your name? Really, we need your name, or you cant play!');
}

if (user.toLowerCase() != 'devin'){
  alert('Too bad you are not Devin');
}

alert('Hi ' + user + '! I am so glad you want to play my game!');

//Stretch Goal 1
var myQuestions = [
  '... Is Devin\'s favorite food Chipotle? Type yes or no',
  'Is Devin\'s favorite car brand Ford?',
  'Did Devin go to a 4 year college before Code Fellows?',
  'Did Devin grow up in Issaquah Washington?',
  'Does Devin currently work for a Pediatric office?'
];
var correctAnswers = ['Yep yep yep!\nYou now have ', 'You\'re right! He is not a big fan of Ford\'s but he does love Audi!\nYou now have ', 'That\'s correct! He attended Seattle Central Community College for an AA in Commercial Photography!\nYou now have ', 'That\'s correct! He works at Allegro Pediatrics in Bellevue.\nYou now have '];
var wrongAnswers = ['Wrong! Actually, I LOVE mexican food!!\nYou now have ', 'Uh oh... his favorite car brand is actually Audi.\nYou now have ', 'Nope! But he did attended Seattle Central Community College for an AA in Commercial Photography!\nYou now have ', 'Aw man, if you would have said yes, you would have gotten it right.\nYou now have ', 'I was really rooting for you on that one :( He does work for a Pediatric office named Allegro Pediatrics.\nYou now have '];
var myResponses = ['yes', 'no', 'no', 'yes', 'yes'];
var myResponses2 = ['y', 'n', 'n', 'y', 'y'];
var pointsText = ' point(s)!';
var youNowHave = ' You now have: ';
var userAnswered = 'The user answered: ';
var afterQuestion = 'After question ';
var theUserHas = ', the user has ';
var userNoResponse = 'You didn\'t give a yes or no answer. Please try again.';

//QUESTION 1

function runAllQuestions(){
  for(var i = 0; i < 5; i++){
    var answer = prompt(myQuestions[i]).toLowerCase();
    console.log(userAnswered + answer);
    if (answer === myResponses[i] || answer === myResponses2[i]){//checks if answer is yes
      userPoints++;
      alert(correctAnswers[i] + youNowHave + userPoints + pointsText);
      console.log('The answer is: ' + correctAnswers[i] + userAnswered + myResponses[i] + theUserHas + userPoints + pointsText);
    } else {
      alert(wrongAnswers[i] + youNowHave + userPoints + pointsText);
      console.log('The answer is not: ' + wrongAnswers[i] + userAnswered + myResponses[i] + theUserHas + userPoints + pointsText);
    }
  }
}
runAllQuestions();

//QUESTION 6
function question_six() {
  var attempts = 4;
  var answer6 = prompt('What year did Devin Graduate?\nYou will have 4 attempts');
  while(attempts > 1){
    if (answer6 < 2009){
      attempts--;
      answer6 = prompt('Sorry, that is too low! Guess again.\nWhat year did Devin Graduate?\nYou have ' + attempts + '  attempts left');
      console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
    }else if (answer6 > 2009) {
      attempts--;
      answer6 = prompt('Sorry, that is too high! Guess again.\nWhat year did Devin Graduate?\nYou have ' + attempts + ' attempts left');
      console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
    }else{
      userPoints++;
      alert('Correct! He graduated from Skyline High School in 2009\nYou now have ' + userPoints + pointsText);
      break;
    }
  }
  console.log(afterQuestion + theUserHas + userPoints + pointsText);
}
question_six();

//QUESTION 7
function question_seven() {
  var cars = ['bmw' , 'porsche' , 'vw' , 'buggati' , 'lamborghini'];
  var myCars = cars.join('\n');
  var flag = false;
  var attemptsCars = 6;
  var answer7 = prompt('Can you guess another car brand that is my favorite besides Audi?').toLowerCase();
  console.log('The user answered question: 7');

  while (!flag && attemptsCars > 0) {
    for (var i = 0; i < cars.length; i++) {
      if (answer7 === cars[i]) {
        flag = true;
      }
    }
    if (flag === true) {
      userPoints++;
      alert('Correct! ' + answer7 + ' is on my list of favorite car brands!');
      console.log('The user guessed ' + answer7 + ' and has ' + userPoints);
    } else {
      attemptsCars--;
      answer7 = prompt('Sorry, ' + answer7 + ' is not on my list of favorite car brands!\nYou have ' + attemptsCars + '  attempts left');
      console.log('The user guessed ' + answer7 + ' and has ' + (attemptsCars) + ' attempts left');
    }
  }
  alert('Here are my favorite car brands:\n' + myCars + '\n' + user + ', your final score is ' + userPoints + '/7 points');
  console.log('After question 7 the user has ' + userPoints + pointsText);
}
question_seven();
