const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let query = "What is your name?\n";

function askQuestion() {
	rl.question(query, (answer) => {
		console.log(`Hello ${answer}!`);
		askQuestion();
	});
}

askQuestion();
