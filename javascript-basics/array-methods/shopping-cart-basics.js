
// Q1 shopping-cart-basics

// push() → add 3 items
// pop() → remove last item
// unshift() → add item at beginning
// shift() → remove first item
// 👉 Print final array


// const array=["Milk","Bread","Eggs"];

//push 

// array.push("Butter","Cheese","Juice");

// console.log(array);

//pop 

// array.pop();

// console.log(array);

// //unshift
// array.unshift("Paneer");
// console.log(array);

// //shift

// array.shift();
// console.log(array);





//Q2. Merge Guest Lists
// Create 2 arrays of guests
// Use concat() to merge them
// 👉 Print merged list

// const guest1=["John","Alex","Hiren","Cox"];
// const guest2=["Ram","Shyam","Kanhu"];

// console.log(guest1);
// console.log(guest2);

// console.log(guest1.concat(guest2));









// Q3. Find Positions
// Given an array of numbers:
// Use indexOf() to find first occurrence
// Use lastIndexOf() for last occurrence

// const numbers=[10,20,30,40,30,50];

// console.log(numbers.indexOf(30));

// console.log(numbers.lastIndexOf(30));









// Q4.Convert to String
// Take an array of numbers
// Use:
// toString()
// toLocaleString()
// 👉 Observe difference

// const nums=[1,2,3,4,5];

// console.log(nums.toString());
// console.log(nums.toLocaleString());



//Q5 Check Array Type
// Create:
// one array
// one string
// Use isArray() to check
// 👉 Print results


// const array=[1,2,3,4,5];
// const string="Ram";

// console.log(Array.isArray(string));
// console.log(Array.isArray(array));








// Q6.Double the Numbers
// Use map()
// 👉 Input: [1,2,3] → Output: [2,4,6]


// const array=[1,2,3];

// array.map((num)=>{
//     console.log(num*2);
// });





// 7. Log Each Element
// Use forEach()
// 👉 Print each element with its index

// const array=[1,2,3,4,5,6,7];

// array.forEach((num,index)=>{
//     console.log(index,num);
// })

// let iterator=array.entries();

// for(let entry of iterator){
//     console.log(entry);
// }





// 8. Filter Even Numbers
// Use filter()
// 👉 Return only even numbers

// const array=[2,3,4,5,6,7,8];

// const even=array.filter((num)=>num%2==0);

// console.log(even);







// Q9. Find First Adult
// Array of ages
// Use find() to get first age ≥ 18

// const ages=[12,10,11,19,18,21,23];

// const findAge=ages.find((age)=>age>=18);

// console.log(findAge);








// Q10. Check Conditions
// Use:
// some() → any number > 100?
// every() → all numbers > 0?


// const numbers=[98,96,92,95,101,100];

// console.log(numbers.some((num)=>num>100));

// console.log(numbers.every((num)=>num>100));
// console.log(numbers.every((num)=>num>10));







// Q11. Includes Check
// Use includes()
// 👉 Check if a value exists

// const names=["sonu","harsh","rajan","priya"];

// console.log(names.includes("harsh"));
// console.log(names.includes("ram"));







// Q.12. Slice vs Splice
// Use:
// slice() → copy part of array
// splice() → remove elements
// 👉 Compare behavior


// const array=[10,11,12,13,14,15,16];

// const result=array.splice(1,1);
// console.log(array);

// array.splice(2,1,19);
// console.log(array);

// const extractedArray= array.slice(0,4);

// console.log(extractedArray);





// Q13.Focus: real-world data manipulation

// 13. Student Marks Analyzer
// Array of marks
// Use:
// reduce() → calculate total + average

// adding marks of 6 subjects out of 50
// const Student1=[42,48,41,46,42,39];

// const summation= Student1.reduce((acc,curr)=>acc+curr);

// console.log("Total Marks :300\nObtained Marks:"+summation);

// const Average= (summation/6);

// console.log("Average Marks :"+Average);









// 14. Reverse Without Changing Original
// Use reverse() carefully
// 👉 Keep original safe


// const array=[1,2,3,4,5];
// const temp=[...array];
// temp.reverse();

// console.log(array);
// console.log(temp);





//15.Sort Numbers Properly
// Use sort()
// 👉 Sort ascending (handle number sorting properly)


// const numbers=[12,3,5,3,2,1,6,5];

// const sortedArray=numbers.sort((a,b)=>a-b);

// console.log(sortedArray);






// 16. Copy Within Practice
// Use copyWithin()
// 👉 Copy part of array into another position

// const array=[20,10,15,25,30,45,18];

// const fruits=["apple","banana","grapes","orange","pineapple"];
// fruits.copyWithin(3,0);

// console.log(fruits);



// Q.17. Array from String
// Use:
// Array.from() → convert string to array
// Array.of() → create array from values

// const name1="Ashutosh";

// const array=Array.from(name1);

// console.log(array);


// const array=Array.of('R','E','D');
// console.log(array);




// Q18. Entries, Keys, Values
// Use:
// entries()
// keys()
// values()
// 👉 Loop and print results


//using keys to get properties 
// const array1=['Milk','Bread','Eggs'];

// let iterator1=array1.keys();

// for(let key of iterator1){
//     console.log(key);
// }

// //using values
// const array2=['Milk','Bread','Eggs'];

// let iterator2=array2.values();

// for(let value of iterator2){
//     console.log(value);
// }

// //using entries

// const arrays=["Rahul","Ramesh","Rajesh"];

// let iterator3=arrays.entries();

// for(let entry of iterator3){
//     console.log(entry);
// }




