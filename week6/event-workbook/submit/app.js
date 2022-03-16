// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

var b = document.querySelector("button");

b.setAttribute('style', 'color: red');
function changeid ()
{
var e = document.getElementById("name");
e.id = "first-name";
}

document.querySelector("button").addEventListener("click", function(e){
    e.preventDefault()
  });
