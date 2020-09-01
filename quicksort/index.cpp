#include <iostream>

using namespace std;

void quickSort(int array[8], int fromIndex, int toIndex);
void printArray(int array[8]);

int main()
{
    int myArray[8] = {1, 4, 5, 1, 3, 4, 2, 6};
    int myArrayLength = sizeof(myArray) / sizeof(myArray[0]);

    quickSort(myArray, 0, 7);

    return 0;
}

void quickSort(int array[8], int fromIndex, int toIndex)
{
	int countOfMisses = 0;
	int currentCompareIndex = fromIndex;
	int pivotIndex = toIndex;

    while (pivotIndex > currentCompareIndex)
    {
        if (array[currentCompareIndex] > array[pivotIndex])
        {
			int tempCurrentFromElement = array[currentCompareIndex];
			int tempPivotElement = array[pivotIndex];
			int tempPenultElement = array[pivotIndex - 1];

			array[pivotIndex - 1] = tempPivotElement;
			array[pivotIndex] = tempCurrentFromElement;
			array[currentCompareIndex] = tempPenultElement;

			pivotIndex--;
        } else {
			countOfMisses++;
			currentCompareIndex++;

			if (countOfMisses == pivotIndex)
				pivotIndex--;
		}

		printArray(array);
    }

	quickSort(array, currentCompareIndex, pivotIndex);
}

void printArray(int array[8])
{
	for (int i = 0; i < 8; i++)
	{
		cout << array[i];

		if (i == 7)
			cout << " - ";
	}
}
