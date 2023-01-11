// Для решения задач используйте циклы **`for`** или **`for of`**

// Есть случайный массив. Сложить и вывести в консоль все индексы элементов:
// строк, содержащих "w"
// чисел > 100
// Подсказка: в функции, которая передается в findIndex второй аргумент - индекс текущего элемента

const arr = ['qq', 'qwq', 'qq', 'qwq','12', '131', '22', '122']
const arrSunIndex = arr.findIndex((value: string, index:number)=> value.includes('3'))
console.log(arrSunIndex);

// for(let i = 0, let sum = 0; i < arr.length; i++){
   
//     sum += arr[i];
   
// }
const arrSum = arr.find(el =>el == '1')
console.log(arrSum)

// for(let i = 0; i < arr.length; i++){
   
//    console.log(arr[i]);
//    }

   // ТУТ НЕ МОГУ СООБРАЗИТЬ КАК РЕАЛИЗОВАТЬ УСЛОВИЯ. НУЖНА ТВОЯ ПОДСКАЗКА
   // КАКОЙ ТИП МАССИВА? (string | number)[] или string[] ?
   // как получить идекс двух условий?
   // напиши хотя-бы что использовать