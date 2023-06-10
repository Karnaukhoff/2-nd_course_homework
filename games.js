//season of year
function month() {
    let a = Number(prompt("Введите рандомное число"));
	if (a == 12 || a == 1 || a == 2) {
		alert("Зима");
	} else if (a >= 3 && a <= 5) {
		alert("Весна");
	} else if (a >= 6 && a <= 8) {
		alert("Лето");
	} else if (a >= 9 && a <= 11) {
		alert("Осень");
	}
}

//remember words
function rememberWords() {
	let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	let randomOrderWords = [];
	let currentLenght = words.length;

	for (let i = 0; i < currentLenght; i++) {
		let j = Math.round(Math.random() * (currentLenght - i - 1));

		randomOrderWords.push(words[j]);
		words = deleteMassive(words, j);
	}
	alert(randomOrderWords);

	let firstAnswer = prompt("Чему равнялся первый элемент массива?");
	let secondAnswer = prompt("Чему равнялся последний элемент массива?");

	if (firstAnswer.toUpperCase() === randomOrderWords[0].toUpperCase() && secondAnswer.toUpperCase() === randomOrderWords[6].toUpperCase()){
		alert("Верно. Поздравляю!");
	} else if (firstAnswer.toUpperCase() === randomOrderWords[0].toUpperCase() || secondAnswer.toUpperCase() === randomOrderWords[6].toUpperCase()) {
		alert("Вы были близки к победе!");
}
else {alert("Неверно:(")}
}