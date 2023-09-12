export function insertInterval(existingIntervals, newInterval) {
	const finalIntervals = [];
	const newIntervalStart = newInterval[0];
	const newIntervalEnd = newInterval[1];

	if (newIntervalStart < existingIntervals[0][0]) {
		finalIntervals.push(newInterval);
		finalIntervals.push(...existingIntervals);
	} else if (newIntervalEnd > existingIntervals[existingIntervals.length - 1][1]) {
		finalIntervals.push(...existingIntervals);
		finalIntervals.push(newInterval);
	} else {
		for (let i = 0; i < existingIntervals.length; i++) {
			let currentIntervalEnd = existingIntervals[i][1];

			if (newIntervalStart > currentIntervalEnd) {
				finalIntervals.push(existingIntervals[i]);
			} else if (newIntervalEnd <= currentIntervalEnd) {
				return existingIntervals;
			} else {
				finalIntervals.push(existingIntervals[i]);
				finalIntervals.push(newInterval);
				let temp = i + 1;
				while (temp < existingIntervals.length) {
					finalIntervals.push(existingIntervals[temp]);
					temp++;
				}
				break;
			}
		}
	}

	const results = [];
	results.push(finalIntervals[0]);

	for (let j = 1; j < finalIntervals.length; j++) {
		let currentIntervalStart = finalIntervals[j][0];
		let currentIntervalEnd = finalIntervals[j][1];
		let resultsLastIntervalEnd = results[results.length - 1][1];

		if (resultsLastIntervalEnd >= currentIntervalStart) {
			results[results.length - 1][1] = Math.max(resultsLastIntervalEnd, currentIntervalEnd);
		} else {
			results.push(finalIntervals[j]);
		}
	}

	return results;
}

console.log(
	insertInterval(
		[
			[1, 3],
			[4, 6],
			[7, 8],
			[9, 10],
		],
		[1, 10]
	)
);
