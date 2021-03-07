var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars;
var car1,car2,car3,car4;
var cycle1Img,cycle2Img,cycle3Img,cycle4Img;
var bg;
function preload(){
  cycle1Img=loadImage("../cycle-1.png");
  cycle2Img=loadImage("../cycle-2.jpg");
  cycle3Img=loadImage("../cycle-3.jpg");
  cycle4Img=loadImage("../cycle-4.jpg");
   bg=loadImage("../Road.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
