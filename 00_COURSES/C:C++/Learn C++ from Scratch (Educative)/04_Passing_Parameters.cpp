// Values can be passed to a function through two methods.
// By default, values are passed to a function through a method called: pass by value.
// This means that: value of the variable is passed, not the variable itself.

// If desired, a value can be passed through the other method called: pass by reference
// This means that:
// Function is actually given the address of the variable, allowing it direct access to the information.
// Placing a & after the data type in the function definition allows direct access (this must also be
// present in any forward declaration).

// Passing By Value:

#include <iostream>
using namespace std;

float cube(float a)
{
    return a * a * a; // function returns the cube of the variable a
}

int main()
{
    float num = 4;
    float answer = cube(num); // calling the cube function for num=4
    cout << "The cube of " << num << " is " << answer << endl;

    return 0;
}

// Passing By Reference:

#include <iostream>
using namespace std;

void interchange(int &arg1, int &arg2) // passing parameters by reference
{
    int temp = arg2; // creating a variable temp and setting equal to arg2
    arg2 = arg1;     // setting the value of arg2 equal to arg1
    arg1 = temp;     // setting the value of arg1 equal to temp which is equal to arg2
}

int main()
{
    int num1 = 4;
    int num2 = 5;

    interchange(num1, num2); // calling the function interchange with parameters num1,num2

    cout << "Number 1 : " << num1 << endl;
    cout << "Number 2 : " << num2 << endl;
    return 0;
}
