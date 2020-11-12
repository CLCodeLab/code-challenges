/*
TITLE: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
*/

const sumDigPow = (a, b) => {
  let result = []
  for (let i = a; i < b+1; i++) {
    if(sumPow(i)) result.push(i)
  }

  function sumPow(number){
    const splitNumber = String(number).split('')
    let sum = 0
    for (let i = 0; i < splitNumber.length; i++) {
      const power = i+1
      const value = Number(splitNumber[i])**power
      sum += value
    }
    return sum == number ? true : false
  }
  return result
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { a, b, answer } = element
		const result = sumDigPow(a, b)

		const isCorrect = answer.join(',') == result.join(',')
		console.log(
			`(a, b): (${a}, ${b}), | result: ${result} (answer: ${answer}) [Correct? ${isCorrect}]`
    )
	})
}

const testSamples = [
	{
		a: 1,
		b: 10,
		answer: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	},
	{
		a: 1,
		b: 100,
		answer: [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
	},
	{
		a: 10,
		b: 100,
		answer: [89]
	},
	{
		a: 90,
		b: 100,
		answer: []
	},
	{
		a: 90,
		b: 150,
		answer: [135]
	},
	{
		a: 50,
		b: 150,
		answer: [89, 135]
	},
	{
		a: 10,
		b: 150,
		answer: [89, 135]
	}
]
runTestSubjects(testSamples)
