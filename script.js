/*
//Homework 2

// Ex. 1
let a0 = 10;
alert(a0);
//Ex.2
let year = 2007;
alert('First iPhone was released in ' + year + ' year');
//Ex.3
let founder = "Brendan Eich";
alert("JavaScript was founded by " + founder);
//Ex.4
let a1 = 10;
let a2 = 2;
alert("10 + 2 = " + (a1+a2) + "\n" + "10 - 2 = " + (a1-a2) + "\n" + "10 * 2 = " + a1*a2 + "\n" + "10 / 2 = " + a1/a2);
//Ex.5
let num1 = 2;
let result = num1**5;
alert("2^5 = " + result);
//Ex.6
let a = 9;
let b = 2;
alert("9 / 2 = 4 and " + a%b + " in left");
//Ex.7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//Ex.8
let age = prompt("Сколько вам лет?");
alert(age);
//Ex.9
const user = {
	name: 'Maksim',
	age: 19,
    "isAdmin": true
};
user.city_of_residence = "St Petersburg";
user.age = 20;
delete user.city_of_residence;
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
//Ex.10
let UserName = prompt("What is your name ?");
alert("Привет, " + UserName + "!");

//Homework 3

//Ex.1
let password = 'пароль';
let enter_psw = prompt("Введите пароль");
if (password === enter_psw){
	alert("Пароль введен верно")
} else {
	alert("Пароль введен неправильно")
}
//Ex.2
let c = prompt("Введите число");
if (c > 0 && c < 10){
	alert("Верно");
} else{
	alert("Неверно");
}
//Ex.3
let d = prompt("Введите число");
let e = prompt("И еще одно");
if (d > 100 || e > 100){
	alert("Верно");
} else{
	alert("Неверно");
}
//Ex.4
let a = +'2';
let b = +'3';

alert(a + b);
//Ex.5
let month = Number(prompt("Введите месяц"));
switch (month){
	case 12:
		alert("Зима");
		break;
	case 1:
		alert("Зима");
		break;
	case 2:
		alert("Зима");
		break;
	case 3:
		alert("Весна");
		break;
	case 4:
		alert("Весна");
		break;
	case 5:
		alert("Весна");
		break;
	case 6:
		alert("Лето");
		break;
	case 7:
		alert("Лето");
		break;
	case 8:
		alert("Лето");
		break;
	case 9:
		alert("Осень");
		break;
	case 10:
		alert("Осень");
		break;
	case 11:
		alert("Осень");	
		break;
	default: alert("Что-то не то(");
		break;
}
//Ex.7
let num = prompt("Пожалуйста, введите любое число");
let n = +num;

if (n == num){
	if (n % 2 == 0){
		alert("Число четное");
	} else{
		alert("Число нечетное");
	}
} else{
	alert("Это не число!")
}
//Ex.8
let clientOS
let year = 2020;
if (clientOS == 0){
	if (year < 2015){
		alert("Установите облегченную версию приложения для iOS по ссылке");
	}else {
		alert("Установите версию приложения для iOS по ссылке");
	}
} else {
	if (year < 2015){
		alert("Установите облегченную версию приложения для Android по ссылке");
	}else {
		alert("Установите версию приложения для Android по ссылке");
	}
}


//Homework 4

//Ex.1
let i1 = 1;
for(i1; i1 <= 2; i1++){
	console.log("Привет!");
};
//Ex.2
let i2 = 1;
for(i2; i2 <= 5; i2++){
	console.log(i2);
};
//Ex.3
let i3 = 7;
for(i3; i3 <= 22; i3++){
	console.log(i3);
};
//Ex.4
const i4 = {
	"Коля": 200,
	"Вася": 300,
	"Петя": 400,
}
for(let item in i4){
	console.log(item + " - зарплата " + i4[item] + " долларов.");
}
//Ex.5
let n = 1000;
let num = 0;
let count = 0;
while(n > 50){
	count++;
	n /= 2;
}
console.log(count);
//Ex.6
let friday = 1;
while(friday <= 31){
	console.log("Сегодня пятница, " + friday + "-е число. Необходимо подготовить отчет.");
	friday += 7;
}
*/

//Homework 5

//Ex.1
let a1 = Number(prompt("Введите первое число"));
let a2 = Number(prompt("Введите второе число"));

function min(a, b){
	if (a > b) {
		return b;
	} else {
		return a;
	}
}

console.log(min(a1, a2));

//Ex.2
let a21 = Number(prompt("2) Введите рандомное число"));

function whatsNumber(a21) {
	if (a21 % 2 === 0) {
		console.log("Число четное");
	} else {
		console.log("Число нечетное");
	}
}

whatsNumber(a21);

//Ex.3
let a31 = Number(prompt("3) Введите рандомное число"));

function squareNumber_1(a31) {
	console.log(a31*a31);
}
function squareNumber_2(a31) {
	return a31*a31;
}

squareNumber_1(a31);
console.log(squareNumber_2(a31));

//Ex.4
let a41 = Number(prompt("How old are you ?"));

function age(a41) {
	if (a41 < 0) {
		console.log("Вы ввели неправильное значение");
	} else if (a41 >= 0 && a41 <=12) {
		console.log("Привет, друг!");
	} else {
		console.log("Добро пожаловать!");
	}
}

age(a41);

//Ex.5
let a51 = Number(prompt("5) Введите первое число"));
let a52 = Number(prompt("5) Введите второе число"));

function isItNumbers(a51, a52) {
	if (isNaN(a51) || isNaN(a52)) {
		console.log("Одно или оба значения не являются числом");
	} else {
		console.log(a51*a52);
	}
}

isItNumbers(a51, a52);

//Ex.6
let a61 = Number(prompt("6) Введите рандомное число"));

function cubeNumber(a61) {
	if (isNaN(a61)) {
		console.log("Переданный параметр не является числом");
	} else {
	console.log(`${a61} в кубе равняется ${a61*a61*a61}`);
	}
}

cubeNumber(a61);

//Ex.7
let radius = 5;

function getArea(radius) {
	return 3,14*radius*radius;
}
function getPerimeter(radius) {
	return 2*3,14*radius;
}

let circle1 = getArea(radius);
let circle2 = getPerimeter(radius);

console.log(`Площадь круга равна ${circle1}`);
console.log(`Периметр круга равна ${circle2}`);

//Ex.8
let a81 = Number(prompt("8) Введите рандомное число"));

function month(a81) {
	if (a81 == 12 || a81 == 1 || a81 == 2) {
		console.log("Зима");
	} else if (a81 >= 3 && a81 <= 5) {
		console.log("Весна");
	} else if (a81 >= 6 && a81 <= 8) {
		console.log("Лето");
	} else if (a81 >= 9 && a81 <= 11) {
		console.log("Осень");
	}
}

month(a81);