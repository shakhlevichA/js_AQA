// Написать функцию **getSumNumbers**,
// которая будет принимать число и вычислять сумму цифр
//  из которых состоит число.

// > Для 2021 это будет 5.

// function getSumNumbers(num:number){
//   let arr =("" + num) .split('').map(function(e){return parseInt(e)}).reduce(function(a,b){return a+b})
//  console.log(arr)
// }

// getSumNumbers(2022)

function getSumNumbers( num:number){
    const arr = ("" + num) .split('')
    const arrN = arr.map(function(e){ return parseInt(e)})
    const sumArr = arrN.reduce(function(a, b){return a + b})
    console.log(sumArr) 
   
}
getSumNumbers(2022)