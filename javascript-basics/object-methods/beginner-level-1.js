// ✅ Goal: Clearly understand how to read object data


// Q1.List Object Data
// const user = { name: "Aman", age: 20, city: "Surat" };

// 👉 Tasks:

// Print all keys
// Print all values
// Convert object into array of [key, value]


// const user={
//     name:"rahul",
//     age:20,
//     city:"surat"
// };

// console.log(Object.keys(user));

// console.log(Object.values(user));

// const array=Object.entries(user);
// console.log(array);





// Q2.Property Checker
// 👉 Write a function:
// checkProperty(obj, key)
// Return true if property exists (own property only)
// Else false


// const checkProperty=(obj,key)=>{
//     return obj.hasOwnProperty(key);
// }

// const user={
//     name:"Aayush",
//     age:18
// }

// console.log(checkProperty(user,"name"));
// console.log(checkProperty(user,"address"));
// console.log(checkProperty(user,"toString"));






// Q3.Custom Object Logger
// 👉 Create a function that:
// Takes any object
// Logs:
// [object Object] using toString
// Total number of keys


// function takeObject(obj){

//     console.log(obj);
//     const result=Object.prototype.toString(obj);
//    console.log(result);

//    const totalKeys= Object.keys(obj).length;
//    console.log("Total Keys:"+totalKeys);
   
// }

// takeObject({name:"Ashwin",age:18,adddress:"Surat"});



