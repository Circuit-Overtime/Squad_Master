var playerCount, allPlayers, gameState = 0;
var database;

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  form = new Form()
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
  form.display();
  
 
}