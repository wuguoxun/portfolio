let noiseOffset = 0.0;
let strokeWeightValue = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(21,76,121);

}

function draw() {

  background(21,76,121, 5);
  strokeWeight(strokeWeightValue);

  noiseOffset += -0.05;
  strokeWeightValue = noise(noiseOffset) * 100;



  stroke(map(mouseX, 0, 600, 0, 255, true))

  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);


}

function keyTyped() {

  if (key === 's') {
    saveCanvas('drawing', 'png');
  } else if (key === 'd') {
    clear();
  }

  // function mouseClicked(){
  //     clear();
  //
  // }

  return false;
}
