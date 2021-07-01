// Деструктуризация - это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
// Пример 1
// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Braed'
// ]
// // console.log(list[0]);
// // console.log(list[1]);
// // console.log(list[2]);

// let [first, second, ...other] = list;
// console.log(first, second, other);

// Пример 2
// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ]
// // let [[...first], [...second]] = arr;
// // console.log(first, second);
// let [[a, b, c, d], newArr] = arr;
// console.log(a, b, c, d, newArr);

// Пример 3

// let obj = {
//     name: "Mars",
//     surname: 'Radbek uulu',
//     age: 17
// }

// let { name, surname, age } = obj;
// console.log(surname, name, age);

// Пример 4

// let obj1 = {
//     subObj: {
//         name: 'Mars'
//     }
// }
// let { subObj: { name } } = obj1
// console.log(name);

// Пример 5
// let obj2 = {
//     arr: [
//         {
//             name: 'Mars'
//         }
//     ]
// }

// let { arr: [{ name }] } = obj2
// console.log(name);

// Пример 6
// function foo({ name, age }) {
//     console.log(name);
//     console.log(age);
// }
// let person = {
//     name: 'mars',
//     age: 16
// }

// foo(person)

// Пример 7
// let arr = [1, 2, 3, 4, 5]
// let [, , , four, five] = arr
// console.log(four, five);

// spread-оператор. Этот оператор имеет такой же синтаксис, но выполняет противоположную задачу. Он не сворачивает элементы, а наоборот, растягивает их. С его помощью обычно копируют или сливают массивы.
// Пример 1
// function foo(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
// }
// let arr = [1, 2, 3, 4, 5]
// foo(...arr)

// // Пример 2
// let a = {
//     name: 'Mars'
// };
// let b = {
//     age: 16
// }
// console.log(a === b);

// Глубокое копирование объектов
// Глубокая копия продублирует каждый объект на пути копирования. Оригинал и скопированный объект не будут иметь ничего общего и совместно использоваться не будут, в общем, это будет копия оригинала.

// ДЗ
// Задание №1
// Дан массив ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// Вам надо поместить в переменную
// firstName 1-элемент массива, а в
// переменную titul  3-элемент.
// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// let [firstName, ...titul] = arr
// console.log(firstName, titul);

// Задание №2
// Дана строка `Albert Einstein`.
// Поместите в переменную firstName первое слово,
// в переменную lastName второе слово.

// let str = `Albert Einstein`;
// let [firstName, lastName] = str.split(` `)
// console.log(firstName, lastName);

// Задание №3
// Создайте объект let obj = {};
// В свойство firstName поместите первое
// слово из задания №2
// В свойство lastName поместите второе
// слово из задания №2
// let obj = {
//     name: firstName,
//     name2: lastName
// }
// console.log(obj);

// Задание №4
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
// Запишите соответствующие значения в переменные name, surname и age
// let obj = { name: 'Петр', 'surname': 'Петров', 'age': '20 лет' }
// let { name, surname, age } = obj
// console.log(name, surname, age);

// Задание №5
// Дан объект: { hello: "World", console: "log", java: "script" }
// Поместите в переменные, первые два свойства.
// Следующие  выведите в консоль. Используйте оператор ...rest (spread).
// let obj = { hello: "World", console: "log", java: "script" }
// let { hello, console: cons, ...java } = obj
// console.log(hello, cons, java);

// Задание №6
// Вам нужно поменять местами значения
// переменных.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0
// let a = 0;
// let b = 1;
// [a, b] = [b, a]
// console.log(a, b);

// Задание №7
// Дан массив ['первый', 'второй'].
// Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
// а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не над
// let arr = ['первый', 'второй']
// let [, elem2 = 'bbb', elem3 = "eee"] = arr
// console.log(elem2, elem3);

// Задание №8
// Дан объект {name: 'Jack', age: '22', hobbys: [football, swimming]}
// Запишите в переменные hobby1 и hobby2 слова football и swimming соответственно.
// let obj = { name: 'Jack', age: '22', hobbys: ['football', 'swimming'] }
// let { hobbys: [hobby1, hobby2] } = obj
// console.log(hobby1, hobby2);


// Задание №1  
// Дан объект {name: "John", years: 30}.
// Напишите деструктурирующее присваивание, которое:
// 	•	свойство name присвоит в переменную name.
// 	•	свойство years присвоит в переменную age.
// 	•	свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
// let obj = {
//     name: "John",
//     years: 30
// }
// let { name: newName, years: age, isAdmin = false } = obj
// alert(newName)
// alert(age)
// alert(isAdmin)


// let arr = [32, 'Michael', 'Jackson']
// let [age, firstName, lastName] = arr
// console.log(age, firstName, lastName)

// let str = `Albert Einstein`;
// let [firstName, lastName] = str.split(` `)
// let obj = {
//     name: firstName,
//     name2: lastName
// };
// console.log(obj);