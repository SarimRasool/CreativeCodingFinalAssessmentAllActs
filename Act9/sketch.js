let genreData = [
  { genre: "Action", revenue: 108 },
  { genre: "Adventure", revenue: 90 },
  { genre: "Animation", revenue: 42 },
  { genre: "Drama", revenue: 33 },
  { genre: "Comedy", revenue: 48 },
  { genre: "Horror", revenue: 16 },
  { genre: "Sci-Fi", revenue: 60 },
  { genre: "Fantasy", revenue: 55 }
];

function setup() {
  createCanvas(800, 450);
  textFont('Arial');
  textSize(12);
  noLoop();
}

function draw() {
  background(30);
  fill(255);
  textSize(18);
  text("Top Movie Genres by Global Box Office Revenue", 60, 40);
  textSize(12);
  text("Source: Statista / The Numbers | Values in Billion USD", 60, 60);

  let maxRevenue = max(genreData.map(g => g.revenue));
  let barWidth = 60;
  let spacing = 30;
  let startX = 60;
  let baseY = 400;

  for (let i = 0; i < genreData.length; i++) {
    let g = genreData[i];
    let barHeight = map(g.revenue, 0, maxRevenue, 0, 300);
    let x = startX + i * (barWidth + spacing);
    let y = baseY - barHeight;

    // Color: hue based on genre index
    let col = color(map(i, 0, genreData.length, 0, 255), 180, 255);
    fill(col);
    noStroke();
    rect(x, y, barWidth, barHeight, 8);

    // Genre label
    fill(255);
    textAlign(CENTER);
    text(g.genre, x + barWidth / 2, baseY + 20);
    text(nf(g.revenue, 0, 1) + "B", x + barWidth / 2, y - 10);
  }
}
