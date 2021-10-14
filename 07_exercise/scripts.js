

function reverseNumber(inpuntNumber) {
    inpuntNumber += "";
	return Number(inpuntNumber.split("").reverse().join(""));
}

reverseNumber(1234)
// Input: 1234 
// Output: 4321 

reverseNumber(100000000)
// Input: 100000000 
// Output: 1 

reverseNumber(-321)
// Input: -321 
// Output: -123