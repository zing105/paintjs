const canvas = document.getElementById("jsCanvas");

function onMousemov(event){
    const x = event.offsetX;
    const y = event.offsetY;
    
}


if(canvas){
    canvas.addEventListener("mousemove", onMousemov)
    canvas.addEventListener("mousedown", onMousdown)
}