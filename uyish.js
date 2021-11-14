
//Solution 1
 
// const arr1 = [18, 82, 5, 12, 4, 30];

// function maxmin(arr1){
//     let resultMax = arr1[0];
//     let resultMin = arr1[1];
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] > resultMax) {
//             resultMax = arr1[i];
//         }
//         if(arr1[i] < resultMin) {
//             resultMin = arr1[i];
//         }
//     }
//     return `max: ${resultMax} min: ${resultMin}`;
// }

// maxmin(arr1);
// console.log(maxmin(arr1));


// // Solution 2

// const arr = [10,3,8,1,33,12,22,123,1,90,7];

// function getMaxMin(arr){
//     let maximum = arr[0];
//     let minimum = arr[0];
//     for (let i = 0 ; i < arr.length; i++) {
//       if (maximum < arr[i]) {
//         maximum = arr[i];
//       } else {
//         minimum = arr[i];
//       }
      
//     }
//    let result =  ([maximum, minimum]); 
//     return result;
//   };
// console.log(getMaxMin(arr));

// const movies = [
//     {title: 'Baron',yers: 2018,rating: 4.5},
//     {title: 'Sotqin',yers: 2016,rating: 4.7},
//     {title: 'Timur',yers: 2019,rating: 3},
//     {title: 'Vatan',yers: 2014,rating: 1}

// ]
// function kino(movies){
//     let i = arr[0];
//     for(i=0;i<movies.length;i++){
//         kino.push(movies[i]);
//     }
// }

// kino(3);
// console.log(kino(3));



////>>>>>>>>>>>>>>>>5-misol

// const array = ["Red","Green","White","Black"];
// let arr = array;
 
// console.log(arr);

let arr = ['karthiq', 'chercher tech', 'is','not','that much good website'];

arr.forEach(function(element) {
    console.log(element);
});