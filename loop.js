
//1 page 105
let subject = ['english', 'politics', 'economics', 'statistics', 'biography'];

for (let count of subject){
  console.log(count);
}

//2
const favFood = ['pulao', 'kacchi', 'chicken', 'fried fish', 'chicken-fry'];

for (const printAll of favFood) {
  console.log(printAll);
}

//3
const birthDate = [1999, 2000, 2007,];

for (const printBirth of birthDate) {
  console.log(printBirth);
}

//4
const favPlayer = ['Messi', 'ronaldo', 'neymar', 'ozil', 'mohammad salah', 'kavin de bruyne', 'goals count', 450];

for (const printPlayer of favPlayer) {
  console.log(printPlayer);
}

const examDate = ['Bangla = 15 march', "English = 17 march", "math = 20 march"];

for (const printExamDate of examDate) {
  console.log(printExamDate);
}

// while-loop
//1
let num = 0;

while (num < 10) {
  console.log('i will practice programming 3h daily');
  num = num + 1;
}

//2
let num2 = 1;

while (num2 <= 20) {
  console.log(num2);
  num2++;
}

//3
let num3 = 50;

while (num3 <= 100) {
  console.log(num3);
  num3++;
}

//4
let num4 = 1;

while (num4 <= 10) {
  console.log(num4 * 3);
  num4++;
}

//5 
let num5 = 110;

while (num5 < 120) {
  console.log(num5 / 2);
  num5++;
} 


//1 page 111
let number1 = 5;
let sum = 0;

while (number1 < 15) {
  // console.log(number1);
  sum = number1 + sum;
  number1++;
  // console.log(sum); //if i want to see sum value everytime
}
console.log('Sum :', sum);

//2
let studentRoll = 1;
let rollSum = 0;


while (studentRoll <= 50) {
  console.log(studentRoll);
  rollSum = studentRoll + rollSum;
  studentRoll++;
}
console.log('Sum:', rollSum);

//3
let num6 = 21;
let numSum = 0;

while (num6 < 50) {
  numSum = num6 + numSum;
  num6++;
  console.log(numSum);
}
console.log('Sum:', numSum);

//4
let num7 = 20;
let num7Sum = 0;

while (num7 < 40) {
  num7Sum = num7 + num7Sum;
  num7++
}
console.log('Sum:', num7Sum);

//1 topic = For loop

for (let vari = 150; vari <= 170; vari++){
  console.log(vari);
}

//2
let roll2Sum = 0;

for (let student2Roll = 31; student2Roll < 58; student2Roll++){
  roll2Sum = student2Roll + roll2Sum;
  console.log(roll2Sum);
}
console.log('RollSum:', roll2Sum);

//3

let ySum = 0;

for (let tNum = 25; tNum < 75; tNum++){
  ySum = tNum + ySum;
}
console.log('totalSumNumber:', ySum);

//1
for (let i = 20; i < 50; i++){
  if (i % 7 == 0) {
    console.log(i);
  }
}

//2
for (let opNumber = 40; opNumber <= 80; opNumber++) {
  if (opNumber % 5 == 0 && opNumber % 7 == 0) {
    console.log(opNumber);
  }
}
  //3
  let iSum = 0;
  
  for (let iNum = 1; iNum <= 40; iNum++){
    if (iNum % 13 == 0) {
      iSum = iSum + iNum;
    }
  }
  console.log('totalSum:', iSum);
 
//4
for (let iProblem = 1; iProblem <= 50; iProblem = iProblem + 4){
  console.log(iProblem);
}
 
//5

for (let newNum = 0; newNum <= 100; newNum++){
  if (newNum % 9 == 0 && newNum % 6 == 0) {
    console.log(newNum);
  }
}

//6
let tiSum = 0;

for (let jNum = 1; jNum < 50; jNum++){
  if (jNum % 3 == 0 && jNum % 4 == 0) {
    console.log(jNum);
    tiSum = tiSum + jNum;
  }
}
console.log('total :', tiSum);


// break = loop will immediatly stop, continue = loop will skip this when console.log
//1
for (let iBre = 1; iBre <= 30; iBre++){
  if (iBre > 15) {
    break;
  }
  console.log(iBre);
}
//2
for (let iBre7 = 1; iBre7 < 40; iBre7++){
  if (iBre7 % 7 == 0) {
    continue;
  }
  console.log(iBre7);
}

//3
for (let conti = 1; conti <= 15; conti++){
  if (conti == 9) {
    continue;
  }
  console.log(conti);
}
//4
for (let con2ti = 1; con2ti < 20; con2ti++){
  if (con2ti == 12) {
    continue;
  }
  console.log(con2ti);
}
//5
for (let bi2bi = 1; bi2bi < 25; bi2bi++){
  if (bi2bi % 3 == 0) {
    continue;
  }
  console.log(bi2bi);
}

//6
for (let boomNum = 91; boomNum < 120; boomNum++){
  if (boomNum % 10 == 0) {
    break;
  }
  console.log(boomNum);
}