/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	const string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

	let start = 0;
	let end = string.length - 1;

	while (start < end) {
		if (string[start] !== string[end]) return false;
		start++;
		end--;
	}
	return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
