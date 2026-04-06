// Focus: creating & modifying objects

// 🔹 Methods:

// assign, create, fromEntries


// 🧠 Tasks:

// Q4.Clone & Merge
// 👉 Merge 2 objects:
// const a = { x: 1 };
// const b = { y: 2 };
// Output: { x:1, y:2 }


// const a={x:1};
// const b={y:2};

// const output= Object.assign(a,b); // This changes value of a
// console.log(output);
// console.log(a); 

// // Second method 
// const c={a:1};
// const d={b:1};
// const newOutput={...c,...d};
// console.log(newOutput);
// console.log(c);  // c is not mutable





// Q5.Object from Array
// 👉 Convert:
// [ ["name", "Aman"], ["age", 20] ]

// ➡️ into object


// const array=[["name", "Aman"],["age", 20]];

// const object=Object.fromEntries(array);

// console.log(object);






// Q6.Prototype Creation
// 👉 Create object:
// const animal = { eats: true };

// Then create another object using it as prototype.

// 👉 Check:

// Does new object inherit eats?

// const animal={eats:true};

// const dog={};

// Object.setPrototypeOf(dog,animal);

// console.log(dog.eats);





