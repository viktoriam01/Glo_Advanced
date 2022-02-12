'use strict';

const btn = document.querySelector('#btn');
const inputColor = document.querySelector("#text");
const circleBtn = document.querySelector("#e_btn");
const inputRange = document.querySelector("#range")
const rangeSpan = document.querySelector("#range-span")
const circle = document.querySelector("#circle")

console.log(btn);
console.log(inputColor);


// Изменить цвет кнопки
const changeBtnColor  = function(e) {
   e.target.style.backgroundColor = inputColor.value;
}

btn.addEventListener('click', changeBtnColor)


// Скрыть кнопку в круге
circleBtn.style.display = 'none';


// Ползунок

const logger = function(event) {
   console.log(event.target.value);
   rangeSpan.textContent = event.target.value;
   circle.style.width = `${event.target.value}%`;
   circle.style.height = `${event.target.value}%`;
}

inputRange.addEventListener('input', logger);
rangeSpan.addEventListener('change', logger);