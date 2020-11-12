/*
TITLE: Roman Numerals Encoder
NOTE: Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

NOTE: Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

NOTE: Example: solution(1000); // should return 'M'

NOTE: HELP
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

NOTE: Remember that there can't be more than 3 identical symbols in a row.
*/

const solution = number => {
	/*
	// const numbersArray = String(number).split('').reverse()
	// let numerals = []

	// for (let i = 0; i < numbersArray.length; i++) {
	// 	numerals.push(getRomanNumeral(Number(numbersArray[i]), i))
	// }

	// function getRomanNumeral(number, index) {
	// 	let range = []
	// 	let romanNumeral = []

	// 	switch (index) {
	// 		case 0:
	// 			range = ['I', 'V', 'X']
	// 			break
	// 		case 1:
	// 			range = ['X', 'L', 'C']
	// 			break
	// 		case 2:
	// 			range = ['C', 'D', 'M']
	// 			break
	// 		case 3:
	// 			range = ['M']
	// 			break
	// 		default:
	// 			break
	// 	}
	// 	if (index < 3) {
	// 		switch (true) {
	// 			case number <= 3:
	// 				for (let i = 1; i < number + 1; i++) {
	// 					romanNumeral.push(range[0])
	// 				}
	// 				break
	// 			case number < 5:
	// 				romanNumeral.push(range[0])
	// 				romanNumeral.push(range[1])
	// 				break
	// 			case number == 5:
	// 				romanNumeral.push(range[1])
	// 				break
	// 			case number < 9:
	// 				romanNumeral.push(range[1])
	// 				for (let i = 5; i < number; i++) {
	// 					romanNumeral.push(range[0])
	// 				}
	// 				break
	// 			case number == 9:
	// 				romanNumeral.push(range[0])
	// 				romanNumeral.push(range[2])
	// 				break
	// 			default:
	// 				break
	// 		}
	// 	} else {
	// 		for (let i = 1; i < number + 1; i++) {
	// 			if (i < 4) romanNumeral.push(range[0])
	// 		}
  //   }
	// 	return romanNumeral.join('')
	// }
	// return numerals.reverse().join('')
  BETTER SOLUTION
  */
	const conversion = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
  }

  let result = ''
  
  while(number>0){
    for(roman in conversion) {
      if(conversion[roman]<=number){
        result = result + roman
        number = number - conversion[roman]
        break
      }
    }
  }

  return result
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		console.log(solution(element))
	})
}

const testSamples = [
	1,
	2,
	3,
	4,
	5,
	9,
	10,
	11,
	19,
	22,
	15,
	1000,
	1001,
	1990,
	2007,
	2008
]

runTestSubjects(testSamples)

/*
-- RESULTS
1=I
2=II
3=III
4=IV
5=V
9=IX
10=X
11=XI
19=XIX
22=XXII
15=XV
1000=M
1001=MI
1990=MCMXC
2007=MMVII
2008=MMVIII
*/
