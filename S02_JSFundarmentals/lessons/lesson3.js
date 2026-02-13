//Objects and Arrays

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer)
// Dot Notation
console.log(customer.firstName)
// Bracket Notation
console.log(customer['lastName'])

customer.firstName = "Mike"
customer['lastName'] = 'Silver'
console.log(`${customer.firstName}, ${customer.lastName}`)


//Arrays
var car = ["Volvo", "Toyota", "Tesla"]
console.log(car)
car[1] = "BMW"
console.log(car[0])
console.log(car[1])
console.log(customer.cars[0])