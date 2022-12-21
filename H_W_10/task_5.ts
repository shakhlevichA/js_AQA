// Опишите статическую функцию класса, которая принимает Generic параметр одного из типов:
// boolean, number или string. 
// И возвращает:для boolean: противоположное значение

// для string: если в строке есть скобки, то вывести, не забыли ли закрыть скобку,
// если нет - `скобок нет`

// для числа n: целое число, квадрат которого наиболее 
// близок к n (`1 для n=1,2,3`, `2 для n=4,5,6,7,8`, `3 для 9,10,11...`)
// Проверить функцию на все 3 типа

class UserInfo<T> {
    inform: T;
    
    
    constructor(inform: T) {
        this.inform = inform;
    }
    infGeger(){
        switch(typeof this.inform){
            case 'boolean':
                console.log(!this.inform);
            case 'string': 
            if(this.inform){}//ПОЧЕМУ НЕ МОГУ ВЫЗВАТЬ includes? 
            // В ЧЁМ ОШИБКА ИЛИ КАК ПО ДРУГОМУ?    
                
            
        }
    }
}

class UserInf<T> {
    inform: T;
    
    
    constructor(inform: T) {
        this.inform = inform;
    }
    static infGeger(){
        switch(typeof UserInf){
            case 'boolean':
                console.log(!UserInf);
            case 'string': 
            if(UserInf) {}//ПОЧЕМУ НЕ МОГУ ВЫЗВАТЬ includes? 
            // В ЧЁМ ОШИБКА ИЛИ КАК ПО ДРУГОМУ?    
                
            
        }
    }
}
