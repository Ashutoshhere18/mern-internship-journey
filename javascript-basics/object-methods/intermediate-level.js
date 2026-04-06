// Focus: descriptors & control over properties

// 🔹 Methods:

// defineProperty, defineProperties,
// getOwnPropertyDescriptor, propertyIsEnumerable

// 🧠 Tasks:

// Q7. Hidden Property
// 👉 Create object:
// const user = {};
// Add password property
// Make it:
// NOT enumerable
// NOT writable


// const user={name:"Abhishek",age:20,Department:"IT"};

//  Object.defineProperty(user,"password",{value:"12345678",
//     writable:false,enumerable:false,configurable:false});

// Object.defineProperty(user,"password",{value:true});  // TYpeError: Cannot redefine property : password

//  console.log(user.password);
//  console.log(user);

//  user.password="HeyThere";

//  delete user.password;  // because configurable is false.No deletion and redefine.
//  console.log(user.password);

//  console.log(Object.keys(user));








// Q8. Inspect Property
// 👉 For any object:
// Print descriptor of a property:
// writable
// enumerable
// configurable


// const animal={
//     category:"dog",
//     sound:"barks"
// }

// console.log(Object.getOwnPropertyDescriptor(animal,"category"));







// Q9. Multiple Properties Setup
// 👉 Use defineProperties to create:
// name (normal)
// salary (non-enumerable)
// id (read-only)


const user={};

Object.defineProperties(user,{
    "name":{
    value:"Rahul"
},"salary":{
    value:20000,
    enumerable:false
},"id":{
    value:101,
    writable:false,
    configurable:false,
    enumerable:false
}
});


console.log(user.id);
console.log(user.salary);

user.id=103;
console.log(user.id);