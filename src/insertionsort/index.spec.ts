import InsertionSort from '@src/insertionsort'
import { randomArray } from '@src/utils/data'

test('should sort the given array with insertion sort strategy', () => {
	const insertionSort = new InsertionSort(randomArray)

	insertionSort.sort()

	expect(insertionSort.result()).toEqual(randomArray.sort())
})
