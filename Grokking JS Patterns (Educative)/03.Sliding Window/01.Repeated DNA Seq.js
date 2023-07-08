export function findRepeatedSequences(s, k) {
	let start = 0;
	let end = k;
	const hash = {};
	const set = new Set();

	while (s[end - 1]) {
		let substring = s.slice(start, end);

		if (hash[substring]) {
			set.add(substring);
		} else {
			hash[substring] = true;
		}

		start++;
		end++;
	}

	return set;
}

console.log(findRepeatedSequences("AAAAACCCCCAAAAACCCCCC", 8));
