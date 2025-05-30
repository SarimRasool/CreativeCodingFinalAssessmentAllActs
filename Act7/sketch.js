let trail = [];

function setup() {
  createCanvas(600, 400);
  background(10);
  noCursor(); // Hide default cursor for a cleaner look
}

function draw() {
  background(10, 10, 30, 25); // Fading background for trails

  // Add current mouse position to trail
  trail.push({ x: mouseX, y: mouseY, c: getTrailColor() });

  // Limit trail length
  if (trail.length > 50) {
    trail.shift();
  }

  noFill();
  strokeWeight(4);

  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    stroke(t.c);
    ellipse(t.x, t.y, 12); // Trail dot
  }

  // Draw glowing custom cursor
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 8);
}

function getTrailColor() {
  // Neon-style color shifting
  let r = map(mouseX, 0, width, 100, 255);
  let g = map(mouseY, 0, height, 150, 255);
  let b = 255 - (r + g) / 4;
  return color(r, g, b);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('mouseTrailArt', 'png');
  }
}
