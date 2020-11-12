/*
TITLE: Human Readable Time
NOTE: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59

NOTE: The maximum time never exceeds 359999 (99:59:59)
*/

const humanReadable = seconds => {
  if (seconds > 359999) return '99:59:59'
  
  const pad = value => value.length < 2 ? '0' + value : value

	let HH = pad(String(seconds / 60 ** 2).split('.')[0])
	let MM = pad(String((seconds % 60 ** 2) / 60).split('.')[0])
	let SS = pad(String((seconds % 60 ** 2) % 60))

	return HH + ':' + MM + ':' + SS
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { input, answer } = element
		const result = humanReadable(input)
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
		input: 0,
		answer: '00:00:00'
	},
	{
		input: 5,
		answer: '00:00:05'
	},
	{
		input: 60,
		answer: '00:01:00'
	},
	{
		input: 86399,
		answer: '23:59:59'
	},
	{
		input: 359999,
		answer: '99:59:59'
	}
]
runTestSubjects(testSamples)
