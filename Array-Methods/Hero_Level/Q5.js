// 23. Analytics Dashboard
// Array of sales numbers
// Use:
// reduce() → total revenue
// some() → any loss?
// every() → all profitable?

const sales=[1000,2000,3000,4000,5000];

const totalRevenue=sales.reduce((acc,curr)=>acc+curr);

console.log(totalRevenue);

const hasLoss=sales.some((sale)=>sale<1500);

console.log(hasLoss);

const allProfitable=sales.every((sale)=>sale>=1000);

console.log(allProfitable);