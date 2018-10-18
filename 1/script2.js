/*----------------------Рекурсия, стек
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) {... ваш код ...}

alert( sumTo(100) ); // 5050*/

//-------1
function sumTo(n) {
	let sum = 0;
	for (let i = 0; i <= n; i++ ) {
		sum = sum + i;
	};
	return sum;
};

//---2
function sumTo(n) {
	if ( n > 1 ) {
	return n + sumTo(n-1)
	} else {
		return 1; 
	};
};

//-----3
function sumTo(n) {
	if (n > 1) {
		return (1 + n) * n/2;
	} else {
		return 1;
	};
};

/*Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
alert( factorial(5) ); // 120
Подсказка: обратите внимание, что n! можно записать как n * (n-1)!. Например: 3! = 3*2! = 3*2*1! = 6
*/

//---1
function factorial( n ) {
	if (n > 1) {
		return n * factorial( n-1 );
	} else if ( n < 0 ) {
  	alert ('Input is not correct!')
  } else {
		return n;
	};
};

//---2
function factorial( n ) {
	return n > 1 ? n * factorial( n - 1 ) : n;
};

/*Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
Все запуски функций из примера выше должны срабатывать быстро.
*/

//---1
function fibSeq( n ) {
	return n > 1 ? fibSeq( n - 1 ) + fibSeq( n - 2 ) : n;
};

//---2
function fibSeq(n) {
	var phi = (1 + Math.sqrt( 5 )) / 2;
	return (( Math.pow(phi, n) - Math.pow(-phi, -n)) / ( 2 * phi - 1 )).toFixed();
};

//---3
//a=1 b =1 c =2 a= 1 b= 2 c=3 a=2 b=3 c=5 a=3 b=5 c=8
function fibSeq( n ) {
	var a = 1,
		b = 1;

	for ( i = 3; i <= n; i++ ) {
		var c = a + b;
		a = b;
		b = c;
	};
	return b;
};

/*---Именованные функциональные выражения
Каков будет результат выполнения кода?
function g() { return 1; }
alert(g);*/

function g() { return 1; } // function declaration

/*А такого? Будет ли разница, если да – почему?
(function g() { return 1; });
alert(g);*/

не работает // named function expression - g() is not global