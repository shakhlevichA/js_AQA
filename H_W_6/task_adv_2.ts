// Даны два одинаковых обьекта. 
//Сравните их так чтобы они были равны 
//(должно работать при изменении количества и названий свойств объекта)

let student1 = {
        name: 'Polina',
        age: 27,
    }

let student2 = {
        name: 'Polina',
        age: 27,
    }


console.log(JSON.stringify(student1) ===JSON.stringify(student2));

function compare(obj1:{}, obj2:{}) {
  const val1 = Object.getOwnPropertyNames(obj1)
  const val2 = Object.getOwnPropertyNames(obj2)
  if (val1.length !== val2.length){
    return false;
  }
  for(let i = 0; i < val1.length; i += 1){
    const val = val1[i]
    if((obj1 as any)[val] !== (obj2 as any)[val]){
        return false
    }
  }
  return true
}
console.log(compare(student1, student2))

