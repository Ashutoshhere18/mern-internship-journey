// 21. Unique Values Finder
// Given array with duplicates
// 👉 Return unique values (use includes + loop or other logic)


const array=[1,3,5,4,3,1,2,6,5,4,3,8];


//First Method
const unique1=[];

for(let i=0;i<array.length;i++){
   if(!unique1.includes(array[i])){
    unique1.push(array[i]);
   }
}

console.log(unique1);


//Second Method

const unique2=[...new Set(array)];

console.log(unique2);