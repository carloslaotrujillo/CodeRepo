// Classes are the building blocks of programs built using the object-oriented methodology.
// Such programs consist of independent, self-managing modules and their interactions.
// An object is an instance of such module, and a class is its definition.

// A Keyword class is used with every declaration of class followed by the name of the class.
// You can use any className as you want.

class Dog
{
public:
    char name[25];
    string gender;
    int age;
    int size;
    bool healthy;
};

int main()
{
    Dog dogObj; // creating an object of Dog class called DogObj

    // using the dot operator to access members of a class
    dogObj.gender; // using object dogObj to access certain accessible variables of the class
}

// C++ restricts the program from directly referencing the member variables.

#include <iostream>
using namespace std;
class Dog
{
private: // these attribute of class are not available in other functions and classes
    char name[25];
    string gender;
    int age;
    int size;
    bool healthy;
};

int main()
{
    Dog dogObj;  // making object of Dog class
    dogObj.name; // this will give an error as data members are private
}

// The keyword public identifies members of a class that can be accessed from outside of the class.

#include <iostream>
using namespace std;
class Dog
{
public: // these attribute of class are available in other functions and classes
    string name = "lucy";
    string gender = "female";
    int age = 5;
    int size = 5;
    bool healthy = true;
};

int main()
{
    Dog dogObj;                                         // making object of Dog class
    cout << "Dog name is: " << dogObj.name << endl;     // by using . operator we can access the member of class
    cout << "Dog gender is: " << dogObj.gender << endl; // accessing the public members of class Dog in main()
    cout << "Dog age is: " << dogObj.age << endl;
    cout << "Dog size is: " << dogObj.size << endl;
    cout << "Is dog healthy: " << dogObj.healthy << endl;
}

// Member functions are declared in the class declaration.

#include <iostream>
using namespace std;

class DayOfYear
{
public:
    void output(); // member function
    int month;
    int day;
};

void DayOfYear::output()
{ // indicates function output is member of DayOfYear class
    cout << "Month =  " << month << endl;
    cout << "Day =  " << day << endl;
}

int main()
{
    DayOfYear birthday, today; // declaring multiple objects of class DayOfYear
                               // today and birthday objects have their own verions
                               // of class member variables

    birthday.month = 8; // accessing and setting month variable for object birthday

    birthday.day = 5; // accessing and setting day variable for object birthday

    cout << "Your birthday date is: " << endl;

    birthday.output(); // calling the member function output

    cout << "Today's date is: " << endl;

    today.month = 12; // accessing and setting month variable for object today

    today.day = 4; // accessing and setting day variable for object today

    today.output(); // since output() is public it is directly accessible in main()
}

// As we know private member variables cannot be accessed directly in any other function.
// In order to access or change their values, we need to define public member functions.
// These functions can be used to set the values of the private variables as well as to
// get their values since being private these members cannot be accessed directly.

// Class with Private Members
// Program to demonstrate the class DayOfYear.
#include <iostream>
using namespace std;

class DayOfYear
{
public:
    int myVar;
    void output();

    void set(int new_month, int new_day);
    // Precondition: new_month and new_day form a possible date.
    // Postcondition: The date is reset according to the arguments.

    int get_month();
    // Returns the month, 1 for January, 2 for February, etc.

    int get_day();
    // Returns the day of the mont
private:               // private variables not accessible directly in main
    void check_date(); // checks the date
    int month;
    int day;
};

int main()
{
    DayOfYear today, birthday; // making two objects of DayOfYear class
    // setting today object's month and day
    today.set(11, 23);
    cout << "Today's date is ";
    today.output(); // calling output to display today object's month and day

    // setting birthday object's month and day
    birthday.set(3, 21); // try setting these values same as one passed for today.
                         // also try passing invalid values here and then run code
    cout << "Birthday date is ";
    birthday.output(); // calling output to display birthday object's month and day

    if (today.get_month() == birthday.get_month() // if condition to check if today object's month/day
        && today.get_day() == birthday.get_day()) // equals birthday object's month/day
        cout << "Happy Birthday!\n";              // if matched it's your birthday
    else
        cout << "It's not your birthday\n"; // if dates don't match it's not your birthday
    return 0;
}

// function definitions

void DayOfYear::output()
{
    // displays the set month and day

    cout << "month = " << month
         << ", day = " << day << endl;
}

void DayOfYear::set(int new_month, int new_day) // setting
{
    month = new_month; // sets private variable month equal to argument new_month
    day = new_day;     // sets private variable day equal to argument new_day
    check_date();      // calling check_date to see if the month and date entered are valid
}

void DayOfYear::check_date()
{
    // checking to see if month and date values are valid
    if ((month < 1) || (month > 12) || (day < 1) || (day > 31))
    {
        cout << "Illegal date. Aborting program.\n";
        exit(1); // program exits if values are invalid
    }
}

int DayOfYear::get_month()
{
    return month; // retuns the private variable month
}

int DayOfYear::get_day()
{
    return day; // returns the private variable day
}

// A constructor is automatically called when an object of the class is declared.
// A constructor is a member function that is usually public.
// A constructor can be used to initialize member variables when an object is declared.
// A constructor cannot return a value.
// Constructors can be overloaded by defining constructors with different parameters list.
// Note: A constructor’s name must be the same as the name of the class it is declared in
// Note: No return type, not even void can be used while declaring a constructor
// Note: It’s a good practice to use default constructors even if you don’t want to initialize any variables.

#include <iostream>
using namespace std;

class DayOfYear
{
public:
    DayOfYear(int new_month, int new_day); // declaring constructor with two parameters
    DayOfYear();                           // default constructor without any parameters
    int myVar;
    void output();
    int get_month();
    int get_day();

private:
    void check_date();
    int month;
    int day;
};

int main()
{
    DayOfYear birthday(11, 23); // creating object and calling constructor
    DayOfYear today;            // creating object and calling default constructor
    cout << "Birthday day is: " << birthday.get_day() << endl;
    cout << "Birthday month is: " << birthday.get_month() << endl;
    cout << "Today the day is: " << today.get_day() << endl;
    cout << "Today month is: " << today.get_month() << endl;
    return 0;
}

// defining constructor
DayOfYear::DayOfYear(int new_month, int new_day)
{ // class name and constructor name are same
    month = new_month;
    day = new_day;
}

DayOfYear::DayOfYear()
{ // defining default constructor
    month = 0;
    day = 0;
}

int DayOfYear::get_month()
{
    return month; // retuns the private variable month
}

int DayOfYear::get_day()
{
    return day; // returns the private variable day
}
