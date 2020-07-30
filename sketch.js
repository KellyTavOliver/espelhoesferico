var x = 15
var y = 330
var a = 115
var b = 330
var z = 215
var w = 330

var C = 100
var F = 200
var V = 300

var reflexao
var posicao
var tamanho
var local


var xrect = 0

var x1
var y1


function setup() {
  createCanvas(600 , 400)
}

function draw() {
  colorMode(HSB);
background(150, 20, 100);

stroke(0);
fill(255);
line(0, 200, 600, 200);
arc(300, 200, 30, 200, PI + HALF_PI , HALF_PI);
circle(100, 200, 3);
circle(200, 200, 3);
circle(400, 200, 3);
circle(500, 200, 3);
  
rect(xrect, 150, 5, 50);
moveRect ()
  
noStroke();
noFill(); 
quad(50, 200, 55, 200, 55, 150, 50, 150);
quad(100, 200, 105, 200, 105, 150, 100, 150);
quad(150, 200, 155, 200, 155, 150, 150, 150);
quad(200, 200, 205, 200, 205, 150, 200, 150);
quad(250, 200, 255, 200, 255, 150, 250, 150);
  
fill(0);
  textSize(25);
  textSize(25);
    text('Imagem no Espelho Esférico', 150, 30)
  
  textSize(15);
  text('Côncavo', 50, 100)
    
  textSize(20);
    text('C', 100, 230)
    text('F', 200, 230)
    text('V', 300, 230)
    text('F´', 400, 230)
    text('C´', 500, 230)
  
    
stroke(0);
fill(255);
  rect (x, y, 70, 30);
  rect (a, b, 70, 30);
  rect (z, w, 70, 30);

stroke(225);
fill(0);
  textSize(13);
    text('Real', 20, 350);
    text('Virtual', 20, 315);
    text('Não', 20, 375);
    text('Direto', 120, 350);
    text('Invertido', 120, 315);
    text('Não', 120, 375)
    text('Maior', 220, 350);
    text('Menor', 220, 315);
    text('Igual', 220, 375);
 
if(local<C){
   reflexao = "real";
   posicao = "invertido";
   tamanho = "menor";
}

  if(local==C){
   reflexao = "real";
   posicao = "invertido";
   tamanho = "igual";
}

if(local>C && local<F){
   reflexao = "real";
   posicao = "invertido";
   tamanho = "maior";
}

if(local==F){
   reflexao = "não";
   posicao = "não";
   tamanho = "igual";
}

  if(local>F && local<V){
   reflexao = "virtual";
   posicao = "direto";
   tamanho = "maior";
}
  
function moveRect(){
   if (keyIsDown(LEFT_ARROW))
    xrect-=5;
  
  if (keyIsDown(RIGHT_ARROW))
    xrect+=5;
}
  
if(xrect<C){
   reflexao = "real";
   posicao = "invertido";
   tamanho = "menor";
   y = 330;
   b = 300;
   w = 300;
}

if(xrect==C){
   reflexao = "real";
   posicao = "invertido";
   tamanho = "igual";
   y = 330;
   b = 300;
   w = 360;
  
}
if(local>C && local<F){
   reflexao = "real";
   posicao = "invertido";
   tamanho = "maior";
   y = 300;
   b = 300;
   w = 330;
  
}

if(local==F){
   reflexao = "não";
   posicao = "não";
   tamanho = "igual";
   y = 360;
   b = 360;
   w = 360;
}

  if(local>F && local<V){
   reflexao = "virtual";
   posicao = "direto";
   tamanho = "maior";
   y = 300;
   b = 330;
   w = 330;
 
}
function move(){
   if (keyIsDown(LEFT_ARROW))
    x1-=5;

  if (keyIsDown(RIGHT_ARROW))
    x1+=5;

  if (keyIsDown(UP_ARROW))
    y1-=5;

  if (keyIsDown(DOWN_ARROW))
    y1+=5;

  ellipse(x1, y1, 5, 5);

}
}