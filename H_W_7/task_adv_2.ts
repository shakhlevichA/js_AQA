// Для решения задач используйте циклы **`for`** или **`for of`**
// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
]

let newMatrix = matrix.flat()
console.log(newMatrix);

function average(num:number[]) {
    return num.reduce((a, b) => (a + b)) / num.length;
}
console.log(average(newMatrix));

// КАК ЭТО СДЕЛАТЬ ЧЕРЕЗ for; for of, Я НЕ ПРИДУМАЛ)
 //НА ТЕБЯ НАДЕЖДА!!! ))
 //НАТОЛКНИ НА МЫСЛЬ