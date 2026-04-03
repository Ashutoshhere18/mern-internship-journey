// 20. Data Cleanup Tool

// Given messy array:

// [1, 2, null, 3, undefined, 4, "", 5]
// Use:
// filter() → remove unwanted values


const array=[1,2,null,3,undefined,4,"",5];

const filteredArray=array.filter((num)=>{
    if(num){
       return num;
    }
})

console.log(filteredArray);