  
var hero,herorunning;
var zrunning,zombie;


function preload(){
  herorunning=loadAnimation("mr1.png","mr2.png","mr3.png","mr4.png","mr5.png","mr6.png")
zrunning=loadAnimation("zr1.png","zr2.png","zr3.png","zr4.png","zr5.png","zr6.png","zr7.png","zr8.png","zr9.png","zr10.png")
  
}
function setup() {
  createCanvas(1500, 700);
  hero=createSprite(200,600,20,20);
  hero.x=300
  console.log(hero.x)
   hero.addAnimation("running",herorunning)
  hero.scale=0.5
 

  zombie=createSprite(1500,600,20,20);
  zombie.addAnimation("running",zrunning)
  
  zombie.velocityY=-6;
  console.log(zombie.x)
}

function draw() {
 
  background(220);
 // zombies();

 if(keyDown("space")){
   console.log("hi")
  hero.velocityY=-6
 }

 drawSprites();
  
}

function  zombies(){
  if(frameCount%100 === 0){
    
    zombie=createSprite(1500,600,20,20);
   zombie.addAnimation("running",zrunning)
   
   zombie.velocityX=-6;
   
  }
}