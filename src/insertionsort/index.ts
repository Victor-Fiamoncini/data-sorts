import Sort from '@src/Sort'

class InsertionSort extends Sort {
	sort(): void {
		const arraySize = this.array.length

		for (let i = 1; i < arraySize; i++) {
			const currentElement = this.array[i]
			let previousKey = i - 1

			while (this.array[previousKey] > currentElement && previousKey >= 0) {
				this.array[previousKey + 1] = this.array[previousKey]

				previousKey--
			}

			this.array[previousKey + 1] = currentElement
		}
	}
}

export default InsertionSort
