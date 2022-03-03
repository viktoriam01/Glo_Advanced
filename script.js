'use strict';

class First {
   constructor() {
    }
     
   hello() {
      console.log('Привет! Я метод родителя!');
   }
}

const first = new First()

class Second extends First {
   
   helloSecond() {
     super.hello()
     console.log('А я наследуемый метод');
   }

}

const second = new Second()


second.helloSecond()