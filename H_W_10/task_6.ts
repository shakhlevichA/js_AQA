// ! Для enum можно использовать Object.values
// Есть таблица:
// [/*[Товар, Скидка в процентах, Цена без скидки], 
//*/['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3],
// ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]
// Описать enum, где содержатся все доступные товары (числовой или строковый, по желанию)
// Описать функцию, которая принимает параметром один из элементов енама и массив 
//(тип [string, number, number][]) и возвращает сумму со скидкой для этого товара


const onSale = [['Огурец', 10, 6.4], ['Помидор', 8, 9], ['Молоко', 5.6, 3.3], ['Кефир', 1, 2.4], ['Соль', 0, 1.09], ['Сахар', 50, 5]]


enum DiscountProd{
    cucumber,
    tomato,
    milk,
    kefir,
    salt,
    sugar,
}

function logOnSale(object:{}, arr:[]){
    // ДАЛЬШЕ НЕ МОГУ СООБРАЗИТЬ С ЧЕГО НАЧАТЬ.
    //
}