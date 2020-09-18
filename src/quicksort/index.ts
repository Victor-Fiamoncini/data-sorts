const myArray = [3, 7, 8, 5, 2, 1, 9, 5, 4]

quickSort(myArray, 0, 8)

function quickSort(array: number[], fromIndex: number, toIndex: number) {
	let countOfMisses = 0
	let currentCompareIndex = fromIndex
	let pivotIndex = toIndex

	while (pivotIndex > currentCompareIndex) {
		if (array[currentCompareIndex] > array[pivotIndex]) {
			swap(array, pivotIndex, pivotIndex - 1)

			if (currentCompareIndex + 1 < pivotIndex)
				swap(array, currentCompareIndex, pivotIndex)

			pivotIndex--
		} else {
			currentCompareIndex++
			countOfMisses++

			if (countOfMisses == pivotIndex) pivotIndex--
		}
	}

	const leftArrayFromIndex = 0
	const leftArrayToIndex = pivotIndex - 1
	const isLeftPivotArrayNotSorted = leftArrayToIndex > 1

	if (isLeftPivotArrayNotSorted)
		quickSort(array, leftArrayFromIndex, leftArrayToIndex)

	const rightArrayFromIndex = pivotIndex + 1
	const rightArrayToIndex = array.length - 1
	const isRightPivotArrayNotSorted = rightArrayFromIndex < toIndex

	if (isRightPivotArrayNotSorted)
		quickSort(array, rightArrayFromIndex, rightArrayToIndex)

	console.log('Array: ', array.toString())
}

function swap(array: number[], firstPosition: number, secondPosition: number) {
	const tempElement = array[firstPosition]

	array[firstPosition] = array[secondPosition]
	array[secondPosition] = tempElement
}
