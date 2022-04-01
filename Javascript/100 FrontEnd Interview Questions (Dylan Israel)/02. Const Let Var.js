/*
"const" and "let" were added on ES6 to solve the problem that "var" have with lexical scope and hoisting. Meaning that when declaring variable with "var", this variable will hoist even if its value is never run, creating an undesirable value for the outer scope code if this variable where to be used. This is a huge issue since the code will run/render differently that it would read, and that will cause inherent bug on our software.

"const" and "let" on the other hand implement what we call block scope, meaning thos variable will only exist on that specific block of code solving the issue there of "var"
*/