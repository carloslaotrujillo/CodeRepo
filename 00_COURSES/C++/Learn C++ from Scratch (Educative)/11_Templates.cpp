// Templates are the mechanism by which C++ implements the generic concept.

// Templates were made to fulfill the need to design a generic code, that works
// the same way in different situations.

template <class Type>
// or
template <typename Type>

// The keywords class and typename have exactly the same meaning in this case,
// but some compilers may replace the words with each other.
// Type is our generic data type’s name, and when the template is to be used,
// it would be the same as if Type was a typedef for your datatype

#include <iostream>
using namespace std;

template <class Type>
Type multiply(Type x, Type y)
{
    return (x * y);
}

int main()
{
    int result = multiply<int>(2, 5); // calling template type function
    cout << "Result when integer values are passed is: " << result << endl;
    double result2 = multiply<double>(2.5, 5.5);
    cout << "Result when double values are passed is: " << result2;
    return 0;
}

// Note: Optionally, a template can have more type options, and the syntax is pretty simple.

template <class First, class Second, class Third>

// As another powerful feature of C++, you can also make template classes, which are
// classes that can have members of the generic type.
// This class we defined keeps score in the variable scorenumber which could be int, float or double.

template <class T>
class Score
{
private:
    T scorenumber;

public:
    Score(T args) { scorenumber = args; }
};

// This is how it’s object will b​e declared:

Score<int> myscore(40);
// or
Score<double> myscore(23.9);

// Exmaple:

#include <iostream>
using namespace std;

template <class T>
class myvalues
{
    T myval1, myval2; // two values of type T
public:
    myvalues(T arg1, T arg2)
    {
        myval1 = arg1;
        myval2 = arg2;
    }        // constructor
    T max(); // max function
};

template <class T>
T myvalues<T>::max() // definition of a function with type T
{
    if (myval1 > myval2)
    {
        return myval1;
    }
    else
    {
        return myval2;
    }
}

int main()
{
    myvalues<int> obj(20, 50); // try changing the value and value types to results for different types
    cout << "Max value is: " << obj.max();
    return 0;
}

// As you can see in the example above this time we declared a function of type T in our class.
// The definition of the function was outside the class so we had to add the prefix for template class beforehand.
