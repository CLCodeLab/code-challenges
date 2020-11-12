/*
TITLE: Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


*/

const moveZeros = arr => {
	/*
	let result = []
	let padNumber = 0
	arr.forEach(element => {
    element === 0 ? padNumber++ : result.push(element)
	})
	if (padNumber) {
		for (let i = 0; i < padNumber; i++) {
			result.push(0)
		}
  }
  return result
  BETTER RESULTS
  */
	return arr
		.filter(number => number !== 0)
		.concat(arr.filter(number => number === 0))
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { input, answer } = element
		const result = moveZeros(input)
		const isCorrect = answer.join(',') == result.join(',')
		console.log(
			'input:',
			input,
			' | result:',
			result,
			'(answer:',
			answer,
			') [Correct?',
			isCorrect,
			']'
		)
	})
}

const testSamples = [
	{
		input: [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
		answer: [false, 1, 1, 2, 1, 3, 'a', 0, 0]
	},
	{
		input: [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
		answer: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
	}
]
runTestSubjects(testSamples)
