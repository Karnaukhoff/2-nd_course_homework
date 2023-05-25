//Homework 2

/*// Ex. 1
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
alert("Привет, " + UserName + "!");*/

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