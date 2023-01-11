// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей
// (в противном случае результат неверный, вывысти, что прислали неверные результаты).
// Жаль что нам присылают результат матча в формате:
// {
// 	team1: "liverpool",
// 	team2: "chelsea",
// 	matchResult: "0:0",
// 	penalty: "10:11"
// }
// ведь нам надо это вывести в консоль словами:
// -кто сколько забил
// -если были пенальти, то счет по ним (свойства в объекте может не быть)
// -результат матча - чья победа/поражение/ничья
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 
// const game = {
// 	team1: "liverpool",
// 	team2: "chelsea",
// 	matchResult: "0:0",
// 	penalty: "10:11"
// }

const strMatch = `{
	team1: "liverpool",
	team2: "chelsea",
	matchResult: "0:0",
	penalty: "10:11"
}`
let match = JSON.parse(strMatch)// <--  не могу понять почему аргунент здесь анонимный?
console.log(match);

 

 type TMatch ={
    team1: string,
    team2: string,
    matchResult: string,
	penalty?: string
 }
  let liverpoolChelsea:TMatch ={
    team1: '',
    team2: '',
    matchResult: '',
	penalty:'',
  }


 function valid(team1:string, team2:string, matchResult:string, penalty:string){
    if(+matchResult <= 9){
        console.log('прислали неверные результаты')
    }
 }

// Что мне нужно сделать?
// 1. я получаю строку и присваиваю её переменной
// 2. перевожу её в объект
// 3. пишу тип
// 4. пишу валидацию
// 5. пишу функцию
// 6. вызываю функцию и как аргумент передаю объект
// Хоть мысли верный?

 
 
