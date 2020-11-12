/*
TITLE: TITLE
NOTE: NOTE
*/

const FUNCTIONNAME = ARGUMENT => {

  //CODE HERE...

}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { input, answer } = element
		const result = FUNCTIONNAME(input)
		const isCorrect = answer == result
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
		input: 'X',
		answer: 'X'
	},
	{
		input: 'Y',
		answer: 'Y'
	},
	{
		input: 'Z',
		answer: 'Z'
	}
]
runTestSubjects(testSamples)