// Object Literals
let mobile = {username: 'Narasimha'}





// Object.create()
let mobile2 = Object.create({})
mobile2.username = 'Narasimha'






// using functions to create objects ---- every function is an object
function Mobile() {
    return 'mobile';
}

let mobile3 = new Mobile()
mobile3['username'] = 'Narasimha'






// Using classes
class Mobile1 {

}
let mobile4 = new Mobile1();
mobile4.username = 'Narasimha'

console.log(mobile)
console.log(mobile2)
console.log(mobile3)
console.log(mobile4)






// Creating Class

class Mobile{
    constructor(username) {
        this.username = username
    }
    //get Methods
    calling() {
        console.log('Calling')
    }

    // set methods
    setName(newName) {
        this.username = newName
    }
}

// creating/Instantiating objects by using class
let redmi = new Mobile('Redmi Note 7')

// getting/setting properties and actions with created object
console.log(redmi.username)

redmi.calling()
redmi.setName('Redmi Note 9')

console.log(redmi.username)
// using encapsulation we can restrict that changings