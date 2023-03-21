// Given an array of integers and an integer , return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// nums = [3,7,11,15,22,31]
// target = 29

"use strict";

function addUpToTarget(nums, target) {
	const numberIndices = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;
		if (complement in numberIndices) {
			return [numberIndices[complement], i];
		}
		numberIndices[num] = i;
	}
}

// Unit tests
function assertArraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		throw new Error(
			`Test Failed!\n
      Result array and Expected array have different lengths.\n 
      Arrays: [${arr1}] and [${arr2}]\n`
		);
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			throw new Error(
				`Test Failed!\n
        Result array and Expected array have different indeces value.\n
        Index: ${i};\n
        Values: ${arr1[i]} and ${arr2[i]}\n`
			);
		}
	}
}

function testAddUpToTarget() {
	const testCases = [
		{ nums: [3, 7, 11, 15, 22, 31], target: 29, expected: [1, 4] },
		{ nums: [2, 8, 1, 15], target: 9, expected: [1, 2] },
		{ nums: [5, 9, 3, 7, 10, 20], target: 13, expected: [2, 4] },
		{ nums: [12, 4, 7, 6, 1, 10], target: 16, expected: [0, 1] },
		{ nums: [1, 0, -1, 5, 8, 12, -2], target: 6, expected: [0, 3] },
		{ nums: [-3, 4, 8, -1, 2], target: 5, expected: [0, 2] },
	];

	for (const testCase of testCases) {
		const { nums, target, expected } = testCase;
		const result = addUpToTarget(nums, target);
		result.sort((a, b) => a - b);
		assertArraysEqual(result, expected);
	}

	console.log("All tests passed!\n");
}

testAddUpToTarget();
