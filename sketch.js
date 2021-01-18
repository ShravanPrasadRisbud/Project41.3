const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
/**
 * go right and x increases
 * go left and x decreases
 * go up and y decreases
 * go down and y increases
 */
var umbrella_with_man;
var drop;
var maxDrops = 100;
var thunder, thunder1,thunder2,thunder3,thunder4;

function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(500,500);

    umbrella_with_man = createSprite(250, 250, 200, 200);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrop; i++){
            maxDrops.push(new Drop(random(0,400), random(0,400)));
        }

    }

}

function draw(){
    Engine.update(engine);
    background(0);

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        
    }
    
    drawSprites();
}   

