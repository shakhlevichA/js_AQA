// + Реализуйте приложение:
//     + Для приложения используется `https://jsonplaceholder.typicode.com/todos`
//     + Напишите 2 функции `getTodos` & `getTasks`
//         + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
//         + Функция `getTasks` принимает id пользователя и статус задачи (завершена или нет)
//  и возвращает массив объектов c айди и названием задачи, {id:number; title: string}[]
// для всех завершенных или незавершенных (в зависимости от значения параметра) задач 
//         + Вывести полученный результат в консоль

import fetch from "node-fetch";
import { resolve } from "path";
const url = `https://jsonplaceholder.typicode.com/todos`;

type RespType = {
      userId: number,
    id: number,
    title: string,
    completed: boolean,
}

async function getTodos(url: string){
      const result = await fetch(url).then(res => res.json())as RespType[];
      return result 
      //console.log (result)
}
 const pesp = getTodos(url)

  function getTasks(userId?:number, completed?:boolean){
    const promise = new Promise((resolve, reject)=>{
        resolve(pesp)
        reject(new Error('Fail'))
    }).then((result: any)=> {
         console.log(result) // ЗДЕСЬ МАССИВ ОБЪЕКТОВ
    })
 }
// НЕ ПОНИМА ГДЕ ДОПУСТИЛ ОШИБКУ ИЛИ ЗДЕСЬ ВСЕ НЕ ПРАВЕЛЬНО.
// НО У result НЕТ МЕТОДОВ












// function getTasks(userId?:number, completed?:boolean){
//      //const getUrl = getTodos(url)
//      const promise2 = new Promise((resolve, reject)=>{
//          let qqq = (getTodos(url))
        
//      }).then((qqq:any)=>{
//         let wqw = qqq
//      })
// }
// function getTasks(userId?:number, completed?:boolean){
//     const getUrl = getTodos(url)
//     const promise = new Promise((resolve, reject)=>{
//       resolve(getTasks(getUrl as any))
//       reject(new Error('Fail'))
//     })
//     promise.then((result:any)=>{
//          return new Promise((resolve)=> resolve(result))
//     } )
// }
 
//  function getTasks(userId?:number, completed?:boolean){
//     const promise = new Promise((resolve, reject)=>{
//         resolve(pesp)
//         reject(new Error('Fail'))
//     }).then((result: any)=> {
//          result 
//     })
//  }











const result = await fetch(url).then(res => res.json())as RespType[];
// console.log(result.length);

function getTasks1 ( idNumber: number){
    const findId = (result.find(val => val.id === idNumber))
    const findCompleted = findId?.completed
    console.log(findCompleted)
}
getTasks1(12)