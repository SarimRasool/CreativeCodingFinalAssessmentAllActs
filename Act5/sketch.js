function setup() {
  createCanvas(600, 600);
  noLoop(); // Draw once
  background(30);
}

function draw() {
  let spacing = 60;

  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {
      let r = random(10, 50); // Random radius

      // Random color values
      let redVal = random(100, 255);
      let greenVal = random(100, 255);
      let blueVal = random(100, 255);

      // Decision: only draw circles if random value > 0.4
      if (random(1) > 0.4) {
        noStroke();
        fill(redVal, greenVal, blueVal, 200);
        ellipse(x, y, r, r);
      } else {
        // Optional: Draw a cross instead
        stroke(255);
        line(x - 10, y - 10, x + 10, y + 10);
        line(x + 10, y - 10, x - 10, y + 10);
      }
    }
  }
}
