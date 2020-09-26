/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Sort from '@src/Sort'

class QuickSort extends Sort {
	public sort(array = this.array, from = 0, to = this.array.length) {
		let countOfMisses = 0
		let currentCompareIndex = from
		let pivotIndex = to

		while (pivotIndex > currentCompareIndex) {
			if (array[currentCompareIndex] > array[pivotIndex]) {
				this.swap(pivotIndex, pivotIndex - 1)

				if (currentCompareIndex + 1 < pivotIndex) {
					this.swap(currentCompareIndex, pivotIndex)
				}

				pivotIndex--
			} else {
				currentCompareIndex++
				countOfMisses++

				if (countOfMisses === pivotIndex) {
					pivotIndex--
				}
			}
		}

		const leftArrayFrom = 0
		const leftArrayTo = pivotIndex - 1

		if (leftArrayTo > 1) {
			this.sort(array, leftArrayFrom, leftArrayTo)
		}

		const rightArrayFrom = pivotIndex + 1
		const rightArrayTo = array.length - 1

		if (rightArrayFrom < to) {
			this.sort(array, rightArrayFrom, rightArrayTo)
		}
	}
}

export default QuickSort
