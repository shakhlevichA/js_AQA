// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников 
//и результат поместите в соответствующую переменную


let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        Andrey: 664,
        alexandra: 199
    }
    let avergeSalary: number;
    let salariesSum = 0;
    for(const Key in salaries){
       
    salariesSum += ((salaries as any)[Key]) / Object.keys(salaries).length
      
    }
    console.log(salariesSum)