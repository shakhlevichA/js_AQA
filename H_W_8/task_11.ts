// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию:
// {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// еализуйте решение двумя способами, используя `function declaration` & `arrow function`. -->


const obj = {
    firstName: 'Петр',
    surname: '', 
    age: '20 лет', 
    }
// const {name = 'Аноном', surname = 'Анонимович', age = '? лет' } = obj
// // function dan({name = 'Аноном', surname = 'Анонимович', age = '? лет' }){
// //     return name = `${'Аноном'}`, surname = `${'Анонимович'}`, age = `${'? лет'} `

// // }
// function qwe(obj){
//     if(name ===''){
//     console.log();
    
//     }
// }


// dan(obj)
// console.log(dan(obj));
const {firstName, surname, age } = obj// НА ИМЯ ПЕРЕМЕННОЙ **name** РУГАЕТСЯ ГОВОРИТ, ЧТО УСТАРЕЛО. НЕТ СИЛ РАЗБЕРАТЬСЯ, РЕШИЛ СПРОСИТЬ У ТЕБЯ)) А ПОКА ПРОСТО ПЕРЕИМЕНОВАЛ.

function dan(obj: {
    firstName: string;
    surname: string;
    age: string;
}){
    if(obj.firstName ===''){
        console.log('Аноном');   
    }else if(obj.surname ===''){
        console.log('Анонимович');
        
    }else if(obj.age===''){
        console.log('? лет');
        
    }
}
dan(obj)
console.log(firstName);
console.log(surname)
console.log(age)

// ТУТ Я ВНО Я ЧЕГОТО НЕ УЛАВЛИВАЮ. НУЖНЫ ПОДСКАЗКИ. 