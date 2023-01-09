// Написать класс, который принимает строку (`str`) и число (`classNum`)

// (число всегда меньше или равно количеству символов в строке)


//  написать геттер, который возвращает символ, который наиболее часто повторяется в строке

//  и метод, который принимает необязательный параметр - число (`paramNum`).
// (число также всегда меньше или равно количеству символов в строке)
// если число есть, то `num = classNum - paramNum`, если нет, то `num = classNum`
// функция возвращает `str`, в которой часть строки перевёрнута
// если `num < 0`, то первые `num` символов, если `num > 0`, то последние `num` символов
// например строка 
// `str = 'это строка', num = 2, result = 'тэо строка'`
// `num = -2, result = 'это строак'`
// `num = 10, result = 'акортс отэ'`



class Perone{
    str: string;
    classNum: number ; 
    paramNum: number;
   
    
    
    constructor(str: string, classNum: number, paramNum: number | undefined){
        this.str = str;
        this.classNum =  this.classNum = classNum <= str.length ? classNum : str.length - 1
        
        this.paramNum = this.paramNum  = classNum <= str.length ? classNum : str.length - 1
        // НЕ НАШЁЛ КАК ЗАДАТЬ УСЛОВИЯ К НЕОБЯЗАТЕЛЬНОМУ ПАРАМЕТРУ. ПОЭТОМУ СДЕЛАЛ ЕГО ОБЯЗАТЕЛЬНЫМ.
    }
   get symInStr(){
    let obj = []
    let maxValue = 0
    let maxSym = ''

     for (let sym of this.str) {
        if (obj.hasOwnProperty(sym)) {
            //@ts-ignore
            obj[sym]++
        } else {
            //@ts-ignore
            obj[sym] = 1
        }
        
    }
    for (let sym in obj) {
        //@ts-ignore
        if (obj[sym] > maxValue) {
            // //@ts-ignore
            maxValue = obj[sym]
            maxSym = sym
        }
    }
    return maxSym
    // ПОКАЖИ КАК НУЖНО БЫЛО ЭТО СДЕЛАТЬ
   }
   
   REFER(num: number){
     num === undefined ?  this.classNum :this.classNum - this.paramNum
     
     if(num < 0){
        this.str.split('')
        // ХЗ КАК ПЕРЕВЕРНУТЬ ЧАСТЬ СТРОКИ. 
        
     }
   }


}

const maan = new Perone('sqiqoquqtqh', 4, 5)
// console.log(maan.classNum);
// console.log(maan.paramNum)
console.log(maan.symInStr);






