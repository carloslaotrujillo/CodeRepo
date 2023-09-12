// Recursion is a method of function calling in which a function calls itself during execution.

#include <iostream>
using namespace std;

int factorial(int n)
{
    if (n == 1 || n == 0) // if n equals 1 or 0 we return 1
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1); // recursively calling the function if n is other then 1 or 0
    }
}

int main()
{
    int temp = factorial(4); // computing the factorial of 4
    cout << "The value of the factorial computed is: " << temp << endl;
    return 0;
}
