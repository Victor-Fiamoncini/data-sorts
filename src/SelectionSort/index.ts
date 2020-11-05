import Sort from '@src/Sort'

class SelectionSort extends Sort {
	sort(): void {
		const arraySize = this.array.length

		for (let i = 0; i < arraySize - 1; i++) {
			let smallestValueIndex = i

			for (let j = i; j < arraySize; j++) {
				if (this.array[j] < this.array[smallestValueIndex]) {
					smallestValueIndex = j
				}
			}

			if (this.array[i] > this.array[smallestValueIndex]) {
				this.swap(i, smallestValueIndex)
			}
		}
	}
}

export default SelectionSort
