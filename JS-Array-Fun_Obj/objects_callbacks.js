// Bool, Numb, Str can be Objects , if defined with new keyword 
// Dates, RegExp, Maths, Arrays, Fun, Obj are always objects

// In JS, Primitives Data types ( Which is not an Object and has no methods -(string, num, bool, null, undefined, bigint, symbol )) are not objects.
// Non-Primitive (Reference Type) -- Object, Array, RegExp

// using object literals -- Use for readabily and execution speed






const person1 = new Object(); // using keyword new
person1.name = "Mani";
person1.age = 40;





// Object.create()
const person10 = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person10);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
person10.printIntroduction();







// Creating Obj With Class
class MyCar {
  constructor(fiName){
    this.fiName = fiName
  }
  getInfo() {
    console.log(this.fiName)
  }
}
var myCar1 = new MyCar('Narasimha')
myCar1.getInfo()











// JS Objects and Arrays are mutable (chnging state) --- but whole Object/Array can't be replaced
// Valid identifiers as keys --- Alphanumeric, _ , $ ( Invalid: Must not start with num ) --to use invalid one , use quotes.(“1”, “my name”)
const person2 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue" // age is changed
  }

  const x = person2;
  x.age = 10; 

// for-in loop will be executed once for item in the object --- for-in gives index -nested arrays and objects ---can be accessed 

person2.nationality = "Indian"; // adding (if not) , modifies (if already in Obj)
person2['age'] = 25;

delete person2.lastName; // modifies and returns the objectt

console.log(person2);








// nested objects
const person4 = {
   name:"John",
   age:30,
   cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
let p1 = 'cars';
let p2 = 'car1';
// can be accessed in many ways
console.log(person4.cars.car1)
console.log(person4.cars["car2"]);
console.log(person4[p1][p2]);









// Defining Obj Type
function CarName(model) {
  this.model = model
}
var carName = new CarName("Narasimha") // Creating an instance
console.log(carName instanceof CarName)

var proto = Object.getPrototypeOf(carName)
console.log(proto.constructor)


/* where function's prototype property is accessible, modifiable and object's prototype property is not visible. */

/* Every function and object includes prototype object by default. It is special enumerable object (cannot be iterate using for..in 
or foreach loop) to which additional props can be attached and which will be shared across all instances of it's constructor fun */

// delete keyword doesn't delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from prototype.







// JS Object Methods (contains function definition )
const person6 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,     // this refers to owner of the function
    fullName: function() {
      return this.firstName + " " + this.lastName; 
    }
};
console.log(person6.fullName); // returns function definition
console.log(person6.fullName());

// Displaying Object Properties

console.log(person6.firstName + " " + person6['lastName']); // or display using for-in loop , must user person[x] because x is a variable
console.log(Object.values(person6));

// JSON.stringify(person) --- convert dates also to string --- will not stringify functions

// we can stringify fun , if we convert the function to string (using person.age.toString()) before stringifying the Object.
// JSON.stringify(myArray) --- for Arrays








// JS Object Constructors to create many Object functions
function Person7(fName, age, gender){
    this.fName = fName;
    this.age = age;
    this.gender = gender;
    this.changeName = function(oriName) {
        this.fName = oriName;
    }
}

const myFather = new Person7("John", 50, "Male"); // call with new keyword
const myMother = new Person7("Sally", 45, "Female");

myFather.state = "Telangana"; // added to myFather object only

Person7.prototype.fullName = function() {
  return this.fName + " " + this.age;
}

console.log(myMother.fullName());
console.log(myFather);
console.log(myMother);
 
myFather.changeName("Venkat"); // adding prop to constructor
console.log(myFather.fName);








// factory function -- return new object on every function call {} -- object literals -- when same key 
function createCar(color, brand) {
  return {
    color,
    brand: brand,
    start: function() {
      console.log("started");
    }
  };
}

let car1 = createCar("blue", "Audi");
console.log(car1); 







// Math() is a global function -- new keyword is not used on Math
// All JS Objects inherit methods and properties from a method prototype.

// We can't add a new property to an existing object constructor. ( To add, we must add it to the constructor function )

//Date objects, Array objects, and Person objects inherit from Object.prototype.
// prototype allow us to add new properties to object constructor.






// Converting Objects to Arrays
const person20 = {
  fName: "Na",
  sName: "Re",
  fulName: function() {
      return this.fName + " " + this.sName;
  }
}

let obj = Object.entries(person20); // Ecma Script 2017 --- ( 2015 - Object.keys() - for keys and Object.values() - for values )
console.log(obj);
console.log(typeof(obj))
console.log(Array.isArray(obj));

// Iteration
const itera = {
  iterName: "Ram",
  iterAge: 20,
  iteraFull: function() {
    return this.iterName + ' age is ' + this.iterAge;
  }
}

for (let key in itera){
  console.log(`${key}: ${itera[key]}`) // for-of is not used
}

Object.entries(itera).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// getOwnPropertyNames()  or keys() -- return keys ( except for one which use Symbol )
Object.getOwnPropertyNames(itera).forEach(key =>
  console.log(`${key}: ${itera[key]}`)
);

// using spread operator -- if obj have same property name , then first obj (name) will be overwrited by last-one.

// using Object.assign({}, objectName)
// let emp = Object.assign(obj1, obj2);

// let result = person.hasOwnProperty('key')  --- returns true/false -- toString as key will give false
// let result = 'key' in object -- true/ false --- toString as key will give true ( bcs it's a inherited property )






console.log(typeof null); //-- historical bug never be fixed






// null represents -- missing object
// undefined represents -- uninitialized variable
console.log(null == undefined) // true
console.log(null === undefined) // false







// When we want to add a new function in object -- we need to modify it in all the instances
// we can use prototype of an objects -- which will automatically reflect all the changes in the objects


// This is called prototype(JS Fun) object -- which has constructor property by default

/* prototype --- It's a property of JS Fun -- where we can do changes and reflect those in all the instances created
At each time we create a fun or obj in JS, JS engine add a prototype to it (prototype object -- has constructor prop by defaut)
This constructor prop points back to fun obj -- on which prototype obj is a property */






function Person12(name, age) {
  this.name = name;
  this.age = age;
}

Person12.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};


console.log(Person12.prototype);  // 2 args -- constructor and _proto_
console.log(Person12.prototype.constructor); // similar to fun ( points back to fun what we created )
// constructor again has prototype which refers to funtn prototype object -- so

console.log(Person12.prototype.constructor === Person12);
console.log(Person12.prototype === Person12.prototype.constructor.prototype);
// functionsPrototypeProperty === ObjectInstancePrototypeProperty

const Bob = new Person12("Bob", 20);

const Alex = new Person12("Alex", 25);

console.log(Alex.__proto__ === Bob.__proto__); // dunder proto -- using this is discouraged.
console.log(Person12.prototype === Bob.__proto__);



// Object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.
// object's prototype property is invisible. Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.
// constructor -----	Returns a function that created instance.
// __proto__ ---	This is invisible property of an object. It returns prototype object of a function to which it links to.

// valueOf() -- returns primitive value of the specified object

// Prototype Use ? --- 1) to find properties and methods of an object   2) to implement inheritance in JavaScript.


/* prototype chaining --- each object's prototype is linked to function's prototype object. If we change function's prototype 
then only new objects will be linked to changed prototype. All other existing objects will still link to old prototype of function.*/

function Student() {
  this.name = 'John';
  this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log('studObj1.age = ' + studObj1.age); // 15


Student.prototype = { age : 20 };

var studObj3 = new Student();
console.log('studObj3.age = ' + studObj3.age); // 20

console.log('studObj1.age = ' + studObj1.age); // 15

console.log(studObj3.toString())

/* Nearly all objects in JS are instances of Object i.e all the objects in JavaScript inherit the properties and methods 
from Object.prototype. This is called Prototype chaining. This is a mechanism to override or extend object behavior.*/


// new keyword builds an object of a function in JavaScript


const apple = {}
// alert(' ' + apple);

console.log(apple.__proto__);
console.log(apple.toString());
// built-in objects prototypes are attached to it
console.log(Object.prototype === apple.__proto__); // since const apple is same as const apple = new Object()


console.log(Object.prototype.constructor);
// like other functions this may not have __proto__

console.log(Object.prototype.__proto__); // null

/* When we look for a property of an object (including function declarations), the JS engine will first check the object 
itself for the existence of that property. If not found, it’ll go to the object’s prototype object and check that object.
If found, it’ll use that property else it will lookup on that prototype object’s prototype object,
If found (use), else lookup continues until it finds an object with a __proto__ property equal to null.
That is the JavaScript built-in object’s prototype object. Here it has set to null in order to terminate the prototype lookup chain. This is called the prototype chain. 
This is why we see undefined for the values which are not defined in any of the prototype type chain objects.*/





// Date objects inherit the properties from Date.prototype ( lly Array, Person) -- These all inherit from Object.prototype










// Immediate Invoked Function Expression (IIFE) -- use () operator to call the anonymous fun.
// Function expression that automatically invokes after completion of definition. () plays important role in IIFE pattern.


var userName = "Bill";

(function (name) {

  function display(name){

      console.log(name);
    }

    display(name);
})(userName);  
// without passing args we can use directly 

// eval() is a global function in JavaScript that evaluates a specified string as JavaScript code and executes it.

// Hoisting -- In JS, variable and function names can be used before declaring it. 
// JS compiler moves all declarations to top of the current scope ( not function expressions ) so that there will be no error

console.log(Sum(5, 5)); // 10

function Sum(val1, val2)
{
    return val1 + val2;
}


// Inner function can access variables and params of an outer function (cannot access arguments object of outer function)

// let exportFirstName = 'Narasimha';
// let exportLastName = "Reddy";
// let obje = {
//   fiiiName: 'Ram'
// }

// export {exportFirstName, exportLastName, obje}






// copy of an object
// a. Spread operator --- shallow copy
// b. Object.assign({}, food) -- shallow copy
// c. shallow clone -- first level are copied and second level are refered
// d. Deep clone (JSON.parse(JSON.stringify(obj))) --  it's a true copy of objects

/* A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
A shallow copy means that certain (sub-)values are still connected to the original variable.*/

// Javascript classes are templates for creating objects  -- built on prototypes
// These are similar to functions -- syntax has 2 components -- 

// class declaration  -- if redeclared it throws error --- not hoisted --- so first we need to define and access it
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);

// class expression  -- allows us redeclaration and constructor is optional -- not hoisted
// named or unnamed class expressions
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());


// code in {} is class body  -- to be executed in strict mode for increased performance
// constructor is a special function for creating and initializing an object created with a class.



// sub class extends super class
// (extends keyword is used in both class declaration and expression to create a class as a child of other class)
// 3 methods
// a. class a {constructor(name){}}  --- class b extends class a {constructor(name) {super(name)}}
// b. function based classes -- function A() {} -- A.prototype.funName = function() {} --- class b extends A { funName() {}}
// c. Object.setPrototypeOf(-,-) --- const A = { funName() {} } -- class B { constructor(name) {}} -- Object.setPrototypeOf(B.prototype, A)

// super keyword in subclass to call methods in super class -- super.speak() or this.speak()-- to invoke the parent class constructor

// static class methods are defined and called on class itself ( utility function )--- done only on an object class (not on object itself) -- these are called directly without any instance

class Car {
  constructor(name) {
    this.name = name;
  }
  engine() {
    console.log(this.name + 'has a very good engine');
  }
  static hello() {
    return "Hello ";
  }
}
class Audi extends Car {     // child/derived class
  safety() {
      console.log('Very safety');
    }
  }
let myCar = new Car("Ford");
console.log(Car.hello());
console.log(Audi.hello())


/* JS Callbacks ---It's a function passed into another function as an argument, which is then invoked inside the outer function
 to complete some action. used for execution of asynchronous operations */
// JS functions are executed in the sequence they are called.

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer); // only name of the function -- no paranthesis

// when function has to wait for execution of another function

// setTimeout(fun, 2000) -- time in milli-seconds

let seTimeId = setTimeout(function() {
  console.log("Hello Narasimha"); 
  clearTimeout(seTimeId);   
},1000);


// schedulers  --- setInterval and clearInterval
let counter = 0;
let setIntervalId = setInterval(function() {
  console.log(counter);  
  counter += 1;

  if (counter >= 3) {
      clearInterval(setIntervalId)
  }
}, 2000);  // -- execute every time in with the interval


// to cancel this -- we can close the browser or cancelling the schedule




/* callback hell --- It's a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous 
operations one after the other.By nesting callbacks in such a way, we easily end up with error-prone, hard to read,
and hard to maintain it is caused by poor coding practice only */


// callbacks are only done when doing I/O operations (downloads ...)


// axios is a open source that allows us to make HTTP request.  It has .get(), .post(), .delete() methods
// fetch methods -- GET(getting data), POST(create), PUT(update), DELETE.


// combining multiple .then's and .catch's -- is called promise chaining
// async() and await - modern way to handle promises

// callback bases -- setTimeout(), setInterval() and promise based -- fecth - are asynchronous operations

const fetch = require('node-fetch');
let options1 = {
  method: "GET"
}
const url1 = "https://apis.ccbp.in/jokes/random";

const doNetworkCall = async () => {
try {
  const response = await fetch(url1, options1);   // await axios.get(``)
  const jsonData = await response.json();
  console.log(jsonData);
} catch (error) {
  console.log(error);
}
};

doNetworkCall();

// async fun always returns promise


// function binding -- happens using bind() method -- we can bind an object to a common function -- so that function gives diff results when its need
