// Тролли атакуют наш раздел с комментариями!!!
// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const comment = 'webysite'

const disemvowel = (str:string) => str.replace(/[aeiouy]/gi, '')

console.log(disemvowel(comment))

// ХЗ КАК ОСТАВИТЬ 'У'