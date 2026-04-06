// Focus: prototypes & deep understanding

// 🔹 Methods:

// getPrototypeOf, setPrototypeOf, isPrototypeOf

// 🧠 Tasks:
// Q14. Prototype Chain Check
// 👉 Create 3-level chain:
// grandParent → parent → child
// Check relationships using isPrototypeOf


// const grand={
//     name:"Boss"
// }

// const Parent={
//     authority:"TO guide child"
// }

// const child={
//     respect:"Respect your elders!"
// }

// Object.setPrototypeOf(Parent,grand);

// Object.setPrototypeOf(child,Parent);


// console.log(child.name);

// console.log(child.authority);





// Q15 Dynamic Prototype Change
// 👉 Change prototype of existing object
// Observe behavior change

const animal={
    sound:"Some sound"
}

const dog={
   name:"Remo"
}

Object.setPrototypeOf(dog,animal);

const cat={
    sound:"meow"
}

Object.setPrototypeOf(dog,cat);

console.log(dog.sound);



