//Дана строка 'я учу typescript!'.
// Проверить, есть ли данное слово в строке:
// если есть - вывести позицию подстроки 'учу',
// если нет - вывести строку `Данной подстроки нет`


const givStr= 'я учу typescript!';
if(givStr.includes('учу')){
    console.log(givStr.indexOf('учу'))
}else {
    console.log(`Данной подстроки нет`)
}