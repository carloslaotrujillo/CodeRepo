// An array is a collection of similar data types under the same name.
// Note: Arrays have 0 as the first index not 1.

dataType arrayName[arraySize];

int arr[5]; // int is the datatype, arr is the name, 5 is the size of array

// Note: Although arr behaves like a pointer, its value cannot be changed as it
// references a specific region in memory.

#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {19, 10, 5, 6, 14}; // initializing the array with 5 values
    cout << "The value of arrr[0], that is, the first value in the array is: " << arr[0] << endl;
    cout << "The value of arrr[1], that is, the second value in the array is: " << arr[1] << endl;
    cout << "The value of arrr[2], that is, the third value in the array is: " << arr[2] << endl;
    cout << "The value of arrr[3], that is, the fourth value in the array is: " << arr[3] << endl;
    cout << "The value of arrr[4], that is, the fifth value in the array is: " << arr[4] << endl;
    int arr2[] = {1, 2, 3, 4}; // we don't specify the size and the compiler assumes a size of 4

    // we calculate size of the arr2 using the inbuilt sizeof function
    // divide the total size of the array by the size of the array element to calculate the size
    cout << "The size of arr2 is: " << sizeof(arr2) / sizeof(arr2[0]) << endl;
}

// We use indexing to access arrays values just like we did in the example above.
// Suppose you declared an array of 10 elements.
// You can use the array members from arr[0] to arr[9].

// Note: If you try to access array elements outside of its bound, let’s say arr[14],
// some compilers may not show any errors. However, this may cause unexpected output (undefined behavior).

#include <iostream>
using namespace std;
int main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    cout << "The value of arr[16] is: " << arr[16] << endl;
    return 0;
}

// A multidimensional array allows nesting arrays:

int grid[3][3]; // This allocates 3*3 elements in one memory block.

// Note: Even though arrays behave similarly to pointers, a multidimensional array is not a pointer-to-a-pointer.

#include <iostream>
using namespace std;

int main()
{
    // an array with 3 rows and 3 columns.
    int grid[3][3];

    // setting value of each array element
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            grid[i][j] = i + j;
            cout << "grid[" << i << "][" << j << "]: " << grid[i][j] << endl;
        }
    }

    return 0;
}
