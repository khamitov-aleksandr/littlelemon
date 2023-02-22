var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');
if(overlay)
  burgerMenu.addEventListener('click', function() {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });