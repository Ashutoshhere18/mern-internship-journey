// 19. E-commerce Cart System
// Each item: {name, price}
// Tasks:
// Add/remove items
// Use reduce() → total price
// Use filter() → expensive items (>500)
// Use map() → extract item names



const items=[
    {name:"bag",price:500},
    {name:"Mobile Cover",price:200},
    {name:"Earbuds",price:800},
    {name:"Headphones",price:1000},
    {name:"Mouse",price:100},
    {name:"Keyboard",price:300},
    {name:"Charger",price:400},
];
console.log(items);

items.push({name:"Bottle",price:200});
console.log(items);


items.splice(4,1);

console.log(items);

const temp=[...items]

//calculating total using reduce method
const total=temp.reduce((acc,curr)=>{return acc+curr.price},0)
console.log(total);



//filter expensive products

const expensiveItems=items.filter((item)=>item.price>=500);

console.log(expensiveItems);

expensiveItems.map((item)=>{
    console.log(item.name);
})