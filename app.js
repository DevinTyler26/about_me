'use strict';
var user = prompt('Welcome to my favorite guessing game! What is your name?');

while (!user){
  user = prompt('What is your name? Really, we need your name, or you cant play!');
}

if (user.toLowerCase() != 'devin'){
  alert('Too bad you are not Devin');
}
var question = 0;

console.log('User name is: ' + user);

var questions = [
  'Soooo ' + user + '... Is Devin\'s favorite food Chipotle? Type yes or no',
  'Is Devin\'s favorite car brand Ford?',
  'Did Devin go to a 4 year college before Code Fellows?',
  'Did Devin grow up in Issaquah Washington?',
  'Does Devin currently work for a Pediatric office?'
];
var answers = [
  'Yep yep yep!',
  'You\'re right! He is not a big fan of Ford\'s but he does love Audi!',
  'That\'s correct! He attended Seattle Central Community College for an AA in Commercial Photography!',
  'DING DING DING, that is right!',
  'That\'s correct! He works at Allegro Pediatrics in Bellevue.'
];
var wrongAnswers = [
  'Wrong! Actually, I LOVE mexican food!!',
  'Uh oh... his favorite car brand is actually Audi.',
  'Nope! But he did attended Seattle Central Community College for an AA in Commercial Photography!',
  'Aw man, if you would have said yes, you would have gotten it right.',
  'I was really rooting for you on that one :( He does work for a Pediatric office named Allegro Pediatrics.'
];
var input = ['yes', 'no', 'no', 'yes', 'yes'];
var inputTwo = ['y', 'n', 'n', 'y', 'y'];
var userPoints = 0;

//Questions 1-7
function askQuestion(questions, answers, input, user, userPoints){
  for (var i = 0; i < 5; i++){
    var answer = prompt(questions[i]).toLowerCase();
    if (answer === input[i] || answer === inputTwo[i]){
      userPoints++;
      alert(answers[i] + '\n' + user + ', you now have ' + userPoints + '/7 points!');
      console.log(' The answer is: ' + answer + ' The user entered: ' + input[i] + ' and the user has ' + userPoints + '/7 points');
    }else{
      alert(wrongAnswers[i] + '\n' + user + ', you now have ' + userPoints + '/7 points!');
      console.log(' The answer is: ' + answer + ' The user entered: ' + input[i] + ' and the user has ' + userPoints + '/7 points');
    }
  }
  console.log('After question 5, the user has ' + userPoints + ' point(s)');
  function questionSix(){
    var attempts = 4;
    var answer6 = parseInt(prompt('What year did Devin Graduate?\nYou will have 4 attempts'));
    while(attempts > 1){
      if(isNaN(answer6) === true) {
        attempts--;
        answer6 = parseInt(prompt('Sorry, please enter a number\nYou have ' + attempts + ' attempts left'));
        console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
      }else if (answer6 > 2009) {
        attempts--;
        answer6 = parseInt(prompt('Sorry, that is too high! Guess again.\nWhat year did Devin Graduate?\nYou have ' + attempts + ' attempts left'));
        console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
      }else if (answer6 < 2009){
        attempts--;
        answer6 = parseInt(prompt('Sorry, that is too low! Guess again.\nWhat year did Devin Graduate?\nYou have ' + attempts + '  attempts left'));
        console.log('The user guessed ' + answer6 + ' and has ' + attempts + ' attempts left');
      }else{
        userPoints++;
        alert('Correct! He graduated from Skyline High School in 2009\nYou now have ' + userPoints + ' point(s)');
        break;
      }
    }
    console.log('After question 6, the user has ' + userPoints + ' point(s)');
  }
  questionSix();
  function questionSeven(){
    var cars = ['bmw' , 'porsche' , 'vw' , 'buggati' , 'lamborghini'];
    var myCars = cars.join('\n');
    var flag = false;
    var attemptsCars = 6;
    var answer7 = prompt('Can you guess another car brand that is my favorite besides Audi?').toLowerCase();

    while (!flag && attemptsCars > 0) {
      for (var i = 0; i < cars.length; i++) {
        if (answer7 === cars[i]) {
          flag = true;
        }
      }
      if (flag === true) {
        userPoints++;
        alert('Correct! ' + answer7 + ' is on my list of favorite car brands!');
        console.log('The user guessed ' + answer7 + ' and has ');
      } else {
        attemptsCars--;
        answer7 = prompt('Sorry, ' + answer7 + ' is not on my list of favorite car brands!\nYou have ' + attemptsCars + '  attempts left');
        console.log('The user guessed ' + answer7 + ' and has ' + (attemptsCars) + ' attempts left');
      }
    }
    console.log('After question 7 the user has ' + userPoints + ' point(s)');
    alert('Here are my favorite car brands:\n' + myCars + '\n' + user + ', your final score is ' + userPoints + '/7 points');
  }
  questionSeven();
}

askQuestion(questions, answers, input, user, userPoints);
