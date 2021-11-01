// JS array is an object that represents a collection of similar type of elements
// Array is constructed in 3 ways --  [elements] , const arr = [] --- arr[0] = 1 , const arr = new Array(elements)


let arr = [1,8,6,3,5,8,0,2];



console.log(arr.length);  //Index method starts from zero. arr[0] ---  Accessing




const [first, second, ...rest] = arr // destructuring  --- spread operator -- can do for objects also , can create a copy
console.log(second);

const [,,Six,,,,Zero,] = arr
console.log(Zero)





// forEach
arr.forEach(function(item,index,arr) {
  console.log(item, index, arr);
});






// push
let push = arr.push(4,4,2); // can push any num of elements to end
console.log(push); // return the array length after push  ----- using ( push, pop, shift, unshift ) will modify the original array






// pop
console.log(arr.pop()); // return the poped element -- last element






// shift
console.log(arr.shift()); // return the removed first element





// unshift
let unshift = arr.unshift(-1,0,1);
console.log(unshift); // returns length , we can add any num of elements at starting






// splice
let splice = arr.splice(1,2); // (start_index, num_of_items_to_be_deleted)
console.log(splice); // returns the deleted items

let splice1 = arr.splice(1,0,7,9);
console.log(splice1); // return [] as 2nd arg is zero/neg, from 3rd it will add elements at index 1.

let splice4 = arr.splice(-2,0,10,11); // if index < 0 --- it will take from end of array.

let splice5 = arr.splice(-5); // if index < 0 and only one arg , it will return the part of array from end .
console.log(splice5); // return spliced part
console.log(arr);  // ----- Will modify original array also







// slice
let slice1 = arr.slice(1,3); // (start, end) - indexes -- if no index is passed -- returns full array
console.log(slice1); // return the removed part
console.log(arr) // will not*** modify the original array

let slice2 = arr.slice(1,3,5); // it will not consider the third index.
console.log(arr)








// empty items
arr[12] = 10
console.log(arr.length)
console.log(arr); // NaN







// for loop
let len = arr.length
let result = []
let result0 = []
for (var i = 0; i < len; i++) {  
  result.push(arr[i] = arr[i]*2) // modifies the original array
  result0.push(arr[i]*2) 
}
console.log(result);
console.log(result0)
console.log(arr);

    // (or)

let result1 = [];
for (let each of arr) {  // for - in returns the index of elements , not the element.
  result1.push(each*2);  // doen't modify the original array
}
console.log(result1);
console.log(arr); 

    // (or)

// map function
let result2 = arr.map(each => each/2);
console.log(result2); // return new array, it doesn't modify the original array

    // (or)

// forEach
arr.forEach(function(value) {
  console.log(value*2);
})
console.log('forEach', arr); // doen't modify the original array

console.log('forEach', arr.forEach(each => each/2))
console.log('forEach',arr)








// every
let every = arr.every(each => each > 2);
console.log(every); // return only true or false, doesn't modify the original array







// some 
let even = el => el%2 == 0;
console.log(arr.some(even));







// filter
let filter = arr.filter((each, index) => each < 0);
console.log(filter);
console.log(arr); // doesn't modify the original arr and return new arr which satisfy the condition






// concat
let arr6 = [1,2];
let arr7 = [3,4];
console.log(arr6.concat([arr7]))

let arr8 = [5,6];
let concat = arr6.concat(arr7, arr8); // can concat any num of arrays
console.log(concat)


arr.splice(8);
console.log(arr);







// find 
let find = arr.find(each => each>10); // returns the first matched element in the array ---- else undefined
console.log(find);

const findNum = (each => each > 10);
console.log(arr.find(findNum));







//findIndex -------------- find and findIndex must accept functions only
let findIndex1 = arr.findIndex(each => each>10); // returns the index of first matched element --- else -1
console.log(findIndex1);


let myArray = [{name:"Nara"}, {name: 'Simha'}]
console.log(myArray.indexOf({name: 'Nara'}))

let myName = () => ({name: 'Nara'})  // -- can be any argument

console.log(myArray.findIndex(myName))
// console.log(myArray.findIndex({name: 'Nara'}))  ----- returns not a function







// reduce
let reducer = (a, b) => (a - b);
console.log(arr.reduce(reducer));

let reducer1 = (a, b) => (a - b);
console.log(arr.reduce(reducer1, 10)); // here 2nd arg as first element of array









// sort
let sort = arr.sort(); // sort acc2 first element in each item .. best suitable for sorting the strings or array with strings
console.log(sort);

let sort1 = arr.sort(function(a,b){return a-b}); // sort in ascending order
console.log(sort1)

//
console.log(arr.sort((a,b) => b-a)) // descending order -- Modify the original array








// join
console.log(arr.join()) // not modify the original array
let join = arr.join("_"); 
console.log(join);






// split
console.log(arr)
console.log(join.split(" ")) // as single array , not modify the original array
console.log(arr);







// from method to create array
console.log(Array.from('abc')); // takes as a single element a,b,c ..-['a', 'b', 'c'] ------ ['abc'] -- will give ['abc']
console.log(Array.from(['ABC']))







// set
const a = new Set([1,1,2,5,6,4,4,2,1,0]);
console.log(Array.from(a))
console.log(a)

let b = [1,1,2,5,6,4,4,2,1,0]
console.log([... new Set(b)])   // ---------- imp -- To covert to array






// isArray
console.log(Array.isArray({'a':1}));
 
// copyWithin()

// fill (num, strIndex, endIndex)
console.log(arr.fill(0,3,4));  // --- (num, strtIndex, endIndex) -- Modifies the Original Array

console.log(arr);






// includes
console.log(arr.includes(0));  // 2nd arg is index -- returns true or false
console.log(arr.includes(12,3));
console.log(arr.includes('d',-5));

// arrays use numbered index , Objects use named indexes.






// keys() --- .keys(),   .values()
for (var [key,value] of arr.entries()) {
  console.log(key, value)
};








// reduceRight
let arr9 = [[1,2],[3,4],[5,6]].reduceRight((acc,curr) => acc.concat(curr));
console.log(arr9);

console.log(arr9.reverse()); // reverse

const arr11 = [1,2,'a',new Date()] // new Date()
console.log(arr11)






// map,sort,filter
let cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];

cities.filter(city => city.population < 3000000).sort((c1, c2) => c1.population-c2.population).map(city => console.log(city.name + " : " + city.population));




console.log(typeof arr); // Object






let salaryArray = [{id: 1, salary: 100}, {id: 2, salary: 100}]
let sumSalary = 0
for (let each in salaryArray) {
    sumSalary += salaryArray[each].salary
}
console.log(sumSalary)


console.log(salaryArray.map(each => each.salary).reduce((a,b) => a+b))






let palindrom = 'Katak'

let revNum = palindrom.split("").reverse().join("")
console.log(revNum)

if (palindrom.toLowerCase() === revNum.toLowerCase()){
   console.log(true)
} else {
  console.log(false)
}





let finalArr = [
  { 'name': 'Manjit', 'order': 2 },
  { 'name': 'Keshu', 'order': 0 },
  { 'name': 'Ajay', 'order': 1 },
  { 'name': 'Sumit', 'order': 5 },
  { 'name': 'Ramesh', 'order': 1 },
  { 'name': 'Ganesh', 'order': 0 }
];

let sortedArr = finalArr.sort((a,b) => b.order - a.order)

console.log(sortedArr[0].name)












var fNum = 10;
var sNum = fNum++;
var tNum = ++fNum;

console.log(fNum, sNum, tNum);





let sortLenArr = ["Nara", "Simha", "Coding", 'Components'];
console.log(sortLenArr.sort((x,y) => y.length - x.length )[0]);




/*
[div > p] selects only p that are children of div. So if you had a div with lists or whatever inside that had their own p, their properties would not be affected by this selector.
[div p] selects all descendant p in the div. So any p that is inside, or descendant, of a div would be affected.

*/




/*

https://preview.keenthemes.com/metronic8/react/demo1/dashboard

https://github.com/facebook/react/blob/main/CHANGELOG.md#1702-march-22-2021

*/