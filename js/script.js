/// ------------------------------------ nav hamburger interactivity

const burgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const navButtonIcon = document.querySelector('#hamburger i')

burgerButton.addEventListener('click', function(){
  //expand the list
  navList.classList.toggle('expandedNav')
  //change between the three lines and the ex mark
  navButtonIcon.classList.toggle('fa-xmark')
  navButtonIcon.classList.toggle('fa-bars')
}); 


/// ------------------------------------ blogcomment interactivity
// get the form 
const blogForm = document.getElementById('blogForm');
//add event listener to the form and add a function to it
blogForm.addEventListener('submit', function(event){
  event.preventDefault();
  // get the date and format to VV
  // {day of the week} {month} {day of month(th)}, {year} BY {name}
  const date = new Date();
  // get the name 
  // get the content of the comment 

  // build the comment

  // append the comment and a photo to a new comment container
  
  console.log(event.target)
  console.log(date)
  // https://placebear.com/200/200
})
