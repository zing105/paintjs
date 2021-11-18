const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const ctx = canvas.getContext("2d");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode")
const saveBtn = document.getElementById("jsSave");


const INITIAL_COLOR = "#2c2c2c"


canvas.width = 700;
canvas.height = 700;


ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

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
    ctx.fillStyle = color;
}


function handleRange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
    console.log(ctx.lineWidth);

}

function handleModeClick(){
if(filling === true){
    filling = false;
    mode.innerText = "Fill"
    console.log("필링 펄스로 바뀜")
} else {
    filling= true;
    mode.innerText="Paint"
    console.log("필링 트루로바뀜")
}

}

function handCanvasClick(){
    if(filling){ // 필링이 트루상태라 여기로 들어옴
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        console.log("필링이 트루상태입니다.")
        
    }
}

function handleCM(event){
    event.preventDefault();
}








if(canvas){
    canvas.addEventListener("mousemove", onMousemov);
    canvas.addEventListener("mousedown", startPinting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
}

// array.from 메소드는 오브젝트를 어레이로 만든다.
// console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))

if(range){
    range.addEventListener("input", handleRange)
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}



if(saveBtn){
    saveBtn.addEventListener("click", function(){
       
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "작품시리즈";
        link.click();
    });
}else{
    console.log("에러")
}