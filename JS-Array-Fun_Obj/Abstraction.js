// Abstraction --- Eg: Charging ( we don't bother what is happening inside )
/* method -- Shows only essential attributes and hides unnecessary information */

class Mobile{
    constructor(name, color, initialCharging) {
        this.name = name
        this.color = color
        this.initialCharging = initialCharging

        var currentCharging = 0

        var chargingDetails = (charge) => {
            currentCharging = this.initialCharging + charge

            if (currentCharging > 100) {
                // throw Error('Mobile is Fully Charged')
                console.log('100% Charged')
            }
            console.log('Current Chraging: ', currentCharging)
        }

        this.plugInChrage = (charge) => {
            chargingDetails(charge);
        }
    }
}

let redmi = new Mobile("Redmi Note 7", 'Black', 20)

redmi.currentCharging = 200
console.log(redmi.currentCharging) // getting 200 --- it's wrong we r not restricting

redmi.plugInChrage(90)

// hiding non-essential details






// Inheritance
/* Mechanism where you can derive a class from another class for a hierarchy of classes that share a set of attributes and methods */


class Person{
    constructor(name, designation){
        this.name = name;
        this.designation = designation;
    }
    learn() {
        console.log("Learning Something")
    }
}


// Single inheritance is possible --- in java, typescript using interfaces we can do multiple inheritance
class Developer extends Person {
    constructor(name, designation, companyName){
        super(name, designation);
        this.companyName = companyName
    }
    coding() {
        console.log('Coding')
    }
    learn() {
        console.log('Learning OOPS --- Method Overriding')
    }
}

let Narender = new Developer('Narender', 'Full Stack', 'Doodleblue')

let person = new Person('Human', 'Nothing')
console.log(Narender)
Narender.coding()
Narender.learn()
person.learn()

// Any components which extends React.Component class to create component is an example for Inheritance



// Polymorphism --- having many forms
/* Eg: Same Person can learn different things for different roles --- same method for different implementations */ 


// Method overloading-- Same function name with diff params---in JS it's not possible ( because it takes last function name --- overrides )

/* Any react component should have render() method , which will be overriden --- Example for polymorphism 

setState() is inherited from React.component class */

