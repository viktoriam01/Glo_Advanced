'use strict';

const btn = document.querySelector('#btn');
const square = document.querySelector('#square');
const inputColor = document.querySelector("#text");
const circleBtn = document.querySelector("#e_btn");
const inputRange = document.querySelector("#range")
const rangeSpan = document.querySelector("#range-span")
const circle = document.querySelector("#circle")
rangeSpan.textContent = inputRange.value + '%';

 

// Изменить цвет квадрата
const changeBtnColor  = function() {
   square.style.backgroundColor = inputColor.value;
}


btn.addEventListener('click', changeBtnColor)


// Скрыть кнопку в круге
circleBtn.style.display = 'none';


// Ползунок

const logger = function(event) {
   
   rangeSpan.textContent = event.target.value + '%';
   circle.style.width = `${event.target.value}%`;
   circle.style.height = `${event.target.value}%`;
   
}

inputRange.addEventListener('input', logger);
