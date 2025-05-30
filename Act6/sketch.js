function setup() {
  createCanvas(600, 300);
  backgroundGradient(); // Draw custom background
  textSize(36);
  textAlign(CENTER, CENTER);
  noFill(); // Outline letters only
  strokeWeight(2);
  
  let message = "BATH SPA UNIVERSITY";
  let x = 50;
  let y = height / 2;

  for (let i = 0; i < message.length; i++) {
    let letter = message.charAt(i);
    
    // Random stroke color
    stroke(random(255), random(255), random(255));
    
    push(); // Save current state
    translate(x, y + random(-8, 8));
    rotate(random(-PI / 20, PI / 20));
    text(letter, 0, 0);
    pop(); // Restore state
    
    x += 30; // Less spacing to fit smaller canvas
  }
}

function backgroundGradient() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(25, 25, 70), color(0, 120, 180), inter);
    stroke(c);
    line(0, y, width, y);
  }
}
