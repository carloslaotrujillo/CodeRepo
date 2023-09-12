
// Important Note: Names must start with a letter.

// An integer is a number that does not have any decimal places. It is a whole number, for example, 1,2,3,4 are all integers. 4.3 is not.
// If you were to try and place the number 4.3 into an integer, the number would​ be truncated to 4.
// There are further different types in an integer as well. Let’s take a look at them one by one.

// Short is normally defined as a 16-bit integer.
short myVariableName1;              // bytes and  stores from -32768 to +32767
short int myVariableName2;          // stores from -32768 to +32767
signed short myVariableName3;       // stores from -32768 to +32767
signed short int myVariableName4;   // stores from -32768 to +32767
unsigned short myVariableName5;     // stores from 0 to +65535
unsigned short int myVariableName6; // stores from 0 to +65535

// Int is guaranteed to be 16-bit, but modern implementations use 32-bit for an int.
int myVariableName7;          // stores from -32768 to +32767
signed int myVariableName8;   // stores from -32768 to +32767
unsigned int myVariableName9; // stores from 0 to +65535

// Long is a 32-bit number.
long myVariableName10;              // stores from -2147483648 to +2147483647
long int myVariableName11;          // stores from -2147483648 to +2147483647
signed long myVariableName12;       // stores from -2147483648 to +2147483647
signed long int myVariableName13;   // stores from -2147483648 to +2147483647
unsigned long myVariableName14;     // stores from 0 to +4294967295
unsigned long int myVariableName15; // stores from 0 to +4294967295

// A char is an 8-bit integer.

char myChar = 'A';
char myOtherChar = 65;

// Floats are floating point numbers with a storage size of 4 bytes, which means that these numbers can hold decimal places.
// Note: The float data type usually stores only a good approximation of a decimal value, not the exact value.

float myFloat = 8.3; // Creates a floating point variable

// Doubles are like “floats”, which means they can store decimal places. Doubles can generally store more information than a standard float.
// Their storage size is of 8 bytes.

double myDouble = 8.78; // Created myDouble

// The bool (boolean) type is a 1-byte data type that is either true or false.
// A true being any number other than zero and false being zero. The true keyword uses the value 1 to assign true.

bool canJump = false;
bool canDo = true;
