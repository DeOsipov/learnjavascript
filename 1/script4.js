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