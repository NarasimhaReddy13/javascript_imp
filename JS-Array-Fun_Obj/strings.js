let a = 'Hello Narasimha';





console.log(a.length) // Includes Spaces also






var b = "We are the so-called \"Vikings\" from the north.";
console.log(b)
var c = 'It\'s alright.';
console.log(c)
var d = "The character \\ is called backslash.";
console.log(d)








// using ``(backticks) -- or Template/string literals allowing embedded expressions. 
// You can use multi-line strings and string interpolation features with them. -- will solve the above problems
let x = 10
let y = 20
console.log(`Thirty is ${x+y} and
not ${2 * x + y}.`);







// Strings Can be Objects
console.log(typeof a);

let newStr = new String(a);
console.log(newStr);
console.log(typeof(newStr));


// Objects are not like arrays or strings. So simply comparing by using "===" or "==" is not possible. retutns false
// To compare we have to first stringify the object and then using equality operators it is possible to compare the objects.





var e = "Please locate where 'locate' occurs!";
console.log(e.indexOf("locate"));
console.log(e.lastIndexOf("locate"));
console.log(e.indexOf(("locate"), 15));
console.log(e.lastIndexOf(("locate"), 15));
// All returns -1 if item not found
console.log(e.search('locate')) // both search and indexOf will return same but search doesn't take second parameter





let f = a.slice(6, 10)
console.log(f) // end index not included
console.log(a) // returns new string

//slice also take negative indexes (counts from end)
console.log(a.slice(-15, -10))

console.log(a.slice(-9)) // If omitted end index it will return remaining string from starting index







// If we give negative num , it will return whole string
console.log(a.substring(6, 10)) // if we omit second parameter it wil return the remaining from starting param
console.log(a.substring(4, 1)) // If second greater than first.. It will swap the 2 numbers

// substr is similar to slice .. but the second parameter is the length of sliced part
console.log(a.substr(6, 9));

// substr can take negative parameter also
console.log(a.substr(-9, 2))
console.log(a.substr(-9)) // will not modify the original string
console.log(a);






//
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools"); // replace the first matched string and replace is case-sensitive
console.log(n)
var m = str.replace(/MICROSOFT/i, "W3Schools") // for any upper lower cases 
console.log(m)
console.log(str)

// To replace all the matched words
console.log(str.replace(/Microsoft/g, 'W3Schools')); // will not modify the original string
console.log(str);







// toUppercase(), str.toLowerCase(), a.concat(b,c) ..  ,  str.startsWith("") or str.startsWith("", index)
let g = '   Hello';
console.log(g.trim())







// concat
console.log("Hello".concat(" " + "World !"));







var str = "       Hello World!        ";
console.log(str.trim());
// alert(str.trim()); // adding a trim function to JS using String.prototype








console.log(a.padStart(10, 0))
let h = '5'
console.log(h.padStart(4, 0)); // 4 is the final length (verify from result)
console.log(h.padStart(4, 2)); // similaly padEnd

let i = '52';
console.log(i.padEnd(5, 0));









//
console.log(a.charAt(9)) // index
console.log(a.charAt(-5)) // empty string when index not found
console.log(a.charCodeAt(9)) // return UTF-16 code (an integer between 0 and 65535). Unicode

// we can access using index mwthod but we can't modify the original String
console.log(a[0])
/* a[0] = 'N';
console.log(a[0])*/ // It's not changing bcs string are not changeable. But it won't give any error

// Using split() with any seperator we can convert string to Array;


// for JS Numbers , constructor returns function Number() {[native code]}









// ends with
let endsStr = 'Narasimha Annem.'
console.log(endsStr.endsWith('Annem.'));

console.log(endsStr.endsWith('Narasimha', 9));  // 2nd arg is upto length





console.log(String.fromCharCode(72,69,76,76,79));

console.log(endsStr.repeat(2));  // repeat 2 times

console.log(endsStr.search('ara')); // returns index of first matching item ( if not found -1 ) case sensitie
console.log(endsStr.search(/ara/i));  // case insensitive

// split (operator, from_index)
// startsWith(str, from_index)

// toString()  returns string object

// toUpperCase() , toLowerCase()










console.log('9' + 9);
console.log(typeof('9'+9));
console.log('99'/9);
console.log(typeof('99'/9));
console.log('9'/99);
console.log(typeof(undefined));

console.log(typeof(NaN));
console.log(NaN == "number")

console.log('9'*9);
console.log(Math.pow('9',2));
console.log(10-'20');

console.log(typeof null);
console.log(!1)


var nullVal = null;  //-- evaluate to false in conditional statement
if (nullVal){
    console.log("My Var is not null");
} else {
    console.log("My Var is null");
}







const ob1 = {}
const ob2 = {}
console.log(ob1 == ob2)
console.log(JSON.stringify(ob1) === JSON.stringify(ob2))



let palindrom1 = "Manam"

const initialPal = palindrom1.split(" ").join("").toLowerCase()

let firstPal = '';
for (let each of initialPal){
    firstPal = each + firstPal
}

console.log(initialPal === firstPal ? "Palindrom" : "Not a Palindrom");







/* (function() {
    var a1 = b1 = 5;
})();

console.log(b1) --- b1 is not defined (reference error) -- */





var funNum = 1;

if (function f(){})
{
    funNum += typeof f
}

console.log(funNum);







console.log(10 + 20 + "30")