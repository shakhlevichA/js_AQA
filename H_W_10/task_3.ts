//Создайте два объекта машин. 
//Реализуйте метод выводящий количество дверей машины, 
//и с какой стороны находится руль. В зависимости от контекста выполнения,
// этот метод должен выводить соответвующую информацию о машинах. 
//К примеру `This car has 3 doors and this is left-hand drive car`

class Car{
    brandCar: string;
    engineType: number;
    hasDoors: number;
    positionRudder: string;

    constructor(brandCar: string, engineType: number, hasDoors:number, positionRudder:string ){
        this.brandCar = brandCar;
        this.engineType = engineType;
        this.hasDoors = hasDoors;
        this.positionRudder = positionRudder

    }
}

class LuxuryCar extends Car{
    maximumSpeed: number;
    price: number ;

    constructor(brandCar: string, engineType: number, maximumSpeed:number, price: number, hasDoors:number, positionRudder:string){
        super(brandCar, engineType, hasDoors, positionRudder);
        this.maximumSpeed = maximumSpeed;
        this.price = price;
    }
   
}

class SportCar extends Car{
    maximumSpeed: number;
    price: number ;

    constructor(brandCar: string, engineType: number, maximumSpeed:number, price: number, hasDoors:number, positionRudder:string ){
        super(brandCar,engineType, hasDoors, positionRudder)
    this.maximumSpeed = maximumSpeed;
    this.price = price;
    }
    
    
}
function logInfo(){
    //@ts-ignore
    console.log(`This car has ${this.hasDoors} doors and this is ${this.positionRudder} drive car`);
    
}


const audi = new SportCar('a5', 3, 240, 60000, 3, 'left-hand')
const bmw = new SportCar('750', 5, 280, 160000, 4, 'right-hand') 

logInfo.call(audi)
logInfo.apply(bmw)