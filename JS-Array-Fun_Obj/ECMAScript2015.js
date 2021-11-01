// let  -- gives block scope {}, declared before use and can't be redeclared, can be initialized later
// Using a let variable, before the declaration it will give refereceError ( not defined ).




// Before ES6 we had only Global and Function scope, later let and const introduced which provides Block scope
// variables declared ( with let and const ) inside {} can't be accessed outside the loop ( block scope ).





{
    let b = 0;
    var c = 0;
}
// console.log(b); // It will give b is not defined
console.log(c);





// var --- can't have block scope , and can be access out the {} loop
// Variables redeclaring with var in block {} will also modify the variable outside the loop

var d = 5;
{
    var d = 6;
    console.log(d);
}
console.log(d); // global variable also changed





// Variables redeclaring with let in block {} will not modify the variable outside the loop
var x = 10;
{
    let x = 5;
    console.log(x)
}
console.log(x); 






// With var, redeclare anywhere, we can use and declare later.
// with let, redeclaring a variable in same block is not allowed and in another block is allowed.

carName = "Volvo";
var carName;
console.log(carName);


// varibales declared with const can't be redeclared and reassigned, and have Block scope, must assigned a value when declared

// Use const, when we declare an new Array, new Object, new funtion, new RegExp ( we can change elements, reassigning the whole object isn't possible).







const car = ["BMW", "Audi", "Volvo"];
car[0] = "Kia";
car.push('Swift')
console.log(car)

const names = {fName: "Sachin", secName: "Tendulkar"}
names.fName = "Yuvraj";   // modifying elements is possible --- but changing whole obj/Array will give error

// using const variable before it declared will give reference error.







// Arrow Function ( for writing function expressions )
var x = function (x,y) {
    return x*y
}
console.log(x(2,3)); // ES 5


var z = (x,y=2) => x*y; // ES6 Arrow funtion -- can omit return and {} when returning 1 element
console.log(z(5));

// Default parameters
let getVal = (value=10, bonus=5) => {
  console.log(value+bonus)
  console.log(arguments.length) // calculated only specified parameters passed ( ignore default values )
}
getVal(20) // use default params
getVal(undefined, 30)

// When we don't want to specify a parameter on rightside just ignore that
// If we don't want to specify a parameter on left side , use undefined 
// we can also use specified parameter --- bonus = value*0.1 ( won't work for second param to used in first param )
// or let percentBonus = 0.1 ------------------ bonus = value*percentBonus
// or let percentBonus = () => 0.1 ----------- bonus = value*percentBonus()


// Arrow fun don't have their own this. They are not well suited for Object Methods , must be defined before they are used.
// using const is safer than var , because function expression always returns a constant value


// for-of loop ---- we can declare with any const/var/let as next property is assigned to variable
// for-in returns key of each element. (Don't use when array index order is important ) --- Use for, for-of, array.forEach() when order is important








// class Templates (to bind info ) for JS Objects --- classes are not Objects 
class CarDetails {
    constructor(name, year) { // props -- to initialize the object properties
        this.name = name;
        this.year = year;
    }
    age(year) { // can take arg
        let date = new Date();
        return date.getFullYear() - year;
    }
}
// These created classes are used to create objects
// constructor method is automatically called when a new object is created.

let myCar = new CarDetails("Kia", "2020");
console.log(myCar);

console.log(myCar.age(2000)); // can pass arg








// JS Promises --- It's a Object that contains both the producing and consuming codes(wait for result)
// results can be pending, fullfilled, rejected.

const fetch = require('node-fetch');
const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });









//promise

const myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved");
      }, 2000);
    });
  };
  
  myPromise()
    .then((fromResolve) => {
      console.log(fromResolve);
    })
    .catch((fromReject) => {
      console.log(fromReject); // Promise Rejected
    });








// different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
// Using Symbol() will create a unique identifiers, solves this problem ---- typeof is also a symbol

const per = {
    fiName: "Rahul",
    age: 25,
    status: false
};
let id = Symbol('id'); // always different , If you create two symbols ( comparing ) with the same description they will have different values.
per[id] = 14256;
console.log(per[id]);
console.log(per.id);
console.log(per);
// Symbol.for('')
// Symbol.keyFor(--)


// default arguments ----------- rest parameter ( must be at last ) ---------bigInt()








Math.trunc(4.2) // returns int part only 4
Math.sign(-4) // if arg is -ve ( returns -1) or agr is +ve (returns 1) , if arg is zero ( returns 0 ).
Math.cbrt(8); // returns cube root ( 2 ) 
Math.log2(2); // returns base 2 logarithm of num  (1) -- similarly with base 10 also


let n = Number.EPSILON // 2.220446049250313e-16
let p = Number.MIN_SAFE_INTEGER // -9007199254740991 --- MAX will be +


Number.isInteger(10) // true ------- 10.2 will give false


Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false


isFinite(10/0) // false


// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false
isNaN('Hello') // false
isNaN('10') // true









// Spread Operator with function calls
function add(a, b, c) {
  return a + b + c;
  
}
let numbers = [1, 2, 3, 4, 5];
  
console.log(add(...numbers)); // extra nums will be omitted


// rest parameter , with this we can pack into an array --- but rest param must be the last parameter






// similary for objects also
let finalNames = {fiName: "Nara", sName: "Ram"}; // can create copy
let personalDetails = {married: "No", age: 26};
console.log({...finalNames, ...personalDetails});  // -- can merge objects









// Array destructuring -- we --- can also create a copy of the array

let employee = ['Narasimha','Reddy', "Male"]
let [,,,age] = employee
console.log(age) // undefined --- all are mapped with specified one and remaining will be undefined

let [name, ...rest] = employee 
console.log(rest)

// we can also destructure with default value --- if it exists in array , it will take that

let [,,,age1=25] = employee
console.log(age1)









// template string -- string expression allowing embedded expression  -- ``, ${}.

let myName = 'Narasimha'
let result = `My name is ${myName}
                and age 26. `

console.log(result)


// terinary operator ( replace for simple if-else )  -- ? : ;
// switch --- switch(day) { case: }









// this ----- refers to an object where it is called 
/* this refers to window object in global context -- , 
To rescue information( when the context is missing ) we use call, apply, bind*/



// call, apply, bind
let myName10 = {
  firstName: "Nara",
  lastName: "Reddy",
};
let printFull = function(hometowm, state) {
  console.log(this.firstName + " " + this.lastName + " From " + hometowm + " , " + state);
};







printFull.call(myName10, "Hyd", "TS");

let name1 = {
  firstName: "Nani",
  lastName: "Reddy",
};


// function borrowing
printFull.call(name1, "Mumbai");  // takes undefined if not passed -- immediatly invoke the funtion








// call

const personcall = {
  fName: 'Narasimha'
}

function Sample(a,b) {
  console.log(a,b,this.fName)
}

Sample(personcall, 5, 10)
Sample.call(personcall, 2, 3)








// If we have array of nums -- we need to find min or max of that
let array15 = [1,2,3,10];
console.log(Math.max(...array15));  // after spread operator intro it became simple 
console.log(Math.min.apply(null,array15));


printFull.apply(name1, ["Mumbai", "Maha"]); // apply -- passed arguments as array only ( because it take 2 args only )
// convenient to handle if we want use an array instead of argument list.






let oldNums = [1,2,3];
let newNum = [4];
let sumNums = [...oldNums, ...newNum];
function sum(a,b,c,d){
  return a+b+c+d;
}

console.log(sum(...sumNums));
console.log(sum.apply(null, sumNums));
console.log(Array.prototype.unshift.apply(oldNums, newNum));  // similar to [...newNums, ...oldNums]









// Bind Method -- it will create and return new function with specified this value bound to it
// use when async stuff , partial applications
let printName = printFull.bind(name1, "Mumbai", "Maha");
console.log(printName);
printName(); // it gives a copy which can be invoke later








function fun1(...theArgs) {
  console.log(theArgs.length) // we can directly perform any operation on rest parameters
}

fun1()         // 0
fun1(5, 6, 7)  // 3 --- can be more suitable when we are not sure about how many args we are passing.


// spread operator allow us to expand elements --- to unpack
// rest parameter -- will get a list of args into an array.









// aliasing const {name: fullName} = person
// Nested Object destructuring 
const userDetails = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'department':{
      'name': 'Sales',
      'address': {
          'city': 'Bangalore',
          'zip': 560001
      }
  }
}
const {department: {address: {city}}} = userDetails;
console.log(city);

let { name: myNameDes} = userDetails
console.log(myNameDes)









// destructure function return
const getUser = () => {
  return{ 
      'myStartName': 'Alex',
      'address': '15th Park Avenue',
      'myAge': 43
  }
}

const { myAge, ...remaining} = getUser();

console.log(myAge); // 43

// Destructuring in loops -- 

// Different ways to create a copy of object -- all will give same object
// a. spread operator ------- b.  Object.assign()  method

const per12 = {
  firName: "Nara",
  secName: "Ram"
}

let p1 = {...per12}
let p2 = Object.assign({}, per12);

// c. Use JSON.stringify() and JSON.parse()
let p3 = JSON.parse(JSON.stringify(per12));
console.log(p3);


// arrow functions can't be used for 
    // a. event handlers --- gives undefined
    // b. object methods ---
    // c. prototype methods
    // d. function that use the arguments object.



    







// ES5 ------------ one type of collection 

// sets -- checking value
let mySet = Object.create(null)
mySet.id = 0;  // 1 -- also , true ---- returns true
if (mySet.id) {
  console.log('id exists')
}




// map --- retriving value
let myMap = Object.create(null)
myMap.name = 'Narasimha'
let val = myMap.name
console.log(val)


myMap[100] = 'Hello'
console.log(myMap['100'])  //--- string because - object properties can only be strings ( prob when we want to use both num and string )






// Objects
let ob1 = {}
let ob2 = {}
myMap[ob1] = 'world'

console.log(myMap[ob2])
// still give result as we didn't set anything ---- string representation of both objects is same
console.log(ob1.toString());
console.log(ob2.toString());





// sets
let mySet1 = new Set()
mySet1.add('Hello')
mySet1.add(1)
mySet1.add(1)

console.log(mySet1.size) // 2 ------- because it won't consider duplicate values






// consider 
let obj3 = {}
let obj4 = {}
mySet1.add(obj3)
mySet1.add(obj4)

console.log(mySet1.size) // 4 --- because objects are not converted to strings , the two objects will be unique


let newSet = new Set([1,2,3,4,4,4,4])
console.log(newSet)
console.log(newSet.size) // 4





// chain method to add elements
let chainSet = new Set().add('Hello').add("World")
console.log(chainSet.size)
console.log(chainSet)





// has method to check the existance of an element in set
console.log(newSet.has(1))
console.log(newSet.delete(1))





let mySet2 = new Set()
let key = {}
mySet.add(key)
console.log(mySet2.size)

key = null
console.log(mySet2.size) // 1 ---- Even though key was null , a reference of key is existed in our set ( we can retrive it by key = [...mySet2][0] )
// But to aid with garbage collection and memory leaks , we would prefer all the references must be deleted 
// So introduced weak sets ( can store only store object references, not primitive values , and the object references are weak )


// weak set
let weakSet1 = new WeakSet()
let key1 = {}
set.add(key1)
console.log(set.has(key1))

key1 = null
// It is not possible to verify if the reference is removed { memory is handled properly }

// forEach -- on array, on new Map([ ['key', 'value'], [ --- ]]) , on new Set([---]) accepts 3 params (value, key, callingSet)
// console.log(mySet === callingSet) --- true



let newWeakMap = new WeakMap()
let obj5 = {}
newWeakMap.set(obj5, 'Hello')
console.log(newWeakMap.get(obj5))

obj5 = null
// no way to verify this



let desObj = {
  usernames: 'Nara',
  age: 20,
  getName() {
    return 5;
  },
};

let {age: myAgeDes, getName} = desObj
console.log(getName())
console.log(myAgeDes)


//Alias won't work in array destructuring
function useState() {
let desObjArr = [
  'Nara',
   20,
  function getName() {
    return 5;
  },
];
return desObjArr
}
let [username,,getName] = useState()
console.log(username)
console.log(getName())









/* API-- Application Programming Interface , allows two Softwares Communicate with other applications and websites for 
additional functionality   Eg: payment gateways */

/* takes Request ------> API(Http methods GET(R),POST(C),PUT(U),DELETE(D)) ------------> send Response */

/* RESTful API  or REST API -- or RESTful web service ---- is based on Representation state transfer which is an architectural
style and approach to communications --- It uses less Bandwidth ( max data tranfer over internet in given time ) , can also 
build using programming languages */