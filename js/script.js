const burgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');

burgerButton.addEventListener('click', function(){
  navList.style.height = '130px';
  console.log(this)
}); 