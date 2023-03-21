// In terms of inheritance, what is the effect of keeping a constructor private?

// Even though constructors cannot be private in JavaScript, in more classic OOP languages like C++ or Java, it is possible to have private constructors.
// In those languages that allow it is not possible to inherit from a class with a private constructor.
// Because when you have a private constructor you cannot create objects of that class directly from outside the class.
// You will get an error, since the derived class cannot access the private constructor of the base class.
