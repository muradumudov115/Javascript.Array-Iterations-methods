// Task-1.Her hansı bir stringin içərisindəki yazıları söz sırası və 
// hərf sırası daxil olmaqla tərs yazdıran bir function yazın;

// const strReverse=str=>str.split('').reverse().join('');
// console.log(strReverse('Welcome teacher'));


// Task-2.1 map,reduce,filter,every,find,foreach,ve.s 
// kimi hazir iterationlar istifade etmesek onlarin gorduyu ishleri arxa planin yazin;

// map.task
// function interfacemap(arr) {
//     for (let i = 0; i < arr.length; i++) {
//          arr[i]*=2
//   }
//     return  arr;
// }
// console.log(interfacemap([12,14,19,22,10]));


// reduce.task
// let sum=0;
// function interfacereduce(arr) {
//     for (let i = 0; i < arr.length; i++) {
//          sum+=arr[i]
//      }
//     return  sum;
// }
// console.log(interfacereduce([12,14,19,22,10]));


// filter.task
// let arr=[13,16,19,20,45];
// arr.forEach(num => {
//         if (num>15) {
//             console.log(num);
            
//         }
//     });
    

// every.task
// function functionevery(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>19) {
//             return true
//         }
//         else{
//             return false 
//         }
//     }
// }
// console.log(functionevery([32,24,21,22,50]));


// find.task
// let arr=[13,16,19,20,45];
// for (let index = 0; index < arr.length; index++) {
//     const element = array[index];
//     if (element>18) {
//         console.log(element);
//         break
//       }
//       else{
//           console.log("underfind");
//       }

    
// }



// foreach.task
// const letters=['1','2','3','4','8'];
// let count={};
// letters.forEach(item=>{
//     if (count[item]) {
//         count[item]++;
//     }else{
//         count[item]=1;
//     }
// });
// console.log(count);
