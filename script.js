// 'use strict';

let num = 2665219;

// массив из числа

let arrNum = num.toString().split('');

// результат перемножения чисел в массиве

let result =  arrNum.reduce(function(a, b) {
      return a * b
   })

// результат в степень 3

result = result ** 3

// вывод в консоль первых двух чисел

console.log(result.toString().substring(0,2));

