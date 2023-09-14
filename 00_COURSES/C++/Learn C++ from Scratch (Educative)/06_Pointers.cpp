// A pointer is a special kind of variable that stores the address in memory
// of another variable and can be used to manipulate that variable.

// Pointers associate two pieces of information:
// The memory address, which is the “value” of the pointer itself.
// The data type of the variable pointed to, which is the kind of variable located
// at that address.

// Pointers can be dereferenced to access the value of the variable at the pointer’s address​.

#include <iostream>
using namespace std;

int main()
{
    int num = 4; // intilizaing an int type variable named num with value 4
    int *ptr;    // creating a pointer named ptr
    ptr = &num;  // getting the address in memory of num and storing it in ptr

    cout << "Variable address: " << &num << endl; // referencing to get the variable's address in memory

    cout << "Variable address from pointer: " << ptr << endl; // the address of the variable that it points to

    cout << "Value of the variable from pointer: " << *ptr << endl; // dereferencing ptr to get the value of the address that points to

    cout << "Pointer's Address: " << &ptr << endl; // referencing to get the pointer's address in memory

    return 0;
}

// Note: All the data stored in a program is stored in the computer’s memory.

// In C++, a new object, variable or array can be created using the new operator,
// and freed with the delete operator.

// The new operator allocates an object from the heap and optionally initializes it.
// When you have finished using it, you must delete it. Otherwise, the pointed memory is
// inaccessible, and the result is memory leak.

#include <iostream>
using namespace std;

int main()
{
    int *ptr = new int;
    int val = 5;
    ptr = &val;
    cout << *ptr << endl;
    delete ptr;
}

// C++ allows us to create arrays and then use pointers to carry out operations on those arrays.

#include <iostream>
using namespace std;

int main()
{
    // first we declare an array
    int arr[4];
    // next we declare a pointer
    int *ptr;
    // now we make the pointer ptr point to the first element of the array arr
    ptr = arr;
    // next we set the value of the first element of arr, that is, arr[0] equal to 3
    *ptr = 3;
    // now we increment the pointer ptr to point to second element of the array arr
    ptr++;
    // next we update the value of the second element of arr, that is, arr[1] being pointed at by ptr
    *ptr = 5;
    // to directly store a value at some index in arr, e.g at the 3rd index of array we first get the address
    ptr = &arr[3];
    // now storing a value at arr[3] location
    *ptr = 10;
    // moving pointer back to arr[0]
    ptr = arr;
    // storing value at arr[2] now
    *(ptr + 2) = 8;
    // now lets display all the values we stored in our array
    for (int i = 0; i < 4; i++)
    {
        cout << "value at arr[" << i << "] is: " << arr[i] << endl;
    }
    return 0;
}

// A pointer contains a reference to another variable. It may also point to a pointer:

int **pptr;

// For pptr[0][0], the address stored in pptr is taken and the address stored in that
// address is taken, ​and it is the result of the expression.

#include <iostream>
using namespace std;

int main()
{

    int x = 1;
    int *ptr1;
    int **ptr2;

    ptr1 = &x;    // getting address of x
    ptr2 = &ptr1; // getting address of ptr1

    cout << "Value of x is: " << x << endl;

    // let's print the value being pointed to by ptr1
    cout << "The value being pointed to by ptr1 is: " << *ptr1 << endl;

    // let's print the address being pointed to by ptr2
    cout << "The address being pointed to by ptr2 is: " << *ptr2 << endl;

    // let's print the value being pointed by ptr2
    cout << "The value being pointed to by ptr2 is: " << **ptr2 << endl;

    return 0;
}

// A pointer contains a reference. It may also point to a function.

functiontype(pointer to function)(datatype);

#include <iostream>
using namespace std;

/* Declaration */
void (*fp)(); // fp is a pointer to a function taking zero arguments and that returns void

/* Initialization */
void foobar()
{
    std::cout << "Hello from foobar()" << std::endl;
}

int main()
{
    fp = &foobar; // to initialize a function pointer we give it the address of the function foobar

    /* Now we call fp that contains the address of the function foobar()*/
    fp();
}
