/*
//Homework 6
//Ex.1
const numbers1 = [1, 5, 4, 10, 0, 3];
let i1 = -1;
	do {
		i1++;
		console.log(numbers1[i1]);
	} while (numbers1[i1] !== 10)




//Ex.2
const numbers2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers2.length; i++) {
	if (numbers2[i] == 4) break;
	console.log(numbers2[i]);
}

//Ex.3
const numbers3 = [1, 3, 5, 10, 20];

console.log(numbers3.join(' '));

//Ex.4
let arr4 = [
	[1, 1, 1], 
	[1, 1, 1], 
	[1, 1, 1]
]

console.log(arr4);

//Ex.5
let arr5 = [1, 1, 1];

arr5.push(2);
arr5.push(2);
arr5.push(2);

console.log(arr5);

//Ex.6
let arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort();
arr6.pop();
console.log(arr6);

//Ex.7
let a71 = Number(prompt("Введите число"));
const arr7 = [9, 8, 7, 6, 5];
let search = arr7.includes(a71);

console.log(search);

//Ex.8
let a81 = 'abcdef';
a81 = a81.split('');
a81.reverse();
a81 = a81.join('');

console.log(a81);

//Ex.9
let arr9 = [
	[1, 2, 3,],
	[4, 5, 6]
];
let arr91 = [];

for (let i9 = 0; i9 < arr9.length; i9++) {
	for (let j9 = 0; j9 < arr9[i9].length; j9++) {
		arr91.push(arr9[i9][j9]);
	}
}

console.log(arr91);

//Ex.10
let sum10 = 0;
let arr10 = [1, 2, 5, 10, 25, 36, 47, 58, 69, 100];

for (let i10 = 0; i10 < 9; i10++){
	sum10 += (arr10[i10] + arr10[i10 + 1]);
}

console.log(sum10);

//Ex.11
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squares = nums.map(function (num) {
  return num * num
})

console.log(squares)

//Ex.12
const getLength = source => source.map(str => str.length);

console.log(getLength(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Ex.13
function filterPositive(array) {
	let arr13 = [];
	for (let i13 = 0; i13 < array.length; i13++) {
		if (array[i13] < 0) {
			arr13.push(array[i13]);
		}
	}
	console.log(arr13);
  }
  
  filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
  filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
  */

  //Homework 7
//Ex.1
  let a1 = 'js';

a1 = a1.toUpperCase();
console.log(a1);

//Ex.2
function searchStart(array, searching) {
	resultArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].toUpperCase().includes(searching.toUpperCase())) {
			resultArray.push(array[i]);
		}
	}
	console.log(resultArray);
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []

//Ex.3
let a3 = 32.58884;

console.log(Math.ceil(a3));
console.log(Math.floor(a3));
console.log(Math.round(a3));

//Ex.4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Ex.5
console.log(Math.round(Math.random() * 10));

//Ex.6
function getRandomArrNumbers(a) {
	let resultArray = [];
	let count = Math.floor(a/2);

	for (let i = 0; i < count; i++) {
		resultArray.push(Math.round(Math.random() * a));
	}

	console.log(resultArray);
}

getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6

//Ex.7
function rangeRandom(a, b) {
	console.log(Number(a) + Number(Math.round(Math.random()*(b-a))));
}

let a71 = prompt('Enter first number');
let a72 = prompt('Enter second number');
rangeRandom(a71, a72);

//Ex.8
let date = new Date();
let day8 = date.getDate();
let month8 = date.getMonth() + 1;
let year8 = date.getYear() + 1900;

console.log(`${day8}/${month8}/${year8}`);

//Ex.9
let currentDate = new Date();
currentDate.setDate(73);

let day9 = currentDate.getDate();
let month9 = currentDate.getMonth() + 1;
let year9 = currentDate.getYear() + 1900;

console.log(`${day9}/${month9}/${year9}`);

//Ex.10
function fullDate() {
	let date10 = new Date();

	let day10 = date10.getDate();
	let month10 = date10.getMonth() + 1;
	let year10 = date10.getYear() + 1900;
	if (date10.getHours() < 10) {hours10 = '0' + date10.getHours()}
	else {hours10 = date10.getHours()}
	if (date10.getMinutes() < 10) {minutes10 = '0' + date10.getMinutes()}
	else {minutes10 = date10.getMinutes()}
	if (date10.getSeconds() < 10) {seconds10 = '0' + date10.getSeconds()}
	else {seconds10 = date10.getSeconds()}

	console.log(`Дата: ${day10}/${Month(month10)}/${year10}`);
	console.log(`Время: ${hours10}:${minutes10}:${seconds10}`);
}
function Month(num10) {
	if (num10 === 1) {return "Января"}
	else if (num10 === 2) {return "Февраля"}
	else if (num10 === 3) {return "Марта"}
	else if (num10 === 4) {return "Апреля"}
	else if (num10 === 5) {return "Мая"}
	else if (num10 === 6) {return "Июня"}
	else if (num10 === 7) {return "Июля"}
	else if (num10 === 8) {return "Августа"}
	else if (num10 === 9) {return "Сентября"}
	else if (num10 === 10) {return "Октября"}
	else if (num10 === 11) {return "Ноября"}
	else if (num10 === 12) {return "Декабря"}
}

fullDate();