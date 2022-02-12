var cars =["mustang", "camero", "corvette", "camry", "focus"];
var newOl=document.createElement('ol')
newOl.textContent="cars"
document.body.append(newOl)
for(let i = 0; i < cars.length; i ++) {
  newOl.innerHTML += "<li>" + cars[i] + "</li>";
 newOl.style.color='cornflowerblue';
 newOl.style.fontSize='20px';
 newOl.style.fontWeight='lighter';
 newOl.style.fontFamily='sans-seriff';
}

function myFunction() {
    var element = document.getElementById("border");
    element.classList.add("border");
  }
