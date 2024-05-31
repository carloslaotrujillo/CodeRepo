console.log("Hello World");

console.warn("This is a warning!");

console.error("This is an error");

console.error(new Error("This is a different error"));

// =======================================================

var smallFunction = function () {
	console.trace("Let us look at the trace");
};

var bigFunction = function () {
	smallFunction();
};

bigFunction();

// =======================================================

console.time("For loop time");
for (let i = 0; i < 100; i++) {
	// processing
}
console.timeEnd("For loop time");

console.table([
	{ Fruit: "Apple", Quantity: 5 },
	{ Fruit: "Mango", Quantity: 7 },
]);

// =======================================================

const fs = require("fs");
const { Console } = require("console");

const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });

const number = 5;
logger.log("number:", number);
// In stdout.log: number 5
const code = 9;
logger.error("error code:", code);
