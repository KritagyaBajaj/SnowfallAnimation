 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;


var snow = [];
var bgImg;
var boy;
var engine,world;

function preload() {
  bgImg = loadImage ("snow1.jpg");
  //boy = loadImage ("boy.png");

}

function setup() {
  createCanvas(800,400);
  engine =  Engine.create();
  world= engine.world;
  //boy = createSprite (200,200,50,50);

  boy= new Boy(200,250,50,50);
}

function draw() {
  background(bgImg); 
  
    Engine.update(engine);

      if(frameCount%10===0){
       snow.push(new Snow(random(0,800),0,40));

      }

      for (var s= 0; s < snow.length; s++) {
        snow[s].display();
      } 

        boy.display();
      //drawSprites();
}

