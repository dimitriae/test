function setup() {
	createCanvas(500, 500);
	background(64, 127, 127);
}

function draw() {
  
  background(64, 127, 127);
	

	// Head
	beginShape();
	fill(143, 120, 173);
	ellipse(229, 100, 200, 100);
	endShape(CLOSE);

	// Body
	beginShape();
	fill(143, 120, 173);
	rect(198, 150, 55, 55, 20);
	rect(198, 205, 55, 55, 20);
	rect(198, 260, 55, 55, 20);
	rect(198, 315, 55, 55, 20);
	endShape(CLOSE);

	// Arm 1
	beginShape();
	fill(143, 120, 173);
	rect(175, 350, 100, 20);
	endShape(CLOSE);

	// eye 1
	beginShape();
	fill(0, 0, 0);
	ellipse(176, 100, 30, 30);
	endShape(CLOSE);

	// eye 2
	beginShape();
	fill(0, 0, 0);
	ellipse(276, 100, 30, 30);
	endShape(CLOSE);




	textSize(32);

text("x" + mouseX, 10, 30);
text("y" + mouseY, 10, 60);
}