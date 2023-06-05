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