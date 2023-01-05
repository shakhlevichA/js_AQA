// ## Complete exercise
// В данном ДЗ все 4 задания связаны
// - для выполнения 2, нужно сделать 1
// - для 3 нужны другие поля, поэтому 1 и 2 нужно только частично
// - для 4 нужны часть 1, 2 и полностью 3



////////////////////////////////////////////////////////

// ## В методах, где принимаются какието параметры, 
//    сделайте проверку через условный оператор, 
//   который в случае некорректных значений этих параметров 
// . будет выбрасывать исключение. 
// ## Вызов модулей реализуйте через import, export

//////////////////////////////////////////////////////

// Создайте абстрактный класс родитель Car 
//и два класса дочерних (любые 2 марки машины), 
// cразнесенных по разным модулям. 
// Класс Car включает:
// - абстрактные поля: максимальный объем топливного бака,
// расход топлива на 100км, запас топлива (`fuelReserve`) 
//- поля инициализируются в конструкторе дочерних классов
// - метод `drive` (не абстрактный), 
//который принимает расстояние в км, 
// отнимает от `fuelReserve` количество затраченного топлива,
// в случае, если расстояние невозможно проехать 
//с текущим запасом топлива, вызывается другой метод
// - `refuel` (заправиться) столько раз, 
//сколько необходимо для того, чтобы проехать расстояние
// Метод `refuel` имеет необязательный параметр количества топлива.
// Если он не указан, то заправляется полный бак

import { Car } from "./task_1_Car"
import { FuelCost } from "./task_2 _enum";

enum AudiCompletion{
   average = 'Average',
   maximum = 'Maximum',
   limitedEdition = 'Limited Edition'
}

class Audi extends Car{
    public readonly carName = 'audi';
    protected maxFuelTank: number;
    protected fuelConsumption: number;
    protected fuelReserve: number;

     constructor(fuelType: FuelCost, carName: 'audi', maxFuelTank: number, fuelConsumption: number,  fuelReserve: number){
        super(fuelType)
        this.carName = carName;
        this.maxFuelTank = maxFuelTank;
        this.fuelConsumption = fuelConsumption;
        this.fuelReserve = fuelReserve;
     }
}























