// The while loop is really the only necessary repetition construct.
// The for loop can be duplicated using a while loop, and with more control.
// A simple negation can perform the same behavior as do-while loop.

while (condition)
{
    // body
}

// The do…while loop is nearly identical to the while loop, but instead of
// checking the conditional statement before the loop starts, the do…while loop
// checks the conditional statement after the first run, then continuing onto another iteration.

do
{
    // body
} while (condition);

// A do - while loop is used where your loop should execute at least one time.
// For example, let’s consider a scenario where we want to take an integer input from the user until
// the user has entered a positive number. In this case, we will use a do-while as we have to run the
// loop at-least once because we want input from user at-least once. This loop will continue running until
// the user enters a positive number.

// The for loop is a loop that lets a programmer control exactly how many times a loop will iterate.

for (expression for initialization ; expression for testing ; expression for updating)
{
    // body
}

// Note: In the fully general case, it is not possible to automatically detect an infinite loop. This is known as the halting problem.
