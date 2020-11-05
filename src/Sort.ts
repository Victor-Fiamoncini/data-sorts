abstract class Sort {
	constructor(protected array: number[]) {}

	result(): number[] {
		console.log(`Sorted array: ${this.array.join(', ')}`)

		return this.array
	}

	protected swap(first: number, second: number): void {
		const tempElement = this.array[first]

		this.array[first] = this.array[second]
		this.array[second] = tempElement
	}
}

export default Sort
