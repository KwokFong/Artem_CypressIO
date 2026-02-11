//Concatination & Interpolation
var price = 50
var itemName = "Cup"
var messageToPrint1 = "The price of your " + itemName + " is " + price + " dollars."
var messageToPrint2 = `Then price of your ${itemName} is ${price} dollars.` //Interpolation
console.log(messageToPrint1)
console.log(messageToPrint2)
