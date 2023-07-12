class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
		this.closed = true; // the interval is closed by default

		this.setClosed = function (closed) {
			this.closed = closed;
		};

		this.formatInterval = function () {
			return this.closed ? "[" + this.start + ", " + this.end + "]" : "(" + this.start + ", " + this.end + ")";
		};
	}
}

function createIntervals(intervals) {
	const Intervals = [];

	for (let i = 0; i < intervals.length; i++) {
		Intervals.push(new Interval(intervals[i][0], intervals[i][1]));
	}

	return Intervals;
}

export function mergeIntervals(inter) {
	const intervals = createIntervals(inter);

	const results = [];
	results.push(intervals[0]);

	const lastElement = results.length - 1;

	for (let i = 1; i < intervals.length; i++) {
		if (results[lastElement].end >= intervals[i].start) {
			results[lastElement].end = intervals[i].end;
		} else {
			results.push(intervals[i]);
		}
	}
	return results;
}

console.log(
	mergeIntervals([
		[1, 5],
		[3, 7],
		[4, 6],
		[6, 8],
	])
);
