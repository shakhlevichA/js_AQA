//Попросить пользователя ввести что-либо. 
//Вывести, сколько секунд он писал 
//(с математическим округлением) и сумму всех цифр в тексте
 


const readline = require("readline-sync");
const strat = Date.now()
const result:string= readline.question("Type something: ");
const sumNum  = parseFloat(result.replace(/[^\d]/g, '')) // НЕ НАШЁЛ КАК ПОЛУЧИТЬ СУММУ

console.log(sumNum)
console.log(`${Date.now() - strat}ms`) // НЕ НАШЁЛ КАК МИЛЛИСЕКУНДЫ  ПЕРЕВЕСТИ В СЕКУНДЫ



