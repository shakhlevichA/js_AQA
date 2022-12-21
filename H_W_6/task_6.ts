// Создать валидатор,
// 2 метода: валидатор и логин. 
//Первый метод принимают у пользователя логин и пароль для регистрации.
// Затем данные записать в обьект. 

// Второй метод принимает данные пользователя
// и объект зарегестрированного пользователя.
// Если передан верный логин и пароль, 
//вывести сообщение **Добро пожалоВать**. 



type TypeUser = {
    login: string,
    password:number
}
let user1:TypeUser ={
    login: '',
    password: 0
}
function validate1(login:string, password:number){
    user1 ={login,password}
}
function login1(login:string, password:number, regisUser:TypeUser){
    if(login === regisUser.login && password === regisUser.password){
        console.log('Добро пожалоВать')
    }else{
        console.log('try again');
        
    }
}
validate1('user1', 3232)
login1('user1', 3232, user1)
login1('user', 3232, user1)