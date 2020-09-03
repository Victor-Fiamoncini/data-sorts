#include <iostream>

using namespace std;

void quickSort(int array[9], int fromIndex, int toIndex);
void swap(int array[9], int firstPosition, int secondPosition);
void printArray(int array[9]);

int main()
{
    int myArray[9] = {3, 7, 8, 5, 2, 1, 9, 5, 4};

    quickSort(myArray, 0, 8);

    return 0;
}

void quickSort(int array[9], int fromIndex, int toIndex)
{
	int countOfMisses = 0;
	int currentCompareIndex = fromIndex;
	int pivotIndex = toIndex;

    while (pivotIndex > currentCompareIndex)
    {
        if (array[currentCompareIndex] > array[pivotIndex])
        {
			swap(array, pivotIndex, pivotIndex - 1);

			if (currentCompareIndex + 1 < pivotIndex)
				swap(array, currentCompareIndex, pivotIndex);

			pivotIndex--;
        } else {
			currentCompareIndex++;
			countOfMisses++;

			if (countOfMisses == pivotIndex)
				pivotIndex--;
		}

		printArray(array);
    }

	quickSort(array, currentCompareIndex, pivotIndex);
}

void swap(int array[9], int firstPosition, int secondPosition)
{
	const int tempElement = array[firstPosition];

	array[firstPosition] = array[secondPosition];
	array[secondPosition] = tempElement;
}

void printArray(int array[9])
{
	for (int i = 0; i < 9; i++)
	{
		cout << array[i];

		if (i == 8)
			cout << endl;
	}
}
