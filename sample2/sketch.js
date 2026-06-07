function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0, 200, 255);
  
  fill(255);
  strokeWeight(0);
  circle(100, 80, 100);
  circle(160, 70, 90);
  circle(210, 80, 90);
  circle(490, 80, 100);
  ellipse(580, 70, 120, 100);
  circle(550, 110, 100);
  
  quad(260, 250, 280, 400, 320, 400, 340, 250);
  
  stroke(0);
  strokeWeight(0.5);
  line(295, 285, 268, 312);
  line(305, 285, 332, 312);
  
  fill(50);
  strokeWeight(1);
  triangle(288, 292, 312, 292, 300, 317);
  quad(297, 314, 303, 314, 328, 400, 272, 400);
  
  fill('#1D2951');// 1. [quad] 양복
  quad(50, 400, 280, 400, 260, 260, 80, 280);
  quad(550, 400, 320, 400, 340, 260, 520, 280);
  
  stroke(255);
  strokeWeight(0.3);
  line(298, 291, 308, 301);
  line(298, 314, 310, 330);
  line(291, 332, 318, 365);
  line(284, 355, 320, 394);
  line(291, 298, 305, 292);
  line(296, 309, 308, 301);
  line(290, 336, 307, 326);
  line(284, 358, 314, 340);
  line(278, 387, 319, 365);
  
  fill(255, 220, 200);
  triangle(215, 193, 226, 220, 237, 206);
  triangle(385, 193, 374, 220, 363, 206);
  ellipse(300, 175, 150, 200);
  
  stroke(0);
  strokeWeight(5);
  arc(256, 180, 40, 10, PI, TWO_PI);
  arc(344, 180, 40, 10, PI, TWO_PI);
  
  strokeWeight(70);
  arc(300, 135, 100, 60, PI + QUARTER_PI, TWO_PI);
  
  strokeWeight(90);
  arc(300, 130, 80, 40, PI, PI + HALF_PI);
  
  noFill();
  stroke(50);
  strokeWeight(2);
  rect(230, 185, 50, 30);
  rect(320, 185, 50, 30);
  line(280, 200, 320, 200);
  line(230, 200, 215, 195);
  line(370, 200, 385, 195);
  
  fill(255, 255, 0);
  strokeWeight(0);
  square(225, 222, 8);
  square(225, 216, 6);
  square(370, 222, 8);
  square(372, 216, 6);
  
  fill(255);
  circle(255, 200, 20);
  circle(345, 200, 20);
  
  fill(50);
  circle(255, 199, 10); 
  circle(345, 199, 10); 
  
  fill(240, 190, 170);
  noStroke();
  triangle(300, 210, 290, 240, 310, 240);
  
  strokeWeight(4);
  stroke(200, 150, 100);
  point(295, 230);
  point(305, 230);
  
  stroke(0);
  noFill();
  strokeWeight(3);
  arc(300, 240, 60, 20, 0, PI); 
}