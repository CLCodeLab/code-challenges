/*
TITLE: Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.

Write a function that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
*/

const validSolution = board => {
	return evaluateRows() && evaluateCols() && evaluateSquares()

	function evaluateRows() {
		for (let i = 0; i < 9; i++) {
			if (!validateArray(board[i])) return false
		}
		return true
	}

	function evaluateCols() {
		for (let i = 0; i < 9; i++) {
			let columnArray = []
			for (let j = 0; j < 9; j++) {
				columnArray.push(board[j][i])
			}
			if (!validateArray(columnArray)) return false
		}
		return true
	}

	function evaluateSquares() {
		for (let j = 0; j < 7; j = j + 3) {
			for (let i = 0; i < 7; i = i + 3) {
				if (!validateSquares(j, i)) return false
			}
		}

		return true

		function validateSquares(row, col) {
			let squareArray = []
			for (let j = row; j < row + 3; j++) {
				for (let i = col; i < col + 3; i++) {
					squareArray.push(board[j][i])
				}
			}
			return validateArray(squareArray)
		}
	}

	function validateArray(checkArray) {
		let resultArray = [...checkArray]
		for (let i = 1; i < 10; i++) {
			for (let j = 0; j < resultArray.length; j++) {
				if (i == resultArray[j]) {
					resultArray.splice(j, 1)
					break
				}
			}
		}
		return !resultArray.length
	}
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		const { input, answer } = element
		const result = validSolution(input)
		const isCorrect = answer == result
		console.log(
			// 	'input:',
			// 	input,
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
		input: [
			[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 5, 3, 4, 8],
			[1, 9, 8, 3, 4, 2, 5, 6, 7],
			[8, 5, 9, 7, 6, 1, 4, 2, 3],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 6, 1, 5, 3, 7, 2, 8, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 4, 5, 2, 8, 6, 1, 7, 9]
		],
		answer: true
	},
	{
		input: [
			[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 0, 3, 4, 8],
			[1, 0, 0, 3, 4, 2, 5, 6, 0],
			[8, 5, 9, 7, 6, 1, 0, 2, 0],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 0, 1, 5, 3, 7, 2, 1, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 0, 0, 4, 8, 1, 1, 7, 9]
		],
		answer: false
	},
	{
		input: [
			[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 5, 3, 4, 8],
			[5, 9, 8, 3, 4, 2, 1, 6, 7],
			[8, 5, 9, 7, 6, 1, 4, 2, 3],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 6, 1, 5, 3, 7, 2, 8, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 4, 5, 2, 8, 6, 1, 7, 9]
		],
		answer: false
	}
]
runTestSubjects(testSamples)
