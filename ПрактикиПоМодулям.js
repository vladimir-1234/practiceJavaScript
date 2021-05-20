// Здравствуйте, я работал в Командной строке Windows, поэтому если вы хотите проверить работает та или иная задача, 
//нужно будет убрать коментарий и просто в командной строке, если есть node.js,набрать команду node (имя файла.js) и запустить
//Нужно, чтобы node.js находился там же где и файл, который хотите запустить.


//1 Задание
//Если хотите проверить работает или нет, введите в parseInt(Любое значение).
/*
let params = parseInt("13");
if(isNaN(params))
	console.log("Упс, кажется, вы ошиблись!");
else if(typeof(+params) === "number")
{
	if(params%2==0)
	{
		console.log("Число четно");
	}
	else
		console.log("Число не четно");
}
*/


//2 Задание
//Если хотите проверить работает или нет, введите в X - любое значение.
/*
let x = NaN;
console.log(typeof(x));
if(x === "string" || x === "number" || x)
	console.log("x" + "-"+ typeof(x));
else
	console.log("x - не определен");
*/

	
//3 Задание.
//Если хотите проверить работает или нет, введите в str - любое значение типа string.
/*
let str = "Hello";
let arr = [...str]
console.log(arr.reverse().join(""));
*/

//4 Задание.
/*
//Два варианта решения.
let max = 100;
let min = 0;
let random1 = Math.floor(Math.random( ) * (max - min + 1)) + min;
	console.log(random1);


let random2 = Math.floor(Math.random()*100);
	console.log(random2);
*/

//5 Задание.
//Если хотите проверить работает или нет, введите в массив arr любые значения.
/*
let arr = [2,3,4,5,6,7];
	console.log(arr.length + " - Количество элементов массива" );
for(var i=0; i<arr.length; i++)
	console.log(arr[i]);
*/


//6 Задание.
//Два варианта решения один с циклом while, другой for ... else. 
/*
let arr = [2,2,2,2,2];
let flag = false;
let i = 0; 
while(arr.length-1 > i)
{
	if(arr[i+1] == arr[i])
		flag = true;
	else
	{
		flag = false;
		break;
	}
	i++;
}
console.log(flag);
*/

/*
let arr = [2,2,2,2,2];
let flag = false;
for(let i = 0; i < arr.length-1; i++)
{
	if(arr[i+1] == arr[i])
		flag = true;
	else
	{
		flag = false;
		break;
	}
}
console.log(flag);
*/

//7 Задание.
// Не совсем понял, что конкретно спрашивалось в задании, что означает, что если в массиве есть нулевой элемент, то он учитывается и выводиться отдельно? 
// Число 0 тоже четное число, зачем его выводить отдельно не понятно.
// Возможно это часть задания и я просто не правильно понимаю задание. 
//
/*
let arr = [1,3,4,6,0,7,8,3,4,543,0];
let array = [];
let count1 = 0;
let count2 = 0;
for(let i = 0; i < arr.length; i++)
{
	if(arr[i]%2==0)
		count1++;
	else
		count2++;
	if(arr[i]==0)
		array.push(arr[i]);
}
if(arr[0] == null)
	console.log("Массив пустой ");
else if(count1 == 0 && count2==0)
	console.log("Таких чисел нету ");
else
{
	console.log(count1 + " - количесво четных элементов");
	console.log(count2 + " - количесво нечетных элементов");
	console.log(array + " - столько нулей в миссиве arr")
}
*/


//8 Задание
//
/*
let map = new Map([ 
	["car1","Wolkswagen"],
	["car2","Mersedes"],
	["car3","Cadillac"]
])
for(let name of map.keys())
console.log(`ключ - ${name} значения - ${map.get(name)}`);
*/

//9 Задание
/*
function GetNumberEvenOdd(arr, array, count1, count2)
{

	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i]%2==0)
			count1++;
		else
			count2++;
		if(arr[i]==0)
			array.push(arr[i]);
	}
	if(arr[0] == null)
		console.log("Массив пустой ");
	else if(count1 == 0)
		console.log("Таких чисел нету ");
	else
	{
		console.log(count1 + " - количесво четных элементов");
		console.log(count2 + " - количесво нечетных элементов");
		console.log(array + " - столько нулей в массиве arr")
	}
}
let arr = [1,3,4,6,0,7,8,3,4,543,0];
let array = [];
let count1 = 0;
let count2 = 0;
console.log(GetNumberEvenOdd(arr, array, count1, count2));
*/


//10 Задание.
/*
let count = 0; 
function getPrimeNumber(variable)
{
	if(variable<=1000)
	{
		for(var i=0; i<=variable; i++)
		{
			if(variable%i==0)
			{
				count++;
			}
		}
		if(count>=3 || variable == 2 || variable == 0)
			return "Число не простое";
		else
			return "Число простое"
	}
	else
		return "Данные не верны";
}
let variable = 0;
console.log(getPrimeNumber(variable));
*/









