import swap from '../swap'

export default function main(): void {
	const myArray = [4, 7, 2, 5, 4, 0]

	insertionSort(myArray)

	console.log(`Sorted array: ${myArray.join(', ')}`)
}

function insertionSort(array: number[]) {
	array.forEach((_, i) => {
		array.forEach((_, j) => {
			if (array[j] > array[i]) {
				swap(array, i, j)
			}
		})
	})
}
