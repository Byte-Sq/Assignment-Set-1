//sodo code for question number 2
// 1.write a prompt to ask the user to enter their date year of birth
//2. to check the age the user using current dae and year of birth
//3.if the user is below 18 years is a minor
//4. any one between 18 and 36 is a youth
//5. anyone above 36 is an elder

//prompt the user to enter their year of birth
let yearOfBirth = prompt("Enter your year of birth");

//function calculate the age of the user entered in the prompt
function ageCalculator(yearOfBirth) {
  let currentDate = new Date(); // gets the current date
  let currentYear = currentDate.getFullYear(); //gets the current year
  let age = currentYear - yearOfBirth;
  if (age < 18) {
    console.log("minor");
  } else if (age >= 18 && age <= 36) {
    console.log("youth");
  } else {
    console.log("elder");
  }
}
ageCalculator(yearOfBirth);
