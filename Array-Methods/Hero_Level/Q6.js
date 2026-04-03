// 24. Mini Data Pipeline

// Input:

// [10, 20, 30, 40, 50]
// Steps:
// map() → increase by 10%
// filter() → keep > 30
// reduce() → total


const array=[10, 20, 30, 40, 50];

const result=array.map((num)=>num+(num*0.1));

console.log(result);

const filteredResult=result.filter((num)=>num>30);

console.log(filteredResult);

const total=filteredResult.reduce((acc,curr)=>acc+curr);

console.log(total);