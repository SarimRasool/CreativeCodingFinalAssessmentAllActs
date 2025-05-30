function setup()
{
  createCanvas(600, 400);
}
function draw() {
  
  background(220); //background
  
  
  fill(100); //ground
  rect(0, 300, 600, 100);
  
  
  fill(30, 30, 30); //car body base (black)
  rect(120, 220, 350, 50); //base rectangle for car body
  
  
  fill(30, 30, 30); //hood curve
  beginShape();
  vertex(120, 220);
  vertex(120, 270);
  vertex(160, 270);
  bezierVertex(140, 250, 130, 230, 120, 220);
  endShape(CLOSE);
  
  
  fill(30, 30, 30); //trunk curve
  beginShape();
  vertex(470, 220);
  vertex(470, 270);
  vertex(430, 270);
  bezierVertex(450, 250, 460, 230, 470, 220);
  endShape(CLOSE);
  
  
  fill(30, 30, 30); //roof with curves
  beginShape();
  vertex(180, 220); //start at front edge of roof
  bezierVertex(200, 180, 250, 170, 300, 170); //front curve up
  bezierVertex(350, 170, 400, 180, 420, 220); //back curve down
  vertex(180, 220); // Back to start
  endShape(CLOSE);
  
  
  fill(10, 10, 10); //windows (darker black)
  beginShape();
  vertex(190, 215); //bottom left
  bezierVertex(210, 185, 250, 175, 300, 175); //front curve up
  bezierVertex(350, 175, 390, 185, 410, 215); //back curve down
  vertex(190, 215); //back to start
  endShape(CLOSE);
  
  
  fill(30, 30, 30); //window dividers
  rect(270, 175, 10, 45); //b-pillar
  rect(340, 175, 10, 45); //c-pillar
  
  
  let flicker = random(5); //silencer flames (animated)
  
  
  fill(255, 165, 0, 200); //flame base
  beginShape();
  vertex(470, 260);
  vertex(490 + flicker * 2, 260 - flicker);
  vertex(495 + flicker * 3, 265);
  vertex(490 + flicker * 2, 270 + flicker);
  vertex(470, 270);
  endShape(CLOSE);
  
  
  fill(255, 69, 0, 180); //flame center
  beginShape();
  vertex(470, 262);
  vertex(485 + flicker, 262);
  vertex(490 + flicker * 2, 265);
  vertex(485 + flicker, 268);
  vertex(470, 268);
  endShape(CLOSE);
  
  //silencer pipe
  fill(80);
  rect(450, 255, 20, 20);
  
  //wheels
  fill(0); //black tire
  ellipse(200, 280, 60, 60); //front wheel
  ellipse(380, 280, 60, 60); //rear wheel
  
  //red rims
  fill(255, 0, 0);
  ellipse(200, 280, 40, 40);
  ellipse(380, 280, 40, 40);
  
  //center of wheels
  fill(0);
  ellipse(200, 280, 20, 20);
  ellipse(380, 280, 20, 20);
  
  //door handles
  fill(200);
  rect(240, 230, 15, 5);
  rect(315, 230, 15, 5);
  
  //headlight
  fill(255, 255, 200);
  ellipse(135, 235, 20, 15);
  
  //taillight
  fill(255, 0, 0);
  ellipse(455, 235, 20, 15);
}