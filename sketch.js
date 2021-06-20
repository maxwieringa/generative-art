let img;
let smallPoint, largePoint;
points = []
let drops = [];
const gravity = 0.1;
const growth = 1;

function preload() {
  img = loadImage('kidsSeeGhostsBackground.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  img.loadPixels();
  for (var i = 0; i < 8; i++) {
    drops.push(new Drop());
  }
}

//source: https://editor.p5js.org/shiffman/sketches/rJgVPzr1g
function Drop() {
  this.x = random(width);
  this.y = -10;
  this.w = 30;
  this.h = 15;
  this.length = 10;
  this.speed = random(0, 3);
  this.endY = 900;
  this.falling = true;

  this.show = function() {
    if (this.falling) {
      stroke('#2D77F5');
      strokeWeight(10);
      line(this.x, this.y, this.x, this.y + this.length);
    }
  };

  this.fall = function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;
  };

  this.stopFall = function() {
    if (this.y > this.endY) {
      this.speed = 0;
      this.length = 0;
      this.falling = false;
    }
  };

  this.reset = function() {
    if (this.y > this.endY) {
      this.x = random(width);
      this.y = -10;
      this.length = 10;
      this.speed = 0;
      this.w = 30;
      this.h = 15;
      this.falling = true;
    }
  };
}

function draw() {
  background(0);
  let pointillize = map(mouseY, 0, width, mouseX / 30, mouseX / 40);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  points.push({
    x: x,
    y: y,
    color: pix,
    size: pointillize
  });
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    fill(p.color);
    ellipse(p.x, p.y, p.size, p.size, noStroke());
  }
  for (var i = 0; i < drops.length; i = i + 1) {
    drops[i].show();
    drops[i].fall();
    drops[i].stopFall();
    drops[i].reset();
  }
}