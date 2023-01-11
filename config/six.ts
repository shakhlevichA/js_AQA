// // let q = 10
// // let qw = q
// // let qww = qw -1
// // // console.log(q)
// // // console.log(qw)
// // // console.log(qww)

// // const obj ={
// //     name: 'Vasay',
// //     isMail: true,
// //     agee: 30   

// // }
// // for (const key in obj){
// //    //@ts-ignore
// //    console.log(`ob kdsj ${key} kajakjc  ${obj[key]}`)
    
// // }

// // for (let index = 0; index < Object.keys(obj).length; index++) {
// //     const key = Object.keys(obj)[index];
// //     console.log(key)
    
// // }
// // console.log()
// // for (let index = 0; index < Object.values(obj).length; index++) {
// //     const val = Object.values(obj)[index];
// //     console.log(val)
//     //}


// const obj ={
//     name: 'Vasay',
//     isMail: true,
//     agee: 30,  
   
    
     

// }
// const obj1 ={
//     name: 'Vasay',
//     isMail: true,
//     agee: 30 ,
    

// }
// // function logd( any){
// //     console.log(`Ajas ${name}  lkjh ${ agee}`)
// // }
// // console.log(JSON.stringify(obj));
// // console.log(typeof JSON.stringify(obj));
 
// const clone = {
//     hair: 'red',
//     ...obj,
//     nog: 'blue'
// }
// console.log(clone);



// const maxFuelTank = 60// макс обьём бака( 60 )
// const fuelConsumption = 10// расход (10/100км)
// let fuelReserve = 10// запасс топливаа ( 10 л)
// //- метод `drive` (не абстрактный), 
// //который принимает расстояние в км, 
// // отнимает от `fuelReserve` количество затраченного топлива,
// // в случае, если расстояние невозможно проехать 
// //с текущим запасом топлива, вызывается другой метод//

// function drive(distance:number){//15km
//     let litersForDistance = distance / fuelConsumption;// 1,5
//     if(litersForDistance < fuelReserve){
//         return `топлива достаточно`
//     }else{
//         return refuel2(litersForDistance)
//     }

// }



// function refuel2(liters?: number) {
//     liters === undefined ? liters = maxFuelTank / 2 : liters
//     let result = 0;
//     let quantity = 0;
//   if( liters > maxFuelTank){
//     quantity = (liters - fuelReserve)/ maxFuelTank
//     result = Math.ceil(quantity)
//     return ` заправится нужно ${result}`
//   }else {
//     result = liters * fuelConsumption;
//     return ` топлива хватит на ${result}км`
//   }
// }
//   console.log(drive(1500));
  


// // function drive(distance:number){//1500km
  
// //   const litersForDistance = distance / fuelConsumption;

//   if( litersForDistance/fuelReserve){
//     refuel(litersForDistance);
//   }
// }  
 
// (1500 / 10 =150) - 10 / 60 - 2,3333

// function refuel(liters?: number){
//     if(liters === undefined){
//        liters = maxFuelTank / 2;
//     }else liters = liters;
//     //liters === undefined ? liters = maxFuelTank / 2 : liters;
//     let refillQuantity = 0;
//     if( liters > maxFuelTank){
//         refillQuantity = liters / maxFuelTank;
       
//     }
//      return refillQuantity
// }


//console.log(drive(1500));
//console.log(refuel(15))

// function refuel1(liters?: number)  {
//         if(!liters || (liters && (fuelReserve + liters) > maxFuelTank)) {
//             liters = maxFuelTank - fuelReserve;
//             fuelReserve = maxFuelTank;
//         } else {
//             fuelReserve += liters;
//         } return fuelReserve
//         //Bills.addBill('fuel', liters * fuelType);
//     }
//    // console.log(refuel1(15));

  
   //цена название корзина скидки поле количество 