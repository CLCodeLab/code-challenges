/*
TITLE: FRIEND
NOTE: Make a program that filters a list of strings and returns a list with only your friends name in it.
NOTE: If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
NOTE: EXAMPLE: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
NOTE: I.E.: friend ["Ryan", "Kieran", "Mark"] shouldBe ["Ryan", "Mark"]
NOTE: keep the original order of the names in the output.
*/

const friend = friends => {
	return [...friends].filter(friend => friend.length == 4)
}

function runTestSubjects(testSubjects) {
	testSubjects.map(element => {
		console.log(friend(element))
	})
}

const testSamples = [
	['Ryan', 'Kieran', 'Mark'],
	['Ryan', 'Jimmy', '123', '4', 'Cool Man'],
	['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'],
	['Love', 'Your', 'Face', '1']
]
runTestSubjects(testSamples)
