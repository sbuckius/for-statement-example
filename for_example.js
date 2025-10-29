function setup() {
  createCanvas(400, 200);
  noLoop(); // draw only once
}

function draw() {
  background(220);
  fill("skyblue");

  // Use a for loop to draw 10 circles
  for (let i = 0; i < 10; i++) {
    let x = 40 * i + 20; // space circles evenly
    circle(x, height / 2, 30);
  }
}
