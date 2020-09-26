import Quicksort from '@src/Quicksort'
import { randomArray } from '@src/utils/factory'

test('should sort the given array with quick sort strategy', () => {
	const quickSort = new Quicksort(randomArray)

	quickSort.sort()

	expect(quickSort.result()).toEqual(randomArray.sort())
})
