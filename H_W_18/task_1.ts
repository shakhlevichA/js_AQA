
// - Реализовать класс для работы со строками. Методы:

//     - количество символов по переданному индексу. 
//  Например: строка "strings", index = 0, возвращает "s2" или {symbol: 's', count: 2}

// 	- все индексы подстроки.
//  Например строка "str with some subs in str", substring = "str", возвращает [0, 22]

// 	- deconsteExclude: метод принимает подстроку для удаления и индекс,
// который указывает, какую из подстрок не заменять. 
// 	Например строка
// "3 str for 3 excercise 3", substring = '3', 
//index = 1, возвращает "str for 3 excercise";
//index = 0, возвращает "3 str for  excercise"; 
//index = 2, возвращает "str for  excercise 3".


// 	- метод принимает 2 массива с индексами и меняет символы по индексу из 1 массива на символы по индексу 2.
// 	Например строка "string", arr1 = [3,4,2], arr2 = [1,0,1], возвращает "stttsg" (i=>t,n=>s,r=>t)


// - Написать по 10 положительных и отрицательных тестов для каждого варианта:
// 	- Mocha + chai
// 	- Jest

// *Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны*





//СТРОГО НЕ СУДИ БОЛЬШЕ ХОТЕЛОСЬ РАЗОБРАТЬСЯ, ЧЕМ ВЫПОЛНИТЬ ЗАДАНИЕ.








export class LineWork{

    numSymbIndex(text: string, index: number){
        const element = text.charAt(index)
        let countElements = 0;
        let idx = text.indexOf(element);
      while (idx != -1) {
           countElements++;
           idx = text.indexOf(element, idx + 1);
    }
    return`symbol: ${element}, count:${countElements}`;
    }

    allIndexesString(text: string, substr: string){
        let arrInd = new Array();
        let lastIndex = -1;
        while((lastIndex = text.indexOf(substr, lastIndex + 1))!== -1){
            arrInd.push(lastIndex)
        }
        return arrInd
    }
}

//new LineWork().numSymbIndex('strings', 0)
//console.log( new LineWork().numSymbIndex('',0));
// console.log( new LineWork().numSymbIndex('strings', 100));
// console.log( new LineWork().numSymbIndex('str\nings', 0));
// console.log( new LineWork().numSymbIndex('',0));
 



// / ТРЕТИЙ МЕТОД, ПРЕДПОЛАГАЮ, ЧТО МНЕ НУЖНО МАССИВ ИНДЕКСОВ 
// (В ДАННОМ СЛУЧА [0, 10]) И СРАВНИТЬ ИХ СО СТРОКОЙ. И УДАЛИТЬ ЗНАЧЕНИЕ 
// ПО ИНДЕКСУ. НО КАК ЭТО РЕАЛИЗОВАТЬ Я НЕ ПРИДУМАЛ. 
// НУЖНЫ ПОДСКАЗКИ.
// И ПО ТРЕТЬЕМУ МЕТОДУ МНЕ КАЖЕТСЯ, ЧТО ЕСТЬ ВАРИАНТ РЕШЕНИЯ ПО ЛУЧШЕ, НЕЖЕЛИ ТОТ КОТОРЫМ БЫТАЛСЯ РЕШИТЬ Я.
// ПОКАЖИ КАК НУЖНО БЫЛО ЭТО СДЕЛАТЬ.

// ЧЕТВЁРТЫЙ МЕТОД, ТАМ У МНЕ ТАЖЕ ЗАГВОСТКА. КАК ЭТО РЕАЛИЗОВАТЬ? СКИНЬ ПРИМЕР, ЧТО БЫ Я В ЭТОМ РАЗОБРАЛСЯ.





function numSymbIndex(text: string, index: number){
        const element = text.charAt(index)
        let countElements = 0;
        let idx = text.indexOf(element);
      while (idx != -1) {
           countElements++;
           idx = text.indexOf(element, idx + 1);
    }
    return`symbol: ${element}, count:${countElements}`;
    }


console.log(numSymbIndex('strings', 100));
  

////////// НЕ МОГУ ПОНЯТЬ ПОЧЕМУ ВИСНЕТ ПРИ НЕГОТИВНЫХ ПАРАМЕТРАХ.
//// ИЛИ МОЖЕТ ПОТОМУЧТО Я НЕ УЧАЗАЛ КАК РЕАГИРОВАТЬ НА ТАКИЕ ПАРАМЕТРЫ?







// 	- deconsteExclude: метод принимает подстроку для удаления и индекс,
// который указывает, какую из подстрок не заменять. 
// 	Например строка
// "3 str for 3 excercise 3", substring = '3', 
//index = 1, возвращает "str for 3 excercise";
//index = 0, возвращает "3 str for  excercise"; 
//index = 2, возвращает "str for  excercise 3".

// function deconsteExclude(text:string, substr: string, index: number){
//     let arrInd = new Array();
//         let lastIndex = -1;
//         while((lastIndex = text.indexOf(substr, lastIndex + 1))!== -1){
//             arrInd.push(lastIndex)
//         }
//         let qqq = arrInd.splice(index)
//     //   console.log(qqq);
//     //   console.log(arrInd);
//       for (let i = 0; i < arrInd.length; i += 1){
//         let q = text.slice(0, arrInd[i])
//         console.log(q);
        
//       }
// }

// deconsteExclude("3 str for 3 excercise 32", '3', 2)






















//  function  allIndexesString(text: string, substr: string){
//         let arrInd = new Array();
//         let lastIndex = -1;
//         while((lastIndex = text.indexOf(substr, lastIndex + 1))!== -1){
//             arrInd.push(lastIndex)
//         }
//         console.log(arrInd);
        
//     }


// allIndexesString("str with some subs in str", "str")
// function getListIdx(str: string, substr: string) {
//   let listIdx = []
//   let lastIndex = -1
//   while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
//     listIdx.push(lastIndex)
//   }
//   return listIdx
// }
// getListIdx('abc bca abcabc cba', 'abc') 



























// function numSymbIndex(text: string, index: number){
//         const element = text.charAt(index)
//         let countElements = 0;
//        let idx = text.indexOf(element);
//       while (idx != -1) {
//            countElements++;
//            idx = text.indexOf(element, idx + 1);
//     }
//     console.log(`symbol: ${element}, count:${countElements}`);
    
//     //console.log(`В строке "${text}" символ ${element} встречается ${countElements} раз(а)`);
//     }

//     numSymbIndex('strings', 0)