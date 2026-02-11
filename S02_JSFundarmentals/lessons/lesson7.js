// Loops

// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')
// console.log('Hello World!')

// for(statement1; statement2; statement3){
//     //statement1: What to start the loop with.
//     //statement2: The condition to stop the loop.
//     //statement3: What to do after each iteration of the loop is run.
// }

for (let i = 0; i < 5; i++) {
    console.log('Hello World!' + i)
}
console.log ('=====')
////
var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for (let car of cars){
    console.log(car)
    if (car = "Toyota"){
        break
    }
}
console.log ('=====')
////
// ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})