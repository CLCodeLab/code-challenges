/*
TITLE: ROW SUM ODD NUMBERS
NOTE: Given the triangle of consecutive odd numbers, find the sum of each row:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
*/

const rowSumOddNumbers = n => {
	return Math.pow(n, 3)
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		console.log(rowSumOddNumbers(element))
	})
}

const testSamples = [1, 2, 3, 4, 5, 42]
runTestSubjects(testSamples)

/*
-- RESULTS
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/
