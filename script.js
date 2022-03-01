'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.background = bg;
   this.fontSize = fontSize;
   }


   //   наивный вариант 
DomElement.prototype.createElem = function () {
     let newElem

   if (this.selector.slice(0,1) === '.') {
         newElem = document.createElement('div') 
         newElem.className = this.selector.slice(1)
         newElem.innerText = "Djane Dow"
         newElem.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.background};  font-size:${this.fontSize}px`;
         
      document.body.append(newElem)

   } else if (this.selector.slice(0,1) === '#') {
         newElem = document.createElement('p') 
         newElem.id = this.selector.slice(1)
         newElem.innerText = "Blake Smith"
         newElem.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.background}; font-size:${this.fontSize}px`;
         
      document.body.append(newElem)
   }
}

const newObj = new DomElement('.square',  100, 100, 'blue', 20);

newObj.createElem()


//  оптимизированнный вариант

DomElement.prototype.createElem2 = function () {
     let newElem

   if (this.selector.slice(0,1) === '.') {
         newElem = document.createElement('div') 
         newElem.className = this.selector.slice(1)
         newElem.innerText = "Djane Dow"      
      } else if (this.selector.slice(0,1) === '#') {
         newElem = document.createElement('p') 
         newElem.innerText = "Blake Smith"
         newElem.id = this.selector.slice(1)
   }
   
   newElem.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.background}; font-size:${this.fontSize}px`;

   document.body.append(newElem)
}

const newObj1 = new DomElement('.square',  100, 100, 'lime', 20);

newObj1.createElem2()


// Вариант Кирилла для создания метода прототипа - через создание объектов со свойствами, без повтора строк

DomElement.prototype.createElem3 = function () {
     let newElem, props;

     switch (this.selector[0]) {
         case ('.') : props = {tagName: 'div', attribute: 'className', text: "Jane Dow"}; break;
         case ('#') : props = {tagName: 'p', attribute: 'id', text: "Blake Smith"}; break;
     }

      newElem = document.createElement(props.tagName); 
      newElem[props.attribute] = this.selector.slice(1);
      newElem.innerText = props.text;   
      newElem.style.cssText = `height:${this.height}px; width:${this.width}px; background:${this.background}; font-size:${this.fontSize}px`;

      document.body.append(newElem)
}

const newObj2 = new DomElement('#square',  100, 100, 'red', 20);

newObj2.createElem3()