/*
TITLE: UNIQUE IN ORDER
NOTE: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
*/

const uniqueInOrder = iterable => {
  /*
	//  let splitString
	//  let result = []

	//   if (Array.isArray(iterable)) {
	//     splitString = iterable
	//   } else {
	//     splitString = iterable.split('')
	//   }

	//   for (let i = 0; i < splitString.length; i++) {
	//     const element = splitString[i]
	//     let previousElement = ''
	//     if (i > 0) previousElement = splitString[i -1]
	//     if (element !== previousElement) result.push(element)
	//   }
  // return result
  BETTER SOLUTION:
  */

	return [...iterable].filter((element, index) => element !== iterable[index - 1])
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		console.log(uniqueInOrder(element))
	})
}

const testSamples = ['AAAABBBCCDAABBB', 'ABBCcAD', [1, 2, 2, 3, 3]]

runTestSubjects(testSamples)

/*
-- RESULTS
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
