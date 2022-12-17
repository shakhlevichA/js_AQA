// Пользователь вводит что-либо. 
// Посчитать и вывести сумму цифр в тексте (используя Array.from, reduce)
// По 1, 2 и 3 символам в введённой строке вывести общее количество таких символов


 
const str = '11 j2k2k k3'
const strNum = str.replace(/[^0-9]/g,"")
const arr = Array.from(strNum).map(i => Number(i))

const initVal = 0;
const sumNumArr = arr.reduce((acc, val) => acc + val, initVal)
console.log(sumNumArr)
//КАК ВЫВЕСТИ ОБЩЕЕ КОЛИЧЕСТО СИМВОЛОВ? ЧЕРЕЗ **.match** И РЕГУЛЯРНОЕ ВЫРОЖЕНИЕ?
// ПОДСКАЖИ НОРМАЛЬНЫЙ РЕССУРА ПО НИМ. 



