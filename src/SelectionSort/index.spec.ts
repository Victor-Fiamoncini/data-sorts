import SelectionSort from '@src/SelectionSort'
import { reversedArray } from '@src/utils/factory'

test('should sort the given array with selection sort strategy', () => {
	const selectionSort = new SelectionSort(reversedArray)

	selectionSort.sort()

	expect(selectionSort.result()).toEqual(reversedArray.sort())
})
