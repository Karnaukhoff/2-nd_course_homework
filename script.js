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