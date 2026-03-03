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
