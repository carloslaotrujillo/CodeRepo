// What is Inheritance
// Provides a way to create a new class from an existing class.
// New class is a specialized version of the existing class.
// Important Note: A derived object has all​ characteristics of the base class.

class Student
{ // base class
  // body
};

class UnderGrad : public Student
{ // derived class
  // body
};

// What does a child have?
// An object of child class has:
// All members defined in the child class.
// All ​members declared in the parent class.

// An object of child class can use:
// All public members defined in the child class.
// All public members defined in the parent class.

// Protected Members
// protected member access specification: similar to private, but accessible by objects of derived class.

// Class Access Specifiers
// public: the object of the derived class can be treated as an object of the base class.
// protected: more restrictive than public, but allows derived classes to know details of parents.
// private: prevents objects of the derived class to be treated as objects of base class.

#include <iostream>
using namespace std;

// Base class
class Shape
{
public:
    Shape() { length = 0; } // default constructor
    void setlength(int l) { length = l; }

protected:
    int length;
};

// Derived class
class Square : public Shape
{
public:
    Square() : Shape() { length = 0; } // declaring and initializing derived class constructor
    int get_Area() { return (length * length); }
};

int main(void)
{
    Square sq;       // making object of child class Square
    sq.setlength(5); // setting length equal to 5
    // Print the area of the object.
    cout << "Total area of square is: " << sq.get_Area() << endl;

    return 0;
}
