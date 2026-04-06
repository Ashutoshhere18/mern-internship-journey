// LEVEL 6 — Hero 🧠🔥

// Focus: deep internals + rare methods

// 🔹 Methods:

// is, valueOf, toLocaleString,
// getOwnPropertyDescriptors

// 🧠 Tasks:
// Q18.Object Comparison
// 👉 Compare:
// Object.is(NaN, NaN)
// Object.is(0, -0)
// Explain results

// console.log(Object.is(NaN,NaN));

// console.log(Object.is(0,-0));







//Q19 Custom Primitive Conversion
// 👉 Create object:
// const money = { amount: 500 }
// Override valueOf
// Make:
// money + 100 // 600


// const money={
//     amount:500,
  
//     valueOf(){
//         return this.amount;
//     }
// };

// console.log(money+100);









// Q 20.Locale Formatter
// 👉 Create object with numbers/dates
// Use toLocaleString to format output


// const numbers=15874269

// console.log(numbers.toLocaleString('en-IN'));


const data={
    amount:1258648985,
    date: new Date(),
};

console.log(data.amount.toLocaleString('en-IN'));

console.log(data.date.toLocaleString('en-IN'));