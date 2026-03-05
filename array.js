//Practice Array
//1
const number = [71, 72, 73, 74, 75, 76, 77, 78, 79];
const fruits = ['apple', 'banana', 'orange', 'mango', 'jack-fruit'];

console.log(number.length);
//2
const bazar = [
  'potato',
  'onion',
  'begun',
  'mula',
  'gajor',
  'tomato',
  'derosh',
  'lauu',
  'sosha',
  'potol',
];

console.log(bazar.length);
//3
const favMovie = [
  'lord of the ring',
  'pirates of the caribbean',
  'salaar',
  'osman',
  'ertugrul',
]; // favourite number array
//4
const oddNumber = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29]; //odd number array
//5
const color = [
  'yellow',
  'pink',
  'red',
  'black',
  'aqua',
  'aquamarine',
  'white',
  'blue',
]; //color array

console.log(color.length);
//6
const capitalCity = [
  'dhaka',
  'islamabad',
  'tokyo',
  'katmondu',
  'riyad',
  'dubai',
];
console.log(capitalCity.length);

//index, position array
//1
const friendsName = ['rahim', 'karim', 'muhim', 'iqbal', 'shofiq'];
console.log(friendsName[3]);

//2
const booksName = ['novel', 'hovel', 'govel', 'mavel', 'lovel', 'ovel'];
let serialNumber = booksName[5];
console.log(serialNumber);

//3
const numberTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberTwo[7] = 30;
console.log(numberTwo);

//4
const favGame = ['freeFire', 'pubg', 'candy crush', 'temple run'];
favGame[2] = 'subway surfer';
console.log(favGame);

//5
const familyMembers = ['shuvo', 'shahed', 'shumi', 'bodrul', 'rehana'];
console.log(familyMembers[3]);

//6
const travelCountry = [
  'saudi arabia',
  'switzerland',
  'japan',
  'spain',
  'england',
  'canada',
  'palestine',
];

let check4thCountry = travelCountry[4];
console.log(check4thCountry);

//7
const itemOnTable = ['tape', 'speaker', 'usb port', 'notepad'];

console.log(itemOnTable[7]);

//push(), pop(), shift(), unshift()

//1
const newNumbers = [10, 20, 30, 40, 50];
newNumbers.push(60);
console.log(newNumbers);

//2
const newFriends = ['sojib', 'sagor', 'sakib', 'sohel'];
newFriends.push('sumon');
console.log(newFriends);

//3
const mobileGame = ['call of duty', 'eFootball', 'clash of clans', 'warfare'];
mobileGame.pop();
console.log(mobileGame);

//4
const someNumbers = [25, 36, 48, 60];
someNumbers.unshift(12);
console.log(someNumbers);

//5
const tBooks = [
  'habluder programming',
  'javascript book',
  'abul book',
  'tabul book',
  'antaji book',
];
tBooks.shift();
console.log(tBooks);

//1 page 102
const fruitsHave = ['apple', 'banana', 'mango', 'litchi'];

if (fruitsHave.includes('mango')) {
  console.log('aaam ache');
} else {
  console.log('aam nei, gaache utt');
}

//2
const nameAbul = ['babul', 'alif', 'chuton'];
const index = nameAbul.indexOf('babul');
console.log(index);

//3
const nameFrabul = ['rimon', 'rifat', 'rajib'];
const indeex = nameFrabul.indexOf('rifat');
console.log(indeex);

//4
const cityOfbd = ['Dhaka', 'Chittagong', 'Sylhet'];
cityOfbd.push('rajshahi');
const inCludes = cityOfbd.includes('Rajshahi');
console.log(inCludes);

//5
const season = ['dighi', 'meg', 'brishti', 'borsha'];

if (season.includes('brishti')) {
  console.log("i need umbrella");
} else {
  console.log('No rain no pain');
}

//6
const favGamePlay = ['cricket', 'football', 'vollyball'];
console.log(favGamePlay.includes("badminton"));
