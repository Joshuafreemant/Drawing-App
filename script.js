const canvas=document.getElementById('canvas');
const increaseBtn=document.getElementById('increase');
const decreaseBtn=document.getElementById('decrease');
const spanSize=document.getElementById('size');
const erase=document.getElementById('erase');
const clear=document.getElementById('clear');
const colorEl=document.getElementById('color');
const ctx=canvas.getContext('2d');

let size=10;
let x=50;
let y=50;
let issPressed=false;
let color='black';

canvas.addEventListener("mousedown",(e)=>{
    issPressed=true;
})

erase.addEventListener("mousedown",(e)=>{
    color='#e5e5e5';
})

clear.addEventListener("click",()=>{
   ctx.clearRect(0,0,canvas.width, canvas.height);
})

canvas.addEventListener("mouseup",(e)=>{
    issPressed=false;

     x=undefined;
    y=undefined;
    
})


colorEl.addEventListener("change",(e)=>{
    color=e.target.value; 
    
})

canvas.addEventListener("mousemove",(e)=>{

    if(issPressed){
        
        const x2=e.offsetX;
        const y2=e.offsetY;
    
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x=x2;
        y=y2;
    }
  
    
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle=color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.lineWidth = size*2;
    ctx.strokeStyle=color;
    ctx.stroke();
}



increase.addEventListener("click",()=>{
   size+=2;
    spanSize.innerText=`Pen Size: ${size}`;
   if(size>50){
    size=50;
    spanSize.innerText=`Pen Size: ${size} Max`;
   }
    
})
decrease.addEventListener("click",()=>{
    size-=2;
    spanSize.innerText=`Pen Size: ${size}`;
    if(size<10){
     size=10;
     spanSize.innerText=`Pen Size: ${size} Min`;
    }
    
})

