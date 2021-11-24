// >>>>>>>>>>>>002 -misol<<<<<<<<<<<<<<

// function lessby20_others(x, y, z) 
// {
// return (x >= 20 && (x < y || x < z)) ||
// (y >= 20 && (y < x || y < z)) ||
// (z >= 20 && (z < y || z < x));
// }
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75));

// true
// false
// true

// >>>>>>>>>>>>>001-example<<<<<<<<<<<<<<<

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {      
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
 
// const h = titleCase("I'm a little tea pot");
// console.log(h);

// >>>>>>>>>>>>>>>>>>>>Arraydan 1-example <<<<<<<<<<<<<<<<<<<<<<<<<<

// let arr = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//       };
//   console.log(arr('gzjbvjczlevdo23nozvoh'));
//   console.log(arr([1, 2, 4, 0]));
  
// />>>>>>>>>>>>>>>>>>>>>  2- example<<<<<<<<<<<<<<<<<<<<<<<<

// let array_Clone = function(arra1) {
//     return arra1.slice(0);
//        };
//    console.log(array_Clone([1, 2, 4, 0]));
//    console.log(array_Clone([1, 2, [4, 0]]));

// >>>>>>>>>>>>>>>>>>>>>> 3- example <<<<<<<<<<<<<<<<<<

// let hun =  function(arr, n) {
//     if (arr == null) 
//     return void 0;
//   if (n == null) 
//     return arr[0];
//   if (n < 0)
//     return [];
//   return arr.slice(0, n);
// };

// console.log(hun([7, 9, 0, -2]));
// console.log(hun([],3));
// console.log(hun([7, 9, 0, -2],3));
// console.log(hun([7, 9, 0, -2],6));
// console.log(hun([7, 9, 0, -2],-3));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>  4- example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let last =  function(arr, n) {
//     if (arr == null) 
//       return void 0;
//     if (n == null) 
//        return arr[arr.length - 1];
//     return arr.slice(Math.max(arr.length - n, 0));  
//     };
  
//   console.log(last([7, 9, 0, -2]));
//   console.log(last([7, 9, 0, -2],3));
//   console.log(last([7, 9, 0, -2],6));

// >>>>>>>>>>>>>>>>>>>>>>>>>> 5- example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));

// >>>>>>>>>>>>>>>>>>>>>>>>>> 6-example<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


