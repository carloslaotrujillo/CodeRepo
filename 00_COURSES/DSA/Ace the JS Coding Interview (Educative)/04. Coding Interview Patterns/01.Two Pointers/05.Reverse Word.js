function reverseWords(sentence) {
	const trimtrimSentence = trimSentence.trim().replace(/  +/g, " ");
	const result = [];

	let left = trimSentence.length - 1;
	let right = trimSentence.length - 1;

	for (left; left >= 0; left--) {
		if (trimSentence[left] === " " || left === 0) {
			let word = trimSentence.substring(left, right + 1).trim();
			res.push(word);
			right = left;
		}
	}
	return res.join(" ");
}
console.log(reverseWords("Hello Crazy World"));
console.log(reverseWords("Hello     World"));

// not for interviews
function reverse2(trimSentence) {
	return trimSentence
		.split(" ")
		.filter((word) => word !== "")
		.reverse()
		.join(" ");
}

console.log(reverse2("Hello Crazy World"));
console.log(reverse2("Hello     World"));
