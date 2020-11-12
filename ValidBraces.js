/*
TITLE: VALID BRACES
NOTE: Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
NOTE: All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
NOTE: A string of braces is considered valid if all braces are matched with the correct brace.
*/

const validBraces = braces => {
  /*
    // const openBrackets = ['(', '[', '{']
    // const closeBrackets = [')', ']', '}']
    // let updatedBraces = [...braces]

    // function updateBraces() {
    //   if (updatedBraces.length < 1) return
    //   const startLength = updatedBraces.length
    //   for (let i = 1; i < updatedBraces.length; i++) {
    //     for (let j = 0; j < openBrackets.length; j++) {
    //       if (updatedBraces[i - 1] === openBrackets[j] && updatedBraces[i] === closeBrackets[j]) {
    //         updatedBraces[i - 1] = null
    //         updatedBraces[i] = null
    //       }
    //     }
    //   }
    //   updatedBraces =  updatedBraces.filter(Boolean)
    //   const endLength = updatedBraces.length
    //   if (startLength != endLength) updateBraces()
    // }

    // updateBraces()
    // return Boolean(!updatedBraces.length)
  BETTER SOLUTION
  */

  while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
  return !braces.length;
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		console.log(validBraces(element))
	})
}

// const testSamples = ['([{}])']
const testSamples = ['(){}[]', '([{}])', '(}', '[(])', '[({})](]']
runTestSubjects(testSamples)

/*
-- RESULTS
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/