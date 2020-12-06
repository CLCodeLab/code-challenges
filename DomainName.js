/*
TITLE: Extract the domain name from a URL
NOTE: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

const domainName = url => {
  const urlStart = ['https://', 'http://', 'www.']
	urlStart.forEach(eachUrl => {
    if (!url.indexOf(eachUrl)) url = url.slice(eachUrl.length)
  })
  return url.split('.')[0]
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { input, answer } = element
		const result = domainName(input)
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
		input: 'http://google.com',
		answer: 'google'
	},
	{
		input: 'http://google.co.jp',
		answer: 'google'
	},
	{
		input: 'www.xakep.ru',
		answer: 'xakep'
	},
	{
		input: 'https://youtube.com',
		answer: 'youtube'
	},
	{
		input: 'http://github.com/carbonfive/raygun',
		answer: 'github'
	},
	{
		input: 'http://www.zombie-bites.com',
		answer: 'zombie-bites'
	},
	{
		input: 'https://www.cnet.com',
		answer: 'cnet'
	}
]
runTestSubjects(testSamples)
