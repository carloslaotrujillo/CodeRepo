// Problem: Reverse the string in place
/**
 
"facdliweht"
^
^ 

"facdliweht"

"a"
""
"ab"
"abc"

*/
// - assuming all entries are valid (only strings with no spaces) -
// if string.length <= 1 return string (nothing to swap)

// declare two variables (left)(right)

// left will hold the value and the index of the first char in the string
// const left = {
//   index = 0,
//   value = string[this.index]
// }

// right will hold the value and the index of the last char in the string
// const right = {
//   index = string.length - 1,
//   value = string[this.index]
// }

// while(left.index < right.index)
//     string[left.index] = right.value
//     string[right.index] = left.value
//     left.index++
//     right.index--

// return string

function reverseString(string) {
	if (string.length <= 1) {
		return string;
	}

	const left = {
		index: 0,
		value: string[this.index],
	};

	const right = {
		index: string.length - 1,
		value: string[this.index],
	};

	while (left.index < right.index) {
		console.log(left);
		console.log(right);
		string[left.index] = right.value;
		string[right.index] = left.value;
		left.index++;
		right.index--;
	}

	return string;
}

console.log(reverseString("ab"));
