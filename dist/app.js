"use strict";
// enum Role{ADMIN="pavan",AUTHOR="tata"};
// let admin="pavan"
// // function adding(num1:number,num2:number){
// //     return num1+num2;
// // }
// // const role:[number,number,number]=[1,2,3] //tuple yaha pe fixed length ke liye ye karte hai or type bhi set karte hai
// if(admin===Role.ADMIN){
//     console.log("ye admin found")
// }
// // ----------------------------///union types---------------------------------------
// function combine(a:string|number,b:string|number){
//     let result;
//     if(typeof a==='number' && typeof b==='number'){
//      result=a+b;
//     }
//     else{
//        result= a.toString()+b.toString()
//     }
//     return result
// }
// console.log(combine(1,20))
// console.log(combine("pavan","kumar"))
// // ----------------------------------------literal and alias-------------------------------------------- 
// type Combilable=number|string;
// function combine(a:Combilable,b:string|number,resultConvertion:'as-number'|'as-string'){
//         let result;
//         if(typeof a==='number' && typeof b==='number' || resultConvertion==='as-number'){
//          result=+a+ +b;
//         }
//         else{
//            result= a.toString()+b.toString()
//         }
//         // if(resultConvertion==='as-number'){
//         //  return +result
//         // }
//         // else{
//         //     return result.toString();
//         // }
//         return result;
//     }
//     console.log(combine(1,20,'as-number'))
//     console.log(combine(1,20,'as-number'))
//     console.log(combine("pavan","kumar",'as-string'))
// type User = { name: string; age: number };
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
// const u1: User = { name: 'Max', age: 30 }
// greet(u1)
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
// // --------------type of function-------------------------
// function add (a:number,b:number){
//     return a+b
// }
// // let secoundFunction:Function;
// let secoundFunction:(a:number,b:number)=>number;
//  secoundFunction =add;
// console.log(secoundFunction(2,3))
// // -------------------------------callbacks-------------------------------
// function addAndHandle(a:number,b:number,cb:(num:number)=>void){
//     const result =a+b;
//     cb(result)
// }
// console.log(addAndHandle(10,10,(result)=>{
//     console.log(result);
// }))
