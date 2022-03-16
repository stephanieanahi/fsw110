// make the box disapear when the user clicks it
const myDiv = document.querySelector('div');
myDiv.addEventListener('click', function(e){
    e.target.remove();
  });