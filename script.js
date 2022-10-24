let receipt = document.querySelector('.receipt '),
   timerExtra = document.querySelector('.header__timer-extra'),
   speed = 40;

window.addEventListener('load', () => {
  receipt.classList.remove('active')
  receipt.style.display = 'none';
  
    start()
  
})



function start() {
  if (timerExtra.innerHTML < 100) {
    timerExtra.innerHTML++
  }
  
  if (timerExtra.innerHTML >= 50) {
    speed = 100;
  }
  setTimeout(() => {
    start()
  }, speed);
}