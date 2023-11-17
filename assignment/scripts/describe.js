// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called number. We set this equal to 1.
// We then increment the number varible. Number is now 2.
// We check if number is greater than or equal to 2. If so, 
// we then console.log the text 'yes'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We define a variable named name and set it to 'Dane'.
// We then check to see if the variable types match and also that the variable matches the string 'Mary'.
// If that's the case, we console.log the text 'Hi, Mary!' and if it doesn't match then,
// we output the console.log text 'How do you do?'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We first introduce two variables named secret - this is an any type of variable so it can have any value - and the variable code which is set to the number 123.
// Then if code's variable types match and it equals 123, then we set the variable secret to 'super' and multiply the value of code by two.
// Then we check to see if code is greater than 250. If it is then we set the variable secret to 'duper'.
// After all this we console.log the result of secret. In this case it would be 'super'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/


// WRITE YOUR DESCRIPTION HERE - random code snip but ill still describe it since there were no instructions - maybe im missing something
// We introduce three variables named, isStudent which is a boolean set to true, and a variable named age set to the number 34, finally a variable named zip which is given the number 55407.
// After we check to see if isStudent is the same variable type and is true, and if zip is greater than 80000. If this is true we console.log the text 'You're a student on the West Coast!'
// Otherwise, we see if isStudent is the same variable type and is false, or if the age variable is less than 30. If so we console.log the text 'What are your favorite hobbies?'
// Otherwise, we see if isStudent is the same variable type and is true. If so we console.log the text 'Welcome to Prime!'.
// Or else, we just console.log the text 'How about the weather?' which recently in north dakota it's been great :)



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


//4. Corrections
// Color one is not set to 'blue', it's set to 'red'. On the other hand colorTwo isn't set to 'red' it's set to 'blue', I'd suggest swapping these around.
// We also forget to set ColorTwo to purple in this case. I would add this in with colorTwo = 'purple';.


/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//5. Corrections
// The problem here is that we are using the || which stands for or in a conditional.
// We want this to be && to show that if temp is higher than 39 and if time is greater or equal to 4 then we proceed with our console.log.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

//6. Corrections
// We have a couple mix ups here. To start, we would want the conditional to show if(minAge >= age) at the start of the conditional so we're using the greater than instead of the less than sign.
// That is just to follow the instructions correctly. If that is the case, then we output the text 'enter' in the log which currently we say nothing about showing the text 'no entry' in the instructions.
// We would then delete the else part, and inside the current conditional, just keep the console so that it shows the text 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

