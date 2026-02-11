// Declarative Function
helloOne()
function helloOne(){
    console.log('Hello one!')
}
helloOne()
console.log('=====')

// Anonoymous Function
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()
console.log('=====')

// ES6 function or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()
console.log('=====')

// Function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('Mike', 'Smith')
console.log('=====')

// Function with Return Value
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log('myResult == ' + myResult)
console.log('=====')

// Import one function from a js file.
import {printAge} from '../helpers/printHelper.js'
printAge(5)
console.log('=====')

// Import all functions from a js file.
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)
console.log('=====')