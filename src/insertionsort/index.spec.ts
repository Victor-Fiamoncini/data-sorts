import InsertionSort from '@src/InsertionSort'
import { randomArray } from '@src/utils/factory'

test('should sort the given array with insertion sort strategy', () => {
	const insertionSort = new InsertionSort(randomArray)

	insertionSort.sort()

	expect(insertionSort.result()).toEqual(randomArray.sort())
})
