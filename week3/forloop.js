var h= document.createElement("h1")
var t=document.createTextNode("Hello world!")
h.appendChild(t)
document.body.appendChild(h)

for (let i = 0; i < 10; i ++) {
    const element = document.createElement("h1");
    element.innerHTML = "Hello, world!";
    document.body.appendChild(element);
    element.style.backgroundColor = "yellow";
}

var powerRangers = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
var rangersList=document.getElementById("rangers")
for (var i = 0; i < powerRangers.length; i++) {
  rangersList.innerHTML += '<li>' + powerRangers [i] +'</li>'
  rangersList.append(rangersList)
}

