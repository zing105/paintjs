const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");



canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;
let painting = false;

function stopPainting(){
    painting = false;
}

function startPinting(){
    painting = true;
}

function onMousemov(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke()
    }
    
}


function handleColorClick(event){
   // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;

}


function handleRange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
    console.log(ctx.lineWidth);

}

if(canvas){
    canvas.addEventListener("mousemove", onMousemov);
    canvas.addEventListener("mousedown", startPinting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

// array.from 메소드는 오브젝트를 어레이로 만든다.
// console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))

if(range){
    range.addEventListener("input", handleRange)
}