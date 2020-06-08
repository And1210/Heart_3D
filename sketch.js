let heart;

function preload() {
  heart = loadModel('heart.obj', true);
}

function setup() {
  createCanvas(512, 512, WEBGL);
}

function draw() {
  background(200);

  ambientLight(255);
  rotateZ(PI);
  // rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial(255, 120, 174);
  model(heart);
}
