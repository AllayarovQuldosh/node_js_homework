// const {deepStringEqual} = require("assert")

// const merge = (leftArr, rightArr) => {
//     const output = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
//         const leftEl = leftArr[leftIndex];
//         const rightEl = rightArr[rightIndex];

//         if(leftEl < rightEl){
//             output.push(leftEl);
//             leftIndex++;
//         }else{
//             output.push(rightEl);
//             rightIndex++;
//         }
//     }
//     return  [...output,...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];

// };
// const m = merge([1,3],[2,5]);
// console.log(m);





// function maregeSort(array){
//     if(array.length < 1){
//         return array;
//     }
//     const middleIndex = Math.floor(array.length / 2);
//     const leftArr = array.slice(0, middleIndex);
//     const rightArr = array.slice(middleIndex);

//     return merge(
//         maregeSort(leftArr),
//         maregeSort(rightArr)
//     );
// };
// const m = maregeSort([1,4,8,546,442,43,21,5432,78,453,11,2,55,1,234,90]);
// console.log(m);







// function merge(arr)
