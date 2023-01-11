//Для решения задач используйте циклы **`for`** или **`for of`**
//Реализуйте функцию которая будет проверять, является ли слово палиндромом.



function Palindrome(str:string) {
  return str == str.split('').reverse().join('');
}
 console.log(Palindrome('доход'))

 

function IsPalindrome(str:string) {
  const len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length -i -1])
      return false;
  return true;
}
console.log(IsPalindrome('доход'));

