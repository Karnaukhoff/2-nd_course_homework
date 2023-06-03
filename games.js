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