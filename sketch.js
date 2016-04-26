var oscillators = [];
function setup() {
 createCanvas(640, 360);
 background(255);
 
 for(var i = 0; i<9;i++){
   oscillators.push(new Oscillator());
 }
 
}

function draw() {
background(51);
   for(var i = 0; i<9;i++){
   oscillators[i].oscillate();
   oscillators[i].display();
 }

   
    
  }




