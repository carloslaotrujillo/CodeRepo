export function isPalindrome(s) {
	let left = 0;
	let right = s.length - 1;
	while (left < right) {
		if (s[left] !== s[right]) {
			return innerPalindrome(s, left + 1, right) || innerPalindrome(s, left, right - 1);
		}
		left++;
		right--;
	}
	return true;
}

function innerPalindrome(s, left, right) {
	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}

console.log(isPalindrome("madame"));
