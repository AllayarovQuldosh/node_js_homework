// let str = "3end 1This 2is";
// function fn(s){
//     // for(let i = 0; i < str.length; i++){
//     return  s.split(' ').sort().join(' ')//.replaceAll()
//     // }
    
// }

// console.log(fn(s("3end 1This 2is")));



// function fn(s){
//     return s.split(' ').sort().join(' ').replaceAll('')
// }
// console.log(fn(s("3end 1This 1is")));



 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 
// function duplicatArray(num){
//     num.sort();
//     let res = [];
//     for(let i=0;i<num.length;i++){
//         if(num[i] === num[i+1]){
//             if(res[res.length -1] !== num[i]){
//                 res.push(num[i])
//             }
//         }
//     }
//     return res;
// }
// const a = duplicatArray([1,2,3,2,2,44,5,3]);
// console.log(a);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function fn(arr){
//     let obj = {};
//     let res = [];
//     arr.forEach(v => {
//         if(!obj[v]){
//             obj[v]=0;
//         }
//         obj[v];
//         if(obj[v]>=1){
//             res.push(v);
//         }
//         // return res;
//     });
//     return res;
// }

// const d = fn([1,2,3],[1,2,3,4])
// console.log(d);







// let arr = [
//     {
//         id: 12,
//         name: 'John'
//     },
//     {
//         id: 2,
//         name: "Wandam"
//     }
    
// ]
// for(let i=0;i<arr.length;i++){
//     const sortAges = arr.sort((a, b)=> b - a);
//     console.log(sortAges);
         
// }


 
// let twoSum = function(nums, target) {
//     let result = []
//     for(let i = 0; i<nums.length; i++){
//       for(let j = i+1; j<nums.length; j++){
//         if(nums[i] + nums[j] === target){
//           result.push(i, j)
//         }
//       }
//     }
//     return result
// };

// console.log(twoSum([1,0,10,2,3], 13))




// function twoSum(array,target){
//     let mapOfNumbers = {};
//     let twoIndex = [];
//     for(let i=0;i<array.length;i++){
//         mapOfNumbers[array[i]]=i;
//     }
//     for(let i=0;i<array.length;i++){
//         let goul = target - array[i];
//         if(mapOfNumbers[target]){
//             twoIndex.push(i);
//             twoIndex.push(mapOfNumbers[goul])
//             return twoIndex;
//         }
//     }
//     return [];
// }
// console.log(twoSum([1,0,10,2,3], 6))

// const twoSum = (array, goal) => {
//     let mapOfNumbers = {};
//     let twoIndexes = [];
  
//     for (let i = 0; i < array.length; i++) {
//       mapOfNumbers[array[i]] = i;
//     }
//     console.log(mapOfNumbers)
//     for (let i = 0; i < array.length; i++) {
//       let target = goal - array[i];
//       if (mapOfNumbers[target] && mapOfNumbers[target] !== i) {
//         twoIndexes.push(i);
//         twoIndexes.push(mapOfNumbers[target] );
//         return twoIndexes
//       }
//     }
  
// //     return [];
//   };
// console.log(twoSum([1,0,10,2,3], 13))





// function twoSum(arr,target){
//     for(let i=0;i<arr.length;i++){
//         const diffIndex = arr.indexOf(target-arr[i])
//             if(diffIndex>=0 && diffIndex !== i){
//                 return [i, diffIndex]
//             }
//     }
//     return []
// }

// console.log(twoSum([1,0,10,2,3], 13));

function fn(arr,target){
    let result = []
    let valid = []
    for(let i = 0; i < arr.length; i++){
        if(target.includes(arr[i])){
            valid.push(arr[i])
        }
    }
    result.push(valid.reduce((res,sem) => res.length > sem.length ? res : sem, 0))
    return result
}
console.log(fn(["go", "gog", "goo"], "google"))