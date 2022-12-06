// + Изограмма - это слово,
// в котором нет повторяющихся букв, 
//последовательных или непоследовательных. 
//Реализуйте функцию, которая определяет, является ли строка, 
//содержащая только буквы, изограммой.
// Предположим, что пустая строка является изограммой.
// Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ``


function isIsogram(str:string){
    return !/(\w).*\1/i.test(str)
}



console.log(isIsogram("Dermatoglyphics"));

console.log(isIsogram("aba"));

console.log(isIsogram("moOse"));
