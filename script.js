'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.background = bg;
   this.fontSize = fontSize;
   }

DomElement.prototype.createElem = function () {
   if (this.selector.split('', 1) === '.') {
       const newElem = document.createElement('div') 
         newElem.className = 'block'
         newElem.innerText = "Djane Dow"
         newElem.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg};  font-size:${fontSize}px`;
         
      document.body.append(newElem)

   } else if (this.selector.split('', 1) === '#') {
       const newElem = document.createElement('p') 
         newElem.id = 'best'
         newElem.innerText = "Blake Smith"
         newElem.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${bg}; font-size:${fontSize}px`;
         
      document.body.append(newElem)
   }
}

const newObj = new DomElement('.block',  100, 100, 'red', 20);

newObj.createElem()

