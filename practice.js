//practice - 1, page no: 47
let income = 100;
let spend = 40;

let Money = income - spend;
console.log(Money);

//practice 2
let penCil = 10; //i have 10 pencil
let usePer = 2; //everytime i use 2 pencile,

let canUse = penCil / usePer; //How many time i can use these pencils?
console.log(canUse);

//practice 3

let totalMoney = 60; // total money i have
let spendPer = 15; //i can spend 15 tk each time

let howManyTimes = totalMoney / spendPer; //how many times i can spend?
console.log(howManyTimes);

//practice 4

let wordOne = 'Hello';
let wordTwo = 'World';

console.log(wordOne + wordTwo);

//practice 5

let chalKg = 153;
let dalKg = 261;

let totalKg = chalKg + dalKg;
console.log(totalKg);

//practice 6

let moneyHave = 500; // total money
let perSpend = 75; //i can spend 75 tk per time

let canSpendTime = moneyHave / perSpend;
console.log(canSpendTime); // 6.666 times i can spend 75 tk

let totalSpend = 6 * perSpend; // i just take purno songkha, < beacuse i can not use 0.66>
let restMoney = moneyHave - totalSpend;
console.log(restMoney); // total money i have after spend.

//practice 7

const firstNumber = 8;
const secondNumber = 3;

const vagFol = firstNumber / secondNumber; // solved vagfol

const vagSes = firstNumber % secondNumber; // solved vagses
console.log(vagFol, vagSes);

//practice 8

const numberOne = 50;
const numberTwo = 9;

const bagFol = numberOne % numberTwo;
console.log(bagFol);

//practice 9

const firstWord = 'Bangla';
const secondWord = 'desh';

console.log(firstWord + secondWord);

//practice 10

const perDay = 4; // 4kg rice
const iHave = 480; // i have total 480kg rice or 12 mon

const dinJabe = iHave / perDay;
console.log(dinJabe); // output = 120 days

const monthJabe = dinJabe / 30; // becuse 1 month = 30 days. output = 4 month
console.log(monthJabe);

//practice 2page: 50
let gione = 'phone';
console.log(typeof gione);

let learning = true;
console.log(typeof learning);

let temperature = 102.5;
console.log(typeof temperature);
//practice 3 age no: 52/53 topic = changing variable value
let age = 23;
age = 22;
console.log(age);

let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

let studyTime = 4; //hour
studyTime = 0;
console.log(studyTime);

let friendCount = 3;
friendCount = 1;
console.log(friendCount);

let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

let chairCount = 40;
chairCount = 38;
chairCount = 32;
console.log(chairCount);

let playTime = 3;
playTime = 0;
console.log(playTime);

//practice 4 page no: 68 topic - parseInt
let numBer = parseInt('20');
console.log(numBer + 10);

let secNumber = parseInt(3.14159); // if i want purno-songkha
console.log(secNumber);

let demoName = parseInt('premikBoy');
console.log(demoName);

let fnumBer = 3.456;
let snumBer = 2.789;
let totAl = fnumBer + snumBer;
let totalNumBer = parseFloat(totAl.toFixed(2)); // if i want all number including bongnangsho and .toFixed (specific) for how many number i want after (.) this
console.log(totalNumBer);

let unumBer = '56.78';
let onumBer = '12.34';

// let tnumBer = parseInt(unumBer) + parseInt(onumBer); //for removing extra .number
let tnumBer = parseFloat(unumBer) + parseFloat(onumBer); // full Number
console.log(tnumBer);

let rNumber = '10.5678';
let iNUmber = '5.4321';

let riNUmber = parseFloat(rNumber) + parseFloat(iNUmber);
let mNumber = riNUmber.toFixed(1); //dosomik er por 1 gor
console.log(mNumber);

let bNumber = parseFloat('42.45689754');
let b3Number = bNumber.toFixed(3);
console.log(b3Number);

//practice 5 page no: 73  topic : comparison operator
let fMoney = '50';
console.log(50 == fMoney);
console.log(50 === fMoney);
console.log('JavScript' == 'JavScript'); //Because these two data type are same. "" and '' is same. doesn't matter.
console.log('JavaScript' === 'JavaScript');
console.log('apple' == 'apple');
console.log('apple' === 'apple');
console.log('test' == 'TEST');
console.log('test' === 'TEST'); // javaScript is case-sensitive

let variableX = 15;
let variableY = '20';
console.log(variableX != variableY); //  != and !== is not-equal-to
console.log(variableX !== variableY);

let variableA = 'hello'; // string must have quota "" , ''
let variableB = 'Hello';
console.log(variableA == variableB);
console.log(variableA === variableB);

//practice 6 page no: 80 topic : if-else
let age2a = 20;
let height = 65; //in CM

if (age > 18 && height > 60) {
  // && = AND, all condition should be meet
  console.log('Gari telbe');
} else {
  console.log('Gari te bose thakbe');
}

let mathScore = 75;
let englishScore = 86;

if (mathScore > 80 || englishScore > 85) {
  console.log("You're eligible");
} else {
  console.log("You're ready for biya");
}

let GPA = 5;
let monthlyIncome = 9999;

if (GPA === 5 && monthlyIncome < 10000) {
  console.log("you're eligible for scholarship");
} else {
  console.log('not eligile for scholarship');
}

let candidateAge = 25;
let experience = 3;

if (candidateAge < 30 && experience > 2) {
  console.log('You can participate in job exam');
} else {
  console.log('You can not participate');
}

let dimAche = 13;
let isChicken = false;

if (dimAche > 12 || isChicken != true) {
  //!= true and == false Is same
  console.log('i will cook dimkurma');
} else {
  console.log('i will have bread and banana');
}

let bodytemperature = 101; //degree
let isCough = false;

if (bodytemperature > 100 || isCough == true) {
  console.log('will go to the doctor');
} else {
  console.log('sleep under the blanket');
}

let attendInClass = 81; //in percentage
let homeWorkDone = true;

if (attendInClass > 80 && homeWorkDone == true) {
  console.log("you're passed");
} else {
  console.log('Auto fail');
}

let electricityOn = false;
let mobileCharge = false;

if (electricityOn != true && mobileCharge != true) {
  // == false, is same as != true
  console.log('going to the study');
} else {
  console.log('will play video game');
}

let shirtPrice = 1001;
let isCoupon = true;

if (shirtPrice > 1000 && isCoupon == true) {
  console.log('Congratulation, you will get 20% discount');
} else {
  console.log('sorry, next time');
}

//discount (if-else)
let price = 4000;

if (price >= 5000) {
  //if price high or equal to 5000,
  const discount = (price / 100) * 10; //price will first calculated here,
  const pay = price - discount; // how much money need to pay after discount,
  console.log(pay);
} else {
  console.log(price); // if price less than 5000 then full price money should pay.
}
// discount in two condition. (if, else if, else), new thing = else if
const priice = 1500;

if (priice >= 5000) {
  const discount2 = (priice / 100) * 10;
  const pay2 = priice - discount2;
  console.log(pay2); //'10% off'
} else if (priice >= 2500) {
  const discount2 = (priice / 100) * 5;
  const pay2 = priice - discount2;
  console.log(pay2); //'5% off'
} else if (priice >= 1000) {
  // I can add multiple else if condition
  const discount2 = (priice / 100) * 2;
  const pay2 = priice - discount2;
  console.log(pay2); //'2% off'
} else {
  console.log(priice); //'no discount'
}

//practice -7 page no : 83 topic : dicount if,else and else if
let amount = 3500;

if (amount >= 6000) {
  const discount3 = (amount / 100) * 15;
  const pay3 = amount - discount3;
  console.log(pay3); // 15% discount
} else if (amount >= 3000) {
  const discount3 = (amount / 100) * 5;
  const pay3 = amount - discount3;
  console.log(pay3); //5% discount
} else {
  console.log(amount); // no discount
}
