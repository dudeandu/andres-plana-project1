const burgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const navButtonIcon = document.querySelector('#hamburger i')
console.log(navButtonIcon)

burgerButton.addEventListener('click', function(){
  // navList.style.height = '130px';
  navList.classList.toggle('expandedNav')
  navButtonIcon.classList.toggle('fa-xmark')
  navButtonIcon.classList.toggle('fa-bars')
  console.log(this)
}); 