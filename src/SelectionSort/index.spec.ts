import SelectionSort from '@src/selectionsort'
import { reversedArray } from '@src/utils/data'

test('should sort the given array with selection sort strategy', () => {
	const selectionSort = new SelectionSort(reversedArray)

	selectionSort.sort()

	expect(selectionSort.result()).toEqual(reversedArray.sort())
})
