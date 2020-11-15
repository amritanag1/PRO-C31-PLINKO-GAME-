const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(500,780);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,770,520,20);

    if (frameCount%60 === 0){
        particles.push(new Particle(random(width/2-10, width/2+10),10,10));
    }

    for (var k = 10; k <= width; k = k+80){
        divisions.push(new Division (k, height-divisionHeight/2,10,divisionHeight));
    } 

    for (var j=25; j<= width; j=j+50){
        plinkos.push(new Plinko(j, 100,10,10)); 
    }

    for (var j=45; j<= width-10; j=j+50){
        plinkos.push(new Plinko(j,170,10,10));
    }

    for (var j=25; j<= width-10; j=j+50){
        plinkos.push(new Plinko(j,240,10,10));
    }

    for (var j=45; j<= width-10; j=j+50){
        plinkos.push(new Plinko(j,310,10,10));
    }

    for (var j=25; j<= width-10; j=j+50){
        plinkos.push(new Plinko(j,380,10,10));
    }
   //Engine.run(Engine);
}

function draw(){
    background("black");
    Engine.update(engine);

    fill(255,128,223);
    ground.display();
    
    if(frameCount % 60 === 0){
        particle = new Particle(random(100, 300), 0, 7, 8);
        particles.push(particle);
      }

    for(var i = 0; i < particles.length; i++){
        particles[i].display();
    }

    
    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();        
    } 

    for (var j = 0; j < plinkos.length; j++){
        plinkos[j].display();
    }

    for (var j = 0; j < plinkos.length; j++){
        plinkos[j].display();
    }

    
    //drawSprites();
    
}

//for (var j = 0; j < particles.length; j++) { particles[j].display(); }
// for (var k = 0; k < divisions.length; k++) { divisions[k].display(); }