for (var i=1; i<=5; i++) {
    setTimeout(function() {console.log(i)} ,1000)
}
/* we are passing reference , not the actual value at the moment ( before executing the setTimeout , for loop is already executed )
use let and verify once */





let getColor = (message, ...colors) => {
    console.log(message)
    // we can add any number of parameters without effecting the for loop

    console.log(colors)

    // rest operator converts all to array --- and as a single argument
    for (let i in colors) {
        console.log(colors[i])
    }
}
let message = 'List of Colors '
getColor(message, 'red', 'green')

// spread operator --- used in fuctional call
let colorArray = ['red', 'green']
getColor(message, ...colorArray)







// Object literals 
let ln = 'last name'
let person = {
    'first name': 'Narasimha',
    [ln]: "Reddy"
}
console.log(person)








// class --- new
class Person {
    greet(){}
}
let p = new Person()
console.log(p.greet === Person.prototype.greet)

console.log(typeof Person)
// adding a method to object is same as adding a method to prototype object







// class body {body} --- can contain only methods not properties 
// 1. constructor method --- is used for creating and initializing an object ( only be 1 constructor for class ) --- invoked as soon as we instantiated class with new.
// 2. Static method --- called without instantiating the class ( called directly from class )--- use static keyword and name of method
// 3. prototype method -- called with each object


class Person1 {
    constructor(name) {
        this.name = name
        console.log(`Hello ${this.name} - Constructor `)
    }
    static staticMethod() {
        console.log('Static - Called directly from class')
    }
    prototypeMethod() {
        console.log(`Hello ${this.name} - Prototype`)
    }
}

let p1 = new Person1("Narasimha")
Person1.staticMethod();
p1.prototypeMethod()





// Inheritance

class Name {
    constructor(name) {
        console.log( name + ' Inheritance')
    }
}
class MyName extends Name {

}
let myName1 = new MyName('Narasimha')

//
class FullName {
    constructor(fullName) {
        console.log( fullName + ' Inheritance')
    }
    getID() {
        return 10
    }
}
class MyFullName extends FullName {
    constructor(fullName) {
        super(fullName);
        console.log(fullName + ' Child Component')
    }
}
let myName2 = new MyFullName('Narasimha')
console.log(myName2.getID())

// extends is used inherit from parent class 
// A parent class constructor needs to be called before the sub-class constructor
// so super -- keyword is going to invoke the constructor of parent class
// when the derived has a method , it will access that or it will check for parent class

// How we can access parent methods from child ????
// ---- In child method --- getID() { return super.getID() }





// modules in ES6 -- separation of concern
// named and default exports
// import { exportFirstName as a ,exportLastName as l, obje} 

// import statements are hoisted , imports are read only, but when export is object we can change values in them


// if there is only 1 export --- export default , no use of curly braces while import and no need of same name as imported
// We can also use alias ---- but when mentioning alias use {} ---- import { Hello as f } from ---





// Iterating on objects -- for-of --Will give error.


// Generators --is a special fun , which can be paused in middle of execution , run some other code and can resume the same fun where we left off
// with help of yield keyword

function *createGenerator() {
    yield 1;

    console.log('After 1st Yield')

    yield 2;
}

let myGen = createGenerator();

console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next()) // -- done is set to true ( when no more yields )

// when do we use ? ---

const person20 = {
    firstName: 'Nara',
    secName: 'simha'
}

person20[Symbol.iterator] = function*() {
    let properties = Object.keys(person20);

    for (let t of properties) {
        yield this[t]
    }
};

for (let p of person20) {
    console.log(p)
}



// definitions

/* “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. 
A comp with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic */

/* Evaluating function with multiple arguments, into sequence of functions with single argument --- Currying*/

function multiple(a){
    return (b) => {
        return (c) => {
            return a*b*c
        }
    }
}

console.log(multiple(1)(2)(3))

// If we return nothing from the function -- will gives undefined
// executed from console --- when first inner fun completed its execution when going to above fun, all related to inner will be destroyed

var first1 = 10
function closureOuter() {
    var second = 20
    var forth = 40
    function closureInner() {
        var third = 30
        console.log(first1+second+third)

        second++;
        third++;
    }
    return closureInner
}

let closureInst = closureOuter()
closureInst()  // -- closures


console.log(closureOuter()())
console.log(closureInst())
console.log(closureInst)
console.dir(closureInst) // fun inner() {}




// If inner function access the variables and params of outer function then only it is called closure.( scope chain )
// The combi of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In JavaScript, closures are created every time a function is created, at function creation time.
// Inner fun remembers the enviroment in which it is created (has access to- own scope {}, outer fun's variable, global variables)





// Lexical Scoping --- 

/* A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another 
function defined after the variable declaration. But the opposite is not true */



/* Prop drilling (threading) refers to the process we have to go through to get data to parts of the React Component tree. */






// Function Scope -- The variable message is accessible inside of the function scope, but inaccessible outside

function returnName() {
    const firstName = 'Narasimha'

    if (true) {
        // block scope
        const lastName = 'Reddy'
        console.log(firstName)
    }
    // console.log(lastName) --- will give error
}
returnName()



// compose function in JS --- executes from right to left
const compose = (a,b,c) => (data) => a(b(c(data)))

const mulBy3 = (num) => {return num*3}
const mulBy4 = (num) => {return num*4}
const mulBy5 = (num) => {return num*5}


const getNumber2 = compose(mulBy3, mulBy3, mulBy5)
console.log(getNumber2(5))






// Max characters

const strToObj = (str) => {
    let obj = {}

    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    return obj
}

const getMax = (obj) => {
    let maxCount = 0
    let resultCount

    for (let key in obj) {
        if (obj[key] > maxCount){
            maxCount = obj[key]
            resultCount = key
        }
    }
    return resultCount
}

console.log(getMax(strToObj('hello world')))