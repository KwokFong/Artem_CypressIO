export function printAge(age){
    console.log('age = ' + age)
}

// export class CustomerDetails{
//     printFirstName(firstName){
//         console.log(firstName)
//     }

//     printLastName(lastName){
//         console.log(lastName)
//     }

class CustomerDetails{  // No need to export the class when the Contructor line is within the same file.
    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print the last name.
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

export const customerDetails = new CustomerDetails()  // Moved Contructor to where the class definition is.