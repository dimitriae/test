function setup() {
	createCanvas(500, 500);
	background(205, 136, 175);

}
 
function draw() {
	background(205, 136, 175);
	// Head
	beginShape();
	fill(128, 128, 179);
	vertex(300, 20);
	vertex(300, 75);
	vertex(200, 75);
	vertex(200, 20);
	endShape(CLOSE);


	// Antenna
	beginShape();
	vertex(248, 23);
	vertex(222, 7);
	endShape(CLOSE);


	beginShape();
	vertex(250, 25);
	vertex(266, 7);
	endShape(CLOSE);

	// Boddy
	beginShape();
	fill(128, 128, 179);
	vertex(176, 77);
	vertex(175, 217);
	vertex(325, 218);
	vertex(326, 78);
	endShape(CLOSE);

	// arm 1
	beginShape();
	fill(128, 128, 179);
	vertex(175, 77);
	vertex(114, 173);
	vertex(171, 177);
	vertex(175, 80);
	endShape(CLOSE);


	// arm 2
	beginShape();
	fill(128, 128, 179);
	vertex(328, 75);
	vertex(330, 174);
	vertex(378, 176);
	vertex(330, 77);
	endShape(CLOSE);	

	// leg 1
	beginShape();
	fill(128, 128, 179);
	vertex(200, 220);
	vertex(198, 324);
	vertex(159, 327);
	vertex(150, 348);
	vertex(219, 348);
	vertex(224, 218);
	endShape(CLOSE);	

	// leg 2
	beginShape();
	fill(128, 128, 179);
	vertex(304, 220);
	vertex(303, 327);
	vertex(339, 331);
	vertex(357, 350);
	vertex(275, 350);
	vertex(275, 222);
	endShape(CLOSE);	





textSize(32);

text("x" + mouseX, 10, 30);
text("y" + mouseY, 10, 60);


}






