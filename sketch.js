let img;
let smallPoint, largePoint;
let sliderSmall;
let sliderBig;

function preload() {
  img = loadImage('kidsSeeGhostsBackground.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderSmall = createSlider(1, 40, 10, 2);
  sliderBig = createSlider(1, 150, 50, 10);
  sliderSmall.position(10, 65);
  sliderSmall.style('width', '80px');
  sliderBig.position(10, 125);
  sliderBig.style('width', '80px');
  imageMode(CENTER);
  noStroke();
  background(0);
  img.loadPixels();
}

function draw() {
  let valSmall = sliderSmall.value();
  let valBig = sliderBig.value();
  let pointillize = map(mouseY, 0, width, valSmall, valBig);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}