// У нас есть список постов на сервере.
// И наша задача отрисовать текст этих постов на странице.

// Но по каким то необъяснимым причинам, 
//нам требуются посты номер 3, 7, 15, 23. 
//Выглядит просто. Но есть нюанс 🐒 

// Посты должны загружаться в определенном порядке.
// Сначала 15, потом 23, потом 7 и только потом 3. 
//А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение.
// В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.

// Для получения постов использовать https://jsonplaceholder.typicode.com/posts
// Задача может быть выполнена через https://jsonplaceholder.typicode.com/comments?postId=1
// либо через setTimeout.
// ###### Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await
import fetch from "node-fetch";
const url = 'https://jsonplaceholder.typicode.com/posts';

type RespType = {
      userId: number,
    id: number,
    title: string,
    body: string,
}

const result = await fetch(url).then(res => res.json())as RespType[];

function newPostList2 ( idNumber: number){
    const findId = (result.find(val => val.id === idNumber))
    const findBody = findId?.body
     return findId;
     //return findBody
}




function getComment(num1:number, num2:number, num3:number, num4:number){
    const promise1 = new Promise((res, rej)=>{
        res(newPostList2(num1));
        rej(new Error('Trouble'))
    }).then((result:any)=> {
        console.log('Sucess result :::', result);
    },
    (result: Error)=>{
        console.log('Fail result :::', result);
        
    });

      const promise2 = new Promise((res, rej)=>{
        res(newPostList2(num2));
        rej(new Error('Trouble'))
    }).then((result:any)=> {
        console.log('Sucess result :::', result);
    },
    (result: Error)=>{
        console.log('Fail result :::', result);
        
    });

     const promise3 = new Promise((res, rej)=>{
        res(newPostList2(num3));
        rej(new Error('Trouble'))
    }).then((result:any)=> {
        console.log('Sucess result :::', result);
    },
    (result: Error)=>{
        console.log('Fail result :::', result);
        
    });

     const promise4 = new Promise((res, rej)=>{
        res(newPostList2(num4));
        rej(new Error('Trouble'))
    }).then((result:any)=> {
        console.log('Sucess result :::', result);
    },
    (result: Error)=>{
        console.log('Fail result :::', result);
        
    });
}

getComment(15, 27, 7, 3)

function getComSetTim(num1:number, num2:number, num3:number, num4:number){
    setTimeout(()=>{
        console.log(newPostList2(num1));
        setTimeout(()=>{
            console.log(newPostList2(num2));
            setTimeout(()=>{
                console.log(newPostList2(num3));
                setTimeout(()=>{
                    console.log(newPostList2(num4));
                },0)
            },0)
        },0)
        
    },0)
}
getComSetTim(15,27,7,3)

// ПОКАЖИ КАК ЕЩЁ МОЖНО ЭТО РЕШИТЬ










