export function findMaxSlidingWindow(nums, w) {
	if (w > nums.length) {
		w = nums.length;
	}

	let start = 0;
	let end = w;
	let res = [];

	while (nums[end - 1]) {
		let temp = nums.slice(start, end);
		temp = temp.sort((a, b) => a - b);
		res.push(temp[temp.length - 1]);

		start++;
		end++;
	}

	return res;
}

console.log(findMaxSlidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));
