// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.


const numbers = [5, 43, 63, 23, 90]

const spliceNum= numbers.splice(0)
console.log(numbers);



const numbers1 = [5, 43, 63, 23, 90]

for (const key in numbers1) {
    delete numbers1[key]
}
console.log(numbers1);


