// Дан массив. 
//Запишите второй элемент этого массива в переменную elem2,
// третий - в переменную elem3. 
//Если в массиве нет третьего элемента 
//- запишите в переменную elem3 значение 'eee', 
//а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не надо.

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 

const danArr = [10, 12, ]
const [, elem2 = 'bbb', elem3 = 'eee' ] = danArr

function qwe([elem2, elem3]: any){
    if(elem2 === undefined){
    console.log('bbb')
    }
    else if(elem3 === undefined){
        console.log('eee');
         
    }
}

console.log(elem2);
console.log(elem3);

// ЧЕРЕЗ ФУНКЦИЮ НЕ СООБРАЗИЛ КАК ПРИСВОИТЬ