//>>>>>>>>>>>>>>>>>>>>   1- example  <<<<<<<<<<<<<<<<<<<<

// function fac(num){
//     if(num === 1) {
//         return num;
//     // return num * fac(num - 1);
//     }
//     return num * fac(num - 1);
// }

// fac(5);
// console.log(fac(4));


//>>>>>>>>>>>>>>>>>>>>>>> 2- example <<<<<<<<<<<<<<<<<<<<<<<
 
// function natija(x,y){
//     for(let i = x+1;i < y;i++){
//         console.log(i);
//     }
// }
// natija(2,9);

//>>>>>>>>>>>>>>>>>>>>>> 3- example <<<<<<<<<<<<<<<<<<<<<<<<<

// let massiv = [1,2,3,4,5,6];
// jm = 0;
// for(let i=0;i<massiv.length;i++){
//     for(let j=0;j<massiv;j++){
//         j++;
//         console.log(i[j]);
//     }
// }

//>>>>>>>>>>>>>>>>>>>> 4- example <<<<<<<<<<<<<<<<<<<<<<<<<<
// function nt(n){
//     n = n**2;
//     console.log(n);
// }
// nt(8);

// >>>>>>>>>>>>>>>>>> 5- example <<<<<<<<<<<<<<<<<<<<<<<<<<<

// function fibi(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : fibi(n - 1) + fibi(n - 2)
//  }
 
//  console.log(fibi(10));// 1+1+2+3+5+8+13+21+34+55

// >>>>>>>>>>>>>>>>>> 6- example <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function jufttoq(a){
//     if(a % 2 == 0){
//         console.log('Juft Son',a);
//     }else{
//         console.log('Toq Son',a);
//     }
// }
// jufttoq(22);

// >>>>>>>>>>>>>>>>> Function <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// >>>>>>>>>>>>>>>>> 1- example<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function substrings(str1)
// {
// let array1 = [];
//   for (let x = 0, y=1; x < str1.length; x++,y++) 
//   {
//    array1[x]=str1.substring(x, y);
//     }
// let combi = [];
// let temp= "";
// let slent = Math.pow(2, array1.length);

// for (let i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (let j=0;j<array1.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array1[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   console.log(combi.join("\n"));
// }


// function all(str) {
//     let result = [];
//     for (const e of str) {
//     let temp = [e];
//     for (const i in result) temp.push("" + result[i] + e);
//     result = result.concat(temp);
//     }
//     return result;
//     }
//     console.log(all("123")); // ["1", "2", "12", "3", "13", "23", "123"]


// >>>>>>>>>>>>>>>>>> 2- example <<<<<<<<<<<<<<<<<<<<<<<<<<<

// function alfabetSort(str){
//     return str.split('').sort().join('');
// };
// console.log(alfabetSort('webmaster'));

// >>>>>>>>>>>>>>>>>> 3- example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const str = 'assalomu alaykum xonimlar ile janoblar';
// const str2 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str2);


// >>>>>>>>>>>>>>>>>>> 4- example <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<





 



