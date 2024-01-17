// Given 2 sorted arraya merge them in a final one sorted solution array

function mergeSortedArra(arr1, arr2) {
	let mergedArray = [];
	let arr1Item = arr1[0];
	let arr2Item = arr2[0];
	let i = 1;
	let j = 1;

	// Check input
	if (arr1.length === 0) {
		return arr2;
	}

	if (arr2.length === 0) {
		return arr1;
	}

	while (arr1Item || arr2Item) {
		if (!arr2Item || arr1Item < arr2Item) {
			mergedArray.push(arr1Item);
			arr1Item = arr1[i];
			i++;
		} else {
			mergedArray.push(arr2Item);
			arr2Item = arr2[j];
			j++;
		}
	}

	return mergedArray;
}

// =======================================================================

function mergeSortedArra2(a1, a2) {
	let ptr1 = 0;
	let ptr2 = 0;

	let item1 = a1[ptr1];
	let item2 = a2[ptr2];

	const res = [];

	while (item1 || item2) {
		if (!item2 || item1 < item2) {
			res.push(item1);
			ptr1++;
			item1 = a1[ptr1];
		} else {
			res.push(item2);
			ptr2++;
			item2 = a2[ptr2];
		}
	}
	return res;
}

console.log(mergeSortedArra([0, 3, 4, 31], [4, 6, 30]));

console.log(mergeSortedArra2([0, 3, 4, 31], [4, 6, 30]));
