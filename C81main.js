var canvas= document.getElementById("canvas1");
var ctx= canvas.getContext("2d")
var color ="blue"
canvas.addEventListener("mousedown",mymousedown);
function mymousedown (e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    console.log ("x="+x)
    console.log ("y="+y)
    color=document.getElementById("color").value;
    draw_circle (x,y)
}
function draw_circle (x,y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(x,y ,40,0,2*Math.PI);
ctx.stroke();
}
function clear_area () {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}