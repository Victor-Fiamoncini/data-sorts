// import swap from '../swap'

// export default (): void => {
// 	const myArray = [1, 4, 5, 1, 3, 4, 2, 6]

// 	quickSort(myArray, 0, myArray.length - 1)

// 	console.log(`Sorted array: ${myArray.join(', ')}`)
// }

// function quickSort(array: number[], fromIndex: number, toIndex: number) {
// 	let countOfMisses = 0
// 	let currentCompareIndex = fromIndex
// 	let pivotIndex = toIndex

// 	while (pivotIndex > currentCompareIndex) {
// 		if (array[currentCompareIndex] > array[pivotIndex]) {
// 			swap(array, pivotIndex, pivotIndex - 1)

// 			if (currentCompareIndex + 1 < pivotIndex) {
// 				swap(array, currentCompareIndex, pivotIndex)
// 			}

// 			pivotIndex--
// 		} else {
// 			currentCompareIndex++
// 			countOfMisses++

// 			if (countOfMisses === pivotIndex) {
// 				pivotIndex--
// 			}
// 		}
// 	}

// 	const leftArrayFromIndex = 0
// 	const leftArrayToIndex = pivotIndex - 1

// 	if (leftArrayToIndex > 1) {
// 		quickSort(array, leftArrayFromIndex, leftArrayToIndex)
// 	}

// 	const rightArrayFromIndex = pivotIndex + 1
// 	const rightArrayToIndex = array.length - 1

// 	if (rightArrayFromIndex < toIndex) {
// 		quickSort(array, rightArrayFromIndex, rightArrayToIndex)
// 	}
// }
