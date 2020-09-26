import BubbleSort from '@src/BubbleSort'
import { randomArray } from '@src/utils/factory'

test('should sort the given array with bubble sort strategy', () => {
	const bubbleSort = new BubbleSort(randomArray)

	bubbleSort.sort()

	expect(bubbleSort.result()).toEqual(randomArray.sort())
})
