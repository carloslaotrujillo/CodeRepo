function threeSum(nums, target) {
	nums = nums.sort((a, b) => a - b);

	for (let start = 0; start < nums.length - 2; start++) {
		let middle = start + 1;
		let end = nums.length - 1;

		while (middle < end) {
			let triplet = nums[start] + nums[middle] + nums[end];

			if (triplet === target) {
				return true;
			} else if (triplet > target) {
				end--;
			} else {
				middle++;
			}
		}
	}

	return false;
}

console.log(threeSum([2, 3, 1], 6));
console.log(threeSum([1, -1, 1], 2));
console.log(threeSum([1, 2, 4, 6, 8, 20], 31));
