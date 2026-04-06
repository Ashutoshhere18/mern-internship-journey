// ✅ Goal: Control how properties behave internally

// Focus: object immutability & restrictions

// 🔹 Methods:

// freeze, isFrozen, seal, isSealed,
// preventExtensions, isExtensible

// 🧠 Tasks:
// Q10.Freeze Object
// 👉 Create object and freeze it
// Try:
// Adding property ❌
// Modifying ❌
// Deleting ❌



// const obj={
//     name:"Krishna",
//     age:21
// };

// Object.freeze(obj);

// obj.name="Hari";


// //Shows Error
// // Object.defineProperty(obj,"address",{value:"Surat", configurable:false,writable:false});
// console.log(obj);

// delete obj.name;

// console.log(obj.name);
// // console.log(obj.address);






// Q11.Seal Object
// 👉 Compare with freeze:
// What operations are still allowed?


// const obj={
//     gender:"male",
//     work:"Developer"
// };

// Object.seal(obj);


// // Cannot Define
// // Object.defineProperty(obj,"Salary",{value:12000});

// console.log(obj);

// delete obj.work;  // deletion not performed

// obj.work="Sweeper"  // Updating value is allowed.
// console.log(obj.work);










// Q12.Extension Control
// 👉 Prevent adding new properties
// But allow modifying existing ones


// const obj={profession:"Teaching",Salary:30000};

// Object.preventExtensions(obj);

// console.log(obj);

// console.log(Object.isExtensible(obj));


// // Error: cannot define properties
// // Object.defineProperty(obj,"workingHours",{value:"8 hrs"});

// obj.Salary=25000
// console.log(obj.Salary);









// Q13.State Checker
// 👉 Write function:
// checkState(obj)

// Returns:

// "frozen"
// "sealed"
// "extensible"



// const checkState=(obj)=>{

//     console.log("isFrozen:"+Object.isFrozen(obj));

//     console.log("isExtensible:"+Object.isExtensible(obj));

//     console.log("isSealed:"+Object.isSealed(obj));
// }


// const obj={
//     name:"Hiren",
//     age:52
// }

// Object.freeze(obj);

// Object.preventExtensions(obj);


// checkState(obj);



