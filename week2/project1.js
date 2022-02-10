var h = document.createElement("h1")
var t = document.createTextNode("welcome to my website!")
h.appendChild(t)
document.body.appendChild(h)


var newP= document.createElement('p')
newP.textContent="This is website was fully created using javascript. i created both an html file and a javascript file in order to make this website."
document.body.appendChild(newP)

var a= document.createElement('a');
var link=document.createTextNode("github");
a.appendChild(link);
a.href="https://github.com/stephanieanahi"
document.body.appendChild(a)

var a= document.createElement('a');
var link=document.createTextNode("portfolium");
a.appendChild(link);
a.href="https://portfolium.com/stephanieguzman/portfolio"
document.body.appendChild(a)

var a= document.createElement('a');
var link=document.createTextNode("contact");
a.appendChild(link);
a.href="https://bryanuniversity.fideliseducation.com/home.html#/editPurpose"
document.body.appendChild(a)


var newOl=document.createElement('ol')
newOl.textContent="new list"
document.body.append(newOl)

var list=document.createElement('li')
list.textContent="eat"
newOl.append(list)

var list=document.createElement('li')
list.textContent="shower"
newOl.append(list)

var list=document.createElement('li')
list.textContent="sleep"
newOl.append(list)





    
var footer=document.createElement('footer')
footer.textContent="Thank you for visiting my website"
document.body.append(footer)


