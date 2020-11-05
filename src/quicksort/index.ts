import Sort from '@src/Sort'

class QuickSort extends Sort {
	sort(array: number[], start = 0, end = array.length): void {
		if (start < end) {
			const pivot = this.partition(array, start, end)

			this.sort(array, start, pivot - 1)
			this.sort(array, pivot + 1, end)
		}
	}

	private partition(array: number[], start: number, end: number) {
		const pivot = array[end]
		let i = start

		for (let j = start; j < end - 1; j++) {
			if (array[j] <= pivot) {
				const tempJ = array[j]

				array[j] = array[i]
				array[i] = tempJ

				i++
			}
		}

		const tempi = array[i]

		array[i] = array[end]
		array[end] = tempi

		return i
	}
}

export default QuickSort
