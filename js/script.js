const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
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

  if (event.target[0].value 
    && event.target[1].value 
    && event.target[2].value) {
    // get the date and format to VV
    // {day of the week} {month} {day of month(th)}, {year} BY {name}
    const date = new Date();
    
    // day of the week weekday[date.getDay()]
    const weekday = weekdays[date.getDay()];
    // month name month[date.getMonth()]
    const month = months[date.getMonth()];
    // day number date.getDate()
    const day = date.getDate();
    // miht have to do an if statement to check for "ST" "ND" "RD" or "TH"
    // year date.getFullYear()
    const year = date.getFullYear();
    // get the name 
    const name = event.target[0].value;
    // get the content of the comment 
    const comment = event.target[2].value;
    
    // build the comment
    // creat div
    const fullComment = document.createElement('div')
    // add class of commentContainer
    fullComment.classList.add("commentContainer");
    // appendchild this to commentContainer VVVVV
    // <div class="imgContainer"><img src="https://placebear.com/200/200" alt="TKTKTKTKTKT"></div>
    fullComment.innerHTML = '<div class="imgContainer"><img src="https://placebear.com/200/200" alt="One sexy and lazy bear. This is a placeholder image"></div>'
    
    // create div
    const commentText = document.createElement('div');
    // add class of textContainer
    commentText.classList.add("textContainer");
    // create a p element
    const dateParagraph = document.createElement('p');
    // add class of commentDate add this text to it 
    dateParagraph.classList.add("commentDate");
    // `${weekday} ${month} ${day}TH, ${year} BY ${name}`
    dateParagraph.textContent = `${weekday} ${month} ${day}TH, ${year} BY ${name}`;
    // appendchild that to the textContainer
    commentText.appendChild(dateParagraph)
    // create a p element
    const commentParagraph = document.createElement('p')
    // add this text to it
    // `${comment}`
    commentParagraph.textContent = `${comment}`;
    // appendchild that to the textContainer
    commentText.appendChild(commentParagraph);
    // append child textContainer to commentContainer
    fullComment.appendChild(commentText);
    
    // append the comment before the form
    blogForm.insertAdjacentHTML('beforebegin', fullComment.outerHTML);
    
    // Clear the form
    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
    
  }
    
})
  