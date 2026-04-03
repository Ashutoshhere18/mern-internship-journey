// 22. Search System
// Given list of products
// 👉 Use:
// find() → first match
// filter() → all matches


const products=[
    {name:"Mobile Cover",price:200},
    {name:"Earbuds",price:800},
    {name:"Headphones",price:1000},
    {name:"Mouse",price:100},
    {name:"Keyboard",price:300},
    {name:"Charger",price:400},
    {name:"Mouse",price:200},
    {name:"Headphones",price:1000},

];

const matchedProduct=products.find((product)=>product.name=="Headphones");

console.log(matchedProduct);


const matchedProducts=products.filter((product)=>product.name=="Headphones");

console.log(matchedProducts);