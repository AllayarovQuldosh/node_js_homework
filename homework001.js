



// let employees = [
//     {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
//     {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
//     {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
//  ];

// //
// employees.sort(function (x, y) {
//     return x.salary - y.salary;
// });

// console.log(employees);



// employees.sort(function (x, y) {
//     let a = x.name.toUpperCase(),
//         b = y.name.toUpperCase();
//     return a == b ? 0 : a > b ? 1 : -1;
// });

// console.log(employees);
// // // Code language: JavaScript (javascript)





// employees.sort(function (x, y) {
//     let a = new Date(x.hireDate),
//         b = new Date(y.hireDate);
//     return a - b;
// });

// console.table(employees);






// let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

// rivers.sort(function (a, b) {
//     console.log(a, b);
//     return a.length - b.length;
// });
// // Code language: JavaScript (javascript)






// // temporary array holds objects with position
// // and length of element
// var lengths = rivers.map(function (e, i) {
//     return {index: i, value: e.length };
// });

// // sorting the lengths array containing the lengths of
// // river names
// lengths.sort(function (a, b) {
//     return +(a.value > b.value) || +(a.value === b.value) - 1;
// });

// // copy element back to the array
// var sortedRivers = lengths.map(function (e) {
//     return rivers[e.index];
// });

// console.log(sortedRivers);


// let scores = [
//     9, 80, 10, 20, 5, 70
// ];
// // descending order
// scores.sort((a, b) => b - a);
// console.log(scores);



// let obj=[
//     {name:'john',lname:'doe',address:'Alaska'},
//     {name:'tom',lname:'hopes',address:'California'},
//     {name:'harry',address:'Texas'}
//     ]
//     let field='lname';
//     console.log(obj.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString())));



//>>>>>>>>>>>>>>1-misol<<<<<<<<<<<<<<<<

// const arr = [1,2,3,4,5,6,7];
// const a = arr;
// console.log(a);

//>>>>>>>>>>>>>2-misol<<<<<<<<<<<<<<<<<

// const arr1 = [[11,22,33]];
// const b = arr1;
// console.log(b.length);
// >>>>>>>>>>>>3-misol<<<<<<<<<<<<<<<<<<<<<<

// const arr2 = [[1,1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1,1],[11,1,1,1,1]];
// const d = arr2;
// console.log(d.length);


// >>>>>>>>>>>>>>.4-misol<<<<<<<<<<<<<<<<<<

// const arr3 = ['qalam','qalin','qadam'];
// String = ' ';
// for(let of arr3){

// }

// >>>>>>>>>>>>>>5-misol<<<<<<<<<<<<<<<<<<

// const arr4 = [3,4,5];
// // arr4.shift(1,2);
// // arr4.slice(0,1,2);
// // arr4.add(1,2)
// arr4.unshift(0,1,2);
// arr4.push(6,7,8);
// console.log(arr4);

// >>>>>>>>>>>>>>>>>>.6-misol<<<<<<<<<<<<<<<<<<

// const arr5 = [1,2,3,4,5,6,7,8,9];


// let arr = ['array','string','number','boolean','int'];
// function middle_of_arr1(arr){
//     middle = arr.length / 2;
//     deleted = arr.splice(middle - 1,3)
//     console.log(deleted, arr)
// }
// middle_of_arr1(arr)
     

// // >>>>>>>>>>>..7-misol<<<<<<<<<<<<<<<<<<

 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 8, 0];
// function getTeng(arr){
//     const unique = new Set(arr);
//     console.log(unique);
// }
// getTeng(arr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 8, 0];
// function getTeng(arr){
//     const unique = new Set(arr);
//     const res = [...unique];
//     console.log(res);
//     return res;
// }
// getTeng(arr);

// >>>>>>>>>>>>>>>>>.8-misol<<<<<<<<,,,,

// function concat(arr1,arr2){
//     return [...arr1, ...arr2];
// }

// const arr1 = [1,2,3,4];

// const arr2 = [1,22,23,44];




