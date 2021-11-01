// ES 12


// A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).


/* Lexical Environment */
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();




// Closures
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
}
  
var myFunc = makeFunc();
myFunc();









function makeAdder(x) {
    return function(y) {
      return x + y;
    };
}
  
var add5 = makeAdder(5);
  
console.log(add5(2));







// 
var d = 10;
function sum(a){
    return function(b){
        // outer functions scope
        return function(c){
          // local scope
          return a + b + c + d;
        }
    }
}
  
console.log(sum(1)(2)(3));









// [0, 1, 2, 3, 4]  -----    arr.flat(depth)
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
console.log(arr1.flat(1));


const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(3));
// expected output: [0, 1, 2, [3, 4]]


const arr3 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(Infinity));



const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // removes empty slots






//  [1,2,3,4,5,6]
let input = [1,2,[3,4,[[[5,6]]]]]

let finalArr = []

function singleArray(input) {
    for (let each of input) {
        if (typeof each === "number"){
            finalArr.push(each);
        } else {
            singleArray(each);
        }
    }
}
singleArray(input);
console.log(finalArr);







let arr6 = [1,3];
arr6[6] = 10;
console.log(arr6);
console.log(arr6[3]);







const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

clothes[0];



for ( var i=0; i<3; i++) {
    setTimeout(function() {console.log(i);}, 1000 + i)
}