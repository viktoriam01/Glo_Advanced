const greating = document.querySelector('.greating');;
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const timer = document.querySelector('.timer');


const runTimer = () => {
        
      let now = new Date()

      const showGreating = () => {
         
         if (now.getHours()  < 0) return greating.textContent = 'ERROR'

         if (now.getHours() < 6 ) return greating.textContent = 'Доброй ночи'
            
         if (now.getHours() < 12) return greating.textContent = 'Доброе утро'
                  
         if (now.getHours() < 18) return greating.textContent = 'Добрый день'
                     
         if (now.getHours() < 24) return greating.textContent = 'Добрый вечер'
                     
      }


      showGreating()


      let timeNow = now.toLocaleTimeString('en')
      time.textContent = `Текущее время: ${timeNow}`


      // const weekday = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
      // let d = dayOfWeek[now.getDay()]
      // day.textContent = `Сегодня: ${d}`


      let dayOfWeek = (now).toLocaleDateString('ru-RU', {weekday: 'long'})
      dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1)
      day.textContent = `Сегодня: ${dayOfWeek}`


      let nextYear  = now.getFullYear() + 1
      let dateStop = new Date(`1 january ${nextYear}`).getTime()  
      let dateNow = new Date().getTime()
      let timeRemaining = (dateStop - dateNow) / 1000
      let days = Math.floor(timeRemaining / 60 / 60 /24)      
      timer.textContent = `До нового года осталось ${days} дней`


}

setInterval(runTimer, 1000)