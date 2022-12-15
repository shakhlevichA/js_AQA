//Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

//C помощью цикла **for in** вывести в консоль 
//сначала все ключи, потом значения ключей обьекта. 

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const key in student) {
    
    console.log(key)
     //@ts-ignore
     console.log(student[key])
}

console.log();//////////////для разделения в консоле 

for (const key in student) {
    
    console.log(key)
     console.log((student as any)[key])
}

console.log();///////////////

for( let i = 0; i < Object.keys(student).length; i++){
    const key = Object.keys(student)[i];
    console.log(key);
    
}

console.log();////////////////

for( let i = 0; i < Object.values(student).length; i++){
    const key = Object.values(student)[i];
    console.log(key);
    
}

console.log();
