var ship;
var sea;
var TheShip;
var TheSea
function preload(){
sea = loadImage("sea,png");
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  TheShip.addAnimation(ship);
  TheSea.addImage(sea);
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2
  }
}