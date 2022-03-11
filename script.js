const greating = document.querySelector('.greating');;
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const timer = document.querySelector('.timer');

let now = new Date()


const showGreating = () => {
   console.log(now.getHours());
  
   if (now.getHours() >= 0 && now.getHours() < 6 ) {
      greating.textContent = 'Доброй ночи'
      } else if(now.getHours() >= 6 && now.getHours() < 12) {
            greating.textContent = 'Доброе утро'
         } else if(now.getHours() >= 12 && now.getHours() < 18) {
               greating.textContent = 'Добрый день'
            } else if(now.getHours() >= 18 && now.getHours() < 24) {
               greating.textContent = 'Добрый вечер'
               }
}

showGreating()


let timeNow = now.toLocaleTimeString('en')
time.textContent = `Текущее время: ${timeNow}`


const weekday = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let d = weekday[now.getDay()]
day.textContent = `Сегодня: ${d}`


let nextYear  = now.getFullYear() + 1

let dateStop = new Date(`1 january ${nextYear}`).getTime()  
let dateNow = new Date().getTime()
let timeRemaining = (dateStop - dateNow) / 1000
let days = Math.floor(timeRemaining / 60 / 60 /24)      
timer.textContent = `До нового года осталось ${days} дней`
