//ex 1

let numberChildren = 3;
let partner = "Lady Gaga";
let geoLocation = "Iceland";
let jobTitle = "doctor";

let future =
  "You will be a " +
  jobTitle +
  " in " +
  geoLocation +
  ", and married to " +
  partner +
  " " +
  " with " +
  numberChildren +
  " kids.";

console.log(future);

//ex 2

let birthYear = 1997;
let futureYear = 2052;
let age = futureYear - birthYear;

console.log("I will be either " + age + " or " + (age - 1));

//ex 3

let currentAge = 26;
let maxAge = 92;
let dailyAmount = 2;

console.log(
  "You will need " +
    (maxAge - currentAge) * 365 * 2 +
    " Cola Zero to last you until the ripe age of " +
    maxAge
);

//ex 4
//wtf

let radius = 6;
console.log("The circumference is " + 2 * 3.14 * radius);
