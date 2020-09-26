import Sort from '@src/Sort'

class BubbleSort extends Sort {
	public sort(): void {
		const arraySize = this.array.length

		for (let i = 0; i < arraySize - 1; i++) {
			for (let j = 0; j < arraySize - 1; j++) {
				if (this.array[j] > this.array[j + 1]) {
					this.swap(j, j + 1)
				}
			}
		}
	}
}

export default BubbleSort
