/* Encapsulation/Data-hiding is a functionality to hide the data in a single unit along with a functionality to protect info from outside */

// Use var/let/const keyword to make data members private ----- setter, getter methods to set, get the data


/* OOPS -- Object Oriented Programming System or Paradigm

Implements real-world scenarios like inheritance, hiding, polymorphism--

Smalltalk is considered as the first truly OOPL
Java, C#, PHP, Python, C++, JS etc .,. ---- Popular OOPL


Object--- Is a real-world entity ( car, mobile, cat ---)
Actions --- Functions
Class -- Blueprint for creating objects ( can create any num of objects and actions by using Classes ) */

// constructor -- using for reference to class name -- since we can't parameters to class 

// Creating Encapsulation class
class Bank {
    constructor(name, account_no, account_type) {
        this.name = name;
        this.account_no = account_no;
    }
    getName() {
        return this.name
    }
    getAccountNumber() {
        return this.account_no
    }

    // set methods
    setName(newName) {
        this.name = newName
    }

    setAccountNumber() {
        this.account_no = Math.floor(Math.random()*90000000000)
    }
}

let newBankAccount = new Bank('Narasimha', null)


console.log(newBankAccount.getName())

newBankAccount.setAccountNumber()
console.log(newBankAccount.getAccountNumber())


console.log(newBankAccount.name) //  accessing directly 

newBankAccount.setName('Reddy')
console.log(newBankAccount.name)  // Here we are changing directly and accessing , it's not possible in real world


newBankAccount.account_no = 123
console.log(newBankAccount.getAccountNumber())  // someother is changing directly
// No Encapsulation till here , because



// Ecapsulation

// replace this in constructor with var --- add all methods in constructor with this. and use arrow function

class Bank1 {
    constructor(name, account_no, account_type) {
        var name = name;
        var account_no = account_no;

        this.getName = () => {
            return name
        }
        this.getAccountNumber = () => {
            return account_no
        }
    
        // set methods
        var setName = (newName) => {
            name = newName
        }
    
        this.setAccountNumber = () => {
            account_no = Math.floor(Math.random()*90000000000)
        }
    }
}

/* By providing only this keyword to methods -- we are only giving access to methods only  */

let newBankAccount1 = new Bank1('Narasimha', null)


newBankAccount1.setAccountNumber()
console.log(newBankAccount1.getAccountNumber())


newBankAccount1.account_no = 123 // --- will not be changes
console.log(newBankAccount1.getAccountNumber())  // someother is changing directly

// capsule , calculator --- encapsulation real-life examples
// It can also hide methods  --- providing var

