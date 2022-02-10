var h=document.createElement("h1")
var t = document.createTextNode("Welcome to my JS site")
h.appendChild(t)
document.body.appendChild(h)


var newP= document.createElement('p')
newP.textContent='All of this was created with javascript'
document.body.appendChild(newP)

var newOl=document.createElement('ol')
newOl.textContent="fruits"
document.body.append(newOl)

var list=document.createElement('li')
list.textContent="mango"
newOl.append(list)

var list=document.createElement('li')
list.textContent="strawberry"
newOl.append(list)

var list=document.createElement('li')
list.textContent="watermelon"
newOl.append(list)