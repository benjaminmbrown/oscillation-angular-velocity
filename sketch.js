var angle = 0;
var aVelocity = 0.05;
function setup() {
 createCanvas(640, 360);
 background(255);

 
}

function draw() {
   var period = 120;
   var amplitude = 100;

   angle+=aVelocity;

console.log('test');
   var x =  amplitude * sin(angle);
      console.log('draw', x);
   // move origin to center of screen
   translate(width/2, height/2);

 
   fill(127);
   stroke(255);
   strokeWeight(2);
   line(0,0,x,0);//keep it on y xx
   ellipse(x,0,40,40);

   //

   
    
  }




