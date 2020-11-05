import Quicksort from '@src/quicksort'
import { randomArray } from '@src/utils/data'

test('should sort the given array with quick sort strategy', () => {
	const quickSort = new Quicksort(randomArray)

	quickSort.sort(randomArray, 0, randomArray.length)

	expect(quickSort.result()).toEqual(randomArray.sort())
})
