function reverseWords(sentence) {
	sentence = sentence.trim().replace(/  +/g, " ");
	let res = [];
	let left = sentence.length - 1;
	let right = sentence.length - 1;

	for (left; left >= 0; left--) {
		if (sentence[left] === " " || left === 0) {
			let word = sentence.substring(left, right + 1).trim();
			res.push(word);
			right = left;
		}
	}
	return res.join(" ");
}
console.log(reverseWords("Hello Crazy World"));
console.log(reverseWords("Hello     World"));

//
function reverse2(sentence) {
	return sentence
		.split(" ")
		.filter((word) => word !== "")
		.reverse()
		.join(" ");
}

console.log(reverse2("Hello Crazy World"));
console.log(reverse2("Hello     World"));
