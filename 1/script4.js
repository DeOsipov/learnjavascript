/*---Объекты: перебор свойств
Создайте функцию isEmpty(obj), которая возвращает true,
если в объекте нет свойств и false – если хоть одно свойство есть.

Работать должно так:
var schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); // false*/

//---1
function isEmpty(obj) {
	var counter = 0;
	for (key in obj) {
		counter++;
	};
	if (counter > 0) {
		return false;
	} else {
		return true;
	}
}
//---2
function isEmpty(obj) {
	for (key in obj) {
		return false;
	}
	return true;
}

/*Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.*/

function result(obj) {
	var count = 0;
	for (var key in obj) {
		count += obj[key];
	}
	return count;
}

/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника,
у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».*/

var max = 0;
var name = '';
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
  
for (var key in salaries) {
	if (max < salaries[key]) {
		max = salaries[key];
		name = key;
	}
}

/*
Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}*/

function multiplyNumeric(obj) {
	for (var key in obj) {
		if ( isNumeric(obj[key]) ) { //function isNumeric from task
			obj[key] *= 2;
		}
	}
}

/*Как получить последний элемент из произвольного массива?
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods.*/

goods[goods.length - 1];

/*Как получить последний элемент из произвольного массива?
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods.*/

goods.push('PC');

/*Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:

Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл*/

var styles = ['jazz', 'blues'];
tyles.push('Rock-n-roll');
styles[styles.lenght - 2] = 'Classic';
alert( styles.shift() );
tyles.unshift('Rap', 'Raggae');

/*Напишите код для вывода alert случайного значения из массива:
P.S. Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min));*/

//---1
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0;
var max = arr.length - 1;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert( arr[rand] );
//---2
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length);
alert( arr[rand] );

/*Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива*/
var obj = [],
	sum = 0;

while (1) {
	var value = prompt('Input a number', 0);
	if (value === '' || isNaN(value) || value === null ) break;
	obj.push(+value);
}

for ( i = 0; i < obj.length -1 ; i++ ) {
	sum += obj[i];
}

alert( sum );

/*Создайте функцию find(arr, value), которая ищет в массиве arr
значение value и возвращает его номер, если найдено, или -1, если не найдено.
Например:
arr = ["test", 2, 1.5, false];
find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2
find(arr, 0); // -1*/
