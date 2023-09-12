#include <iostream>
using namespace std;

void pointers()
{
  int i = 2;
  int *iptr = &i;
  int **jptr = &iptr;

  cout << &iptr << endl;
  cout << iptr << endl;
  cout << *iptr << endl;

  cout << "============" << endl;

  cout << jptr << endl;
  cout << *jptr << endl;
  cout << **jptr << endl;
}

void printBoard(int **board, int x, int y)
{
  for (int i = 0; i < x; ++i)
  {
    for (int j = 0; j < y; ++j)
    {
      board[i][j] = 1;
      cout << board[i][j] << " ";
    }
    cout << endl;
  }
}

void makeBoard(int x, int y)
{
  int **board;
  board = new int *[x];

  for (int i = 0; i < x; ++i)
  {
    board[i] = new int[y];
    // each i-th pointer is now pointing to dynamic array (size x) of actual int values
  }

  printBoard(board, x, y);
}

int main()
{
  // pointers();
  // makeBoard(5, 10);
  int a = 100;
  int *ptr1;
  int **ptr2;
  ptr1 = &a;
  ptr2 = &a;

  cout << **ptr2 << endl;

  return 0;
}
