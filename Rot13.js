/*
TITLE: Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const rot13 = message => {
	const number = 13
	let result = ''
	message.split('').map((letter,index)=>{
		result += getRot13(letter)
	})
	function getRot13(letter) {
		let char = letter.charCodeAt(0)
		const alphaCharLimits = [
			{ min: 65, max: 90 },
			{ min: 97, max: 122 }
		]
		for (let i = 0; i < alphaCharLimits.length; i++) {
			const { min, max } = alphaCharLimits[i]
			if (char >= min && char <= max) {
				char = (char + number > max) ? char + number - max + (min - 1) : char + number
			}
		}
		return String.fromCharCode(char)
	}
	return result
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { input, answer } = element
		const result = rot13(input)
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
		input: 'grfg',
		answer: 'test'
	},
	{
		input: 'Grfg',
		answer: 'Test'
	}
]
runTestSubjects(testSamples)
