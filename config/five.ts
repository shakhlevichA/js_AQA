// function qwe(asd: number, dsa: number) :void{
//     console.log( asd + dsa * 2)
// }

// qwe(5, 2)
  
const asd = ( i: number) =>{
    i++
    console.log(i);
    if( i < 4) asd(i)
    
    
    
}

let ww = asd(0)

// console.log(ww)