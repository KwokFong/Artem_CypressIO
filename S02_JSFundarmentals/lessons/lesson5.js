// Logical Operators

// Logical "AND"
console.log(true && true)  //All values have to be TRUE for expression to be TRUE.

// Logical "OR"
console.log(true || true)  //Any values should be TRUE for the expression to be TRUE.
console.log(false || true)  //Any values should be TRUE for the expression to be TRUE.

var ageIsMoreThanEighteen = false
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log(`This customer is eligible for DL: ${eligibilityForDriversLicense}.`)

// Logical "NOT"
console.log(!true)
console.log(6 !== 10)