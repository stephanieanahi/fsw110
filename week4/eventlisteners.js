const container = document.getElementById('container')
container.addEventListener('mouseover', function handleMouseOver(){
    container.style.backgroundColor = 'green';
});


container.addEventListener('mousedown', function handleMouseDown(){
    container.style.backgroundColor = 'yellow';
});


container.addEventListener('mouseup', function handleMouseUp(){
    container.style.backgroundColor = 'blue';
});


container.addEventListener('dblclick', function DblClick(){
    container.style.backgroundColor = 'red';
});

container.addEventListener('onwheel', function onwheel(){
    container.style.backgroundColor = 'purple';
});


container.addEventListener('keydown', function keyDown(){
    container.style.backgroundColor = 'red';
});