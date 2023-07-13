function countRepeatingChars(str) {
	let lowerCaseStr = str.toLowerCase();
	let charCounts = {};
	let repeatingChars = 0;
	for (let i = 0; i < lowerCaseStr.length; i++) {
		let char = lowerCaseStr[i];
		if (charCounts[char]) {
			if (charCounts[char] == 1) {
				repeatingChars++;
			}
			charCounts[char]++;
		} else {
			charCounts[char] = 1;
		}
	}
	return repeatingChars;
}

console.log(countRepeatingChars("indivggggghhhhisibility"));
