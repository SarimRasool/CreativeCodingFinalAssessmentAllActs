let particles = [];
let colorTheme = 0;
let vortexSize = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 20); // Slight trail effect

  translate(width / 2, height / 2);
  let t = frameCount * 0.01;

  for (let i = 0; i < TWO_PI; i += 0.1) {
    let r = vortexSize + 50 * sin(t + i * 3 + mouseX * 0.01);
    let x = r * cos(i + t);
    let y = r * sin(i + t);

    stroke(getThemeColor(i + t));
    strokeWeight(2);
    point(x, y);
  }

  // Update and display particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(mouseX - width/2, mouseY - height/2));
  }
}

function keyPressed() {
  if (key === ' ') {
    colorTheme = (colorTheme + 1) % 3; // Switch theme
  } else if (key === 's') {
    vortexSize = max(50, vortexSize - 20); // Shrink
  } else if (key === 'b') {
    vortexSize += 20; // Grow
  }
}

function getThemeColor(angle) {
  let a = angle * 2;
  switch (colorTheme) {
    case 0: return color(200 + 55 * sin(a), 100 + 100 * cos(a), 255 * sin(a + PI / 2));
    case 1: return color(255 * noise(a), 200 * noise(a + 1), 255 * noise(a + 2));
    case 2: return color(255 * abs(sin(a)), 255 * abs(cos(a)), 180);
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 5));
    this.acc = createVector(0, 0.05);
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifetime -= 4;
  }

  show() {
    noStroke();
    fill(255, this.lifetime);
    ellipse(this.pos.x, this.pos.y, 6);
  }
}
