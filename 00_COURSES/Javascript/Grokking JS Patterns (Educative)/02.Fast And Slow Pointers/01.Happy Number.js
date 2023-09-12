const sumOfSquares = (num) => {
	return Array.from(String(num), Number).reduce((sum, num) => sum + num ** 2, 0);
};

function isHappy(n) {
	let slow = n;
	let fast = sumOfSquares(slow);

	let i = 0;
	while (1) {
		if (fast === 1) {
			return true;
		} else if (fast === slow) {
			return false;
		}

		slow = sumOfSquares(slow);
		fast = sumOfSquares(sumOfSquares(fast));
	}
}

console.log(isHappy(2));
console.log(isHappy(28));
console.log(isHappy(234));
