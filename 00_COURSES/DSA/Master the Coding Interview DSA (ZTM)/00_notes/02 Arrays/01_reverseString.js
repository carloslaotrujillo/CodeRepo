// Create a function that reverses a string

function reverse(str) {
	let res = [];

	for (let i = str.length - 1; i >= 0; i--) {
		res.push(str[i]);
	}

	return res.join("");
}

console.log(reverse("Hello World!"));
