
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10, 40); //dark blue space background
  
  //center the alien
  translate(width/2, height/2);
  
  //add subtle rotation to the entire alien
  push();
  rotate(sin(frameCount * 0.02) * 0.05);
  
  //body using beginShape() and bezierVertex()
  fill(50, 240, 70); //bright green
  noStroke();
  
  //alien body with curved edges
  beginShape();
  vertex(-40, 0);
  bezierVertex(-45, 25, -40, 70, -20, 80);
  bezierVertex(0, 85, 20, 85, 40, 80);
  bezierVertex(45, 60, 45, 30, 40, 0);
  bezierVertex(20, -10, -20, -10, -40, 0);
  endShape(CLOSE);
  
  //head using beginShape() in CLOSE mode
  push();
  translate(0, -60); //position the head above the body
  //add subtle bobbing motion to the head
  translate(0, sin(frameCount * 0.1) * 3);
  
  fill(70, 250, 90); //lighter green for head
  beginShape();
  vertex(0, -50); //top point
  bezierVertex(30, -45, 60, -20, 60, 0); // right curve
  bezierVertex(60, 30, 30, 50, 0, 50); // bottom curve
  bezierVertex(-30, 50, -60, 30, -60, 0); // left curve
  bezierVertex(-60, -20, -30, -45, 0, -50); // top curve
  endShape(CLOSE);
  
  //left eye using complex shape
  fill(0);
  push();
  translate(-25, 0);
  //make the eye blink by scaling vertically
  let eyeScale = map(sin(frameCount * 0.05), -1, 1, 0.7, 1);
  scale(1, eyeScale);
  beginShape();
  vertex(-12, -10);
  bezierVertex(-15, -5, -15, 15, -10, 20);
  bezierVertex(-5, 25, 5, 25, 10, 20);
  bezierVertex(15, 15, 15, -5, 10, -10);
  bezierVertex(5, -15, -5, -15, -12, -10);
  endShape(CLOSE);
  
  //eye highlight
  fill(255);
  beginShape();
  vertex(-5, -5);
  bezierVertex(-7, -7, -7, -10, -5, -12);
  bezierVertex(-3, -13, 0, -13, 2, -12);
  bezierVertex(3, -10, 3, -7, 2, -5);
  bezierVertex(0, -3, -3, -3, -5, -5);
  endShape(CLOSE);
  pop();
  
  //right eye - using same shape but translated
  fill(0);
  push();
  translate(25, 0);
  //same blinking effect but slightly offset
  eyeScale = map(sin(frameCount * 0.05 + 0.2), -1, 1, 0.7, 1);
  scale(1, eyeScale);
  beginShape();
  vertex(-12, -10);
  bezierVertex(-15, -5, -15, 15, -10, 20);
  bezierVertex(-5, 25, 5, 25, 10, 20);
  bezierVertex(15, 15, 15, -5, 10, -10);
  bezierVertex(5, -15, -5, -15, -12, -10);
  endShape(CLOSE);
  
  //eye highlight
  fill(255);
  beginShape();
  vertex(-5, -5);
  bezierVertex(-7, -7, -7, -10, -5, -12);
  bezierVertex(-3, -13, 0, -13, 2, -12);
  bezierVertex(3, -10, 3, -7, 2, -5);
  bezierVertex(0, -3, -3, -3, -5, -5);
  endShape(CLOSE);
  pop();
  
  //mouth using beginShape in CHORD mode
  fill(30, 150, 50); //darker green
  //make mouth move slightly
  push();
  scale(1, map(sin(frameCount * 0.08), -1, 1, 0.8, 1.2));
  beginShape();
  vertex(-20, 25);
  bezierVertex(-15, 35, 15, 35, 20, 25);
  bezierVertex(10, 30, -10, 30, -20, 25);
  endShape(CLOSE);
  pop();
  
  //antenna with complex shape
  push();
  translate(0, -50);
  //add wobble to antenna
  rotate(sin(frameCount * 0.1) * 0.2);
  
  //antenna
  noFill();
  stroke(50, 240, 70);
  strokeWeight(3);
  beginShape();
  vertex(0, 0);
  bezierVertex(-5, -20, 5, -40, 0, -60);
  endShape();
  
  // antenna top
  noStroke();
  fill(100, 255, 120);
  push();
  translate(0, -60);
  //make antenna top pulse
  let pulseFactor = map(sin(frameCount * 0.15), -1, 1, 0.8, 1.2);
  scale(pulseFactor);
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.3) {
    let x = 8 * cos(angle);
    let y = 8 * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
  
  pop(); //end antenna group
  pop(); //end head group
  
  //arms using bezier curves
  //left arm
  push();
  translate(-40, 20);
  //make arm wave
  rotate(sin(frameCount * 0.07) * 0.2);
  stroke(50, 240, 70);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(0, 0);
  bezierVertex(-10, -10, -20, -5, -30, -20);
  bezierVertex(-35, -25, -40, -15, -45, -20);
  endShape();
  
  //left hand
  push();
  translate(-45, -20);
  //rotate hand
  rotate(sin(frameCount * 0.05) * 0.3);
  noStroke();
  fill(70, 250, 90);
  beginShape(TRIANGLE_FAN);
  vertex(0, 0); //center point
  vertex(-8, -5);
  vertex(-10, -12);
  vertex(-5, -15);
  vertex(0, -13);
  vertex(5, -15);
  vertex(10, -12);
  vertex(8, -5);
  vertex(0, 0);
  endShape();
  pop();
  pop();
  
  //right arm
  push();
  translate(40, 20);
  //make arm wave - opposite to left arm
  rotate(-sin(frameCount * 0.07) * 0.2);
  stroke(50, 240, 70);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(0, 0);
  bezierVertex(10, -10, 20, -5, 30, -20);
  bezierVertex(35, -25, 40, -15, 45, -20);
  endShape();
  
  //right hand
  push();
  translate(45, -20);
  //rotate hand
  rotate(-sin(frameCount * 0.05) * 0.3);
  noStroke();
  fill(70, 250, 90);
  beginShape(TRIANGLE_FAN);
  vertex(0, 0); //center point
  vertex(-8, -5);
  vertex(-10, -12);
  vertex(-5, -15);
  vertex(0, -13);
  vertex(5, -15);
  vertex(10, -12);
  vertex(8, -5);
  vertex(0, 0);
  endShape();
  pop();
  pop();
  
  //legs
  //left leg
  push();
  translate(-20, 80);
  //add slight swinging motion
  rotate(sin(frameCount * 0.04) * 0.1);
  stroke(50, 240, 70);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(0, 0);
  bezierVertex(-5, 15, -15, 30, -10, 45);
  endShape();
  
  //left foot
  push();
  translate(-10, 45);
  //rotate foot slightly
  rotate(sin(frameCount * 0.04) * 0.2);
  noStroke();
  fill(70, 250, 90);
  beginShape();
  vertex(0, 0);
  bezierVertex(-10, 0, -20, 5, -15, 10);
  bezierVertex(-5, 15, 10, 15, 15, 5);
  bezierVertex(15, 0, 10, 0, 0, 0);
  endShape(CLOSE);
  pop();
  pop();
  
  //right leg
  push();
  translate(20, 80);
  //add slight swinging motion - opposite to left leg
  rotate(-sin(frameCount * 0.04) * 0.1);
  stroke(50, 240, 70);
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(0, 0);
  bezierVertex(5, 15, 15, 30, 10, 45);
  endShape();
  
  //right foot
  push();
  translate(10, 45);
  //rotate foot slightly
  rotate(-sin(frameCount * 0.04) * 0.2);
  noStroke();
  fill(70, 250, 90);
  beginShape();
  vertex(0, 0);
  bezierVertex(10, 0, 20, 5, 15, 10);
  bezierVertex(5, 15, -10, 15, -15, 5);
  bezierVertex(-15, 0, -10, 0, 0, 0);
  endShape(CLOSE);
  pop();
  pop();
  
  pop(); //end
}