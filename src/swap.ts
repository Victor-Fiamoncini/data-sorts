export default function swap(
	array: number[],
	firstPosition: number,
	secondPosition: number
): void {
	const tempElement = array[firstPosition]

	array[firstPosition] = array[secondPosition]
	array[secondPosition] = tempElement
}
