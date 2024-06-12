var cards = document.querySelectorAll('.oferrs-row-block');

var percent = 0.0;
var i = 0;

var isMoving = false;

var linePercent = 16.67;
var linePercent1 = 50;

window.addEventListener('load', checkPageWidth);


window.addEventListener('resize', checkPageWidth);
function checkPageWidth() {
const pageWidth = window.innerWidth;


if (pageWidth < 767 && lock) {
  var block = document.getElementById('offers-row');
  block.style.transform = `translateX(${0}%)`;
  percent2 = 0;
  lock = false;
  isMoving = true
  i2 = 0
  linePercent = 16.67;
   linePercent1 = 50;
  var line = document.querySelector('.orange-line');
  line.style.left = 16.67 + '%';
  
  setTimeout(() => {
    isMoving = false;
  }, 1000);
  offset = parseFloat(getComputedStyle(line).left);
}

else if (pageWidth >= 767 && !lock) {
  var block = document.getElementById('offers-row');
  block.style.transform = `translateX(${0}%)`;
  var line = document.querySelector('.orange-line');
  line.style.left = 50 + '%';
  percent = 0;
  i=0;
  linePercent = 16.67;
  linePercent1 = 50;
  lock = true;
  isMoving = true
  setTimeout(() => {
    isMoving = false;
  }, 1000);
}
}

var lock = true;
var line2 = document.querySelector('.orange-line');
var offset = parseFloat(getComputedStyle(line2).left);

function moveBlockleft() {
      if(window.innerWidth < 767 && !isMoving && i2 > 0)
        {
          i2--;
          var block = document.getElementById('offers-row');
          block.style.transform = `translateX(${percent2+100}%)`; 
          
          percent2 += 100;
          isMoving = true

          var line = document.querySelector('.orange-line');
          
          var _currentLeft = parseFloat(getComputedStyle(line).left);

          line.style.left = linePercent - 16.67 + '%';
          linePercent-=16.67;
          setTimeout(() => {
            isMoving = false;
          }, 1000);
          return
        }
      if(window.innerWidth > 767 && i != -2 && !isMoving)
      {
          var block = document.getElementById('offers-row');
          
          block.style.transform =  `translateX(${percent+41.8125}%)`
          percent += 41.8125;

          var line = document.querySelector('.orange-line');
          
          

          line.style.left = linePercent1 - 33.3 + '%';
          linePercent1-=33.3;

          i -= 2;

          
          isMoving = true;

          setTimeout(() => {
              isMoving = false;
            }, 1000);
      }
}

var percent2 = 0;
var i2 = 0



function moveBlockright(){
  
      if(window.innerWidth < 767 && !isMoving && i2 < 4)
        {
          i2++
          var block = document.getElementById('offers-row');
          block.style.transform = `translateX(${percent2-100}%)`; 
          
          var line = document.querySelector('.orange-line');
          
          var _currentLeft = parseFloat(getComputedStyle(line).left);

          line.style.left = linePercent + 16.67 + '%';
          linePercent+=16.67;
          percent2 -= 100;
          isMoving = true
          setTimeout(() => {
            isMoving = false;
          }, 1000);
          return
        }
        console.log(isMoving);
        console.log(i);
      if(window.innerWidth > 767 && i != 2 && !isMoving)
      {

          i +=2;

          var line = document.querySelector('.orange-line');
          
          

          line.style.left = linePercent1 + 33.3 + '%';
          linePercent1+=33.3;

          var block = document.getElementById('offers-row');
          block.style.transform = `translateX(${percent-41.8125}%)`; 
          isMoving = true;
          percent -= 41.8125;
          setTimeout(() => {
              isMoving = false;
            }, 1000);

      }
}