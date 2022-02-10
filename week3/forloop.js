var h= document.createElement("h1")
var t=document.createTextNode("Hello world!")
h.appendChild(t)
document.body.appendChild(h)

for (let i = 0; i < 10; i ++) {
    const element = document.createElement("h1");
    element.innerHTML = "Hello world!";
    document.body.appendChild(element);
    element.style.color = "red";
}



var names =["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
var newOl=document.createElement('ol')
newOl.textContent="names"
document.body.append(newOl)
for(let i = 0; i < names.length; i ++) {
  newOl.innerHTML += "<li>" + names[i] + "</li>";

}
