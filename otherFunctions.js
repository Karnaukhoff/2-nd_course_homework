function deleteMassive(array, massive) {
	let newArray = [];
	for(let i = 0; i < array.length; i++) {
		if (i !== massive) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}