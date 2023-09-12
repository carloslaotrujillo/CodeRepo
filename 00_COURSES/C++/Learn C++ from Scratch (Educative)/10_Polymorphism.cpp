// Definitions
// A virtual function is a member function which is declared in the base class using
// the keyword virtual and is re-defined (Overriden) by the derived class.

// The term Polymorphism means the ability to take many forms. It occurs if there is a
// hierarchy of classes which are all related to each other by inheritance.

// Note: In C++ what this means is that if we call a member function then it could cause
// a different function to be executed instead depending on what type of object invoked it.

#include <iostream>
using namespace std;

// Base class
class Shape
{
public:
    Shape(int l, int w)
    {
        length = l;
        width = w;
    } // default constructor
    // changing get_Area() to virtual type function
    virtual int get_Area() { cout << "This is call to parent class area" << endl; }

protected:
    int length, width;
};

// Derived class
class Square : public Shape
{
public:
    Square(int l = 0, int w = 0) : Shape(l, w) {} // declaring and initializing derived class constructor
    int get_Area()
    {
        cout << "Square area: " << length * width << endl;
        return (length * width);
    }
};
// Dreived class
class Rectangle : public Shape
{
public:
    Rectangle(int l = 0, int w = 0) : Shape(l, w) {} // declaring and initializing derived class constructor
    int get_Area()
    {
        cout << "Rectangle area: " << length * width << endl;
        return (length * width);
    }
};

int main(void)
{
    Shape *s;
    Square sq(5, 5);     // making object of child class Sqaure
    Rectangle rec(4, 5); // making object of child class Rectangle

    s = &sq;
    s->get_Area();
    s = &rec;
    s->get_Area();

    return 0;
}
