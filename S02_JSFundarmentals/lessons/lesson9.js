// Class and Methods

// import { CustomerDetails } from "../helpers/printHelper.js";  // Import the whole class definition.
import { customerDetails } from "../helpers/printHelper.js" // Just import the instance of the class (object) here.


// var customerDetails = new CustomerDetails()  //Constructor can be moved to the Class definition location itself. (printHelper.js)
// customerDetails is an instance of the CustomerDetails Class; aka an object of it.

customerDetails.printFirstName('Steve')
customerDetails.printLastName('Smith')
console.log("=====")