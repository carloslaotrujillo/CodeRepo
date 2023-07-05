// Write a method to replace all spaces in a string with ‘%20’.
// Use a character array so that you can perform this operation in place.
// Original: “Micro Control Systems “, Output: "Micro%20Control%20Systems"

"use strict";

function replaceSpaces(inputStr) {
	inputStr = inputStr.replace(/\s+/g, " ").trim();
	let inputArr = inputStr.split("");

	for (let i = 0; i < inputArr.length; i++) {
		if (inputArr[i] === " ") {
			inputArr[i] = "%20";
		}
	}
	return inputArr.join("");
}

// Unit tests
function assertEquals(actual, expected) {
	if (actual === expected) {
		console.log(`Test passed!\n`);
	} else {
		console.error(
			`Test Failed\n  
            Expected: ${expected}\n  
            Actual: ${actual}\n`
		);
	}
}

assertEquals(replaceSpaces(""), "");

assertEquals(replaceSpaces("   "), "");

assertEquals(replaceSpaces("MicroControlSystems"), "MicroControlSystems");

assertEquals(replaceSpaces("Micro Control Systems "), "Micro%20Control%20Systems");

assertEquals(replaceSpaces("  Micro Control Systems  "), "Micro%20Control%20Systems");

assertEquals(replaceSpaces("Micro   Control   Systems"), "Micro%20Control%20Systems");
