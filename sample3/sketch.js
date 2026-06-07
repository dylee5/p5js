let isNight = false;
let glasses = 0;
let cloudMove = -50;
let isPajama = false;
let pajamaColor = 150;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  if (!isNight) {
    background(0, 200, 255);
  } else{
    background(0, 20, 100);
    fill(255, 255, 0);
    circle(360, 50, 99);
    fill(0, 20, 100);
    noStroke();
    circle(340, 40, 80);
  }

  if (keyIsPressed && (key ==='a' || key ==='A')) {
    glasses += 1;
  } else {
    glasses -= 1;
  }//dd
  
  glasses = constrain(glasses, 0, 30);//dd
  let gW = 50 + glasses;          
  let gH = 30 + (glasses * 0.6);  
  let eSize = 20 - (glasses * 0.4);
  let pSize = 10 - (glasses * 0.2);
  
  let moveTarget = mouseX - 300;
  moveTarget = constrain(moveTarget, -150, 30);
  
  if (cloudMove < moveTarget) {
    cloudMove += 2;
  } else if (cloudMove > moveTarget) {
    cloudMove -= 2;
  }
  
  fill(255);
  noStroke();
  circle(100 + cloudMove, 80, 100);
  circle(160 + cloudMove, 70, 90);
  circle(210 + cloudMove, 80, 90);
  circle(490 + cloudMove, 80, 100);
  ellipse(580 + cloudMove, 70, 120, 100);
  circle(550 + cloudMove, 110, 100);
  
  if (!isPajama) {
    fill(255);
  } else {
    fill(255, 220, 200);
  }
  noStroke();
  quad(260, 250, 280, 400, 320, 400, 340, 250);
  
  if (!isPajama) {
    stroke(0);
    strokeWeight(0.5);
    line(295, 285, 268, 312);
    line(305, 285, 332, 312);
  
    fill(50);
    strokeWeight(1);
    triangle(288, 292, 312, 292, 300, 317);
    quad(297, 314, 303, 314, 328, 400, 272, 400);
  }
  
  if (!isPajama) {
    fill('#1D2951');
  } else {
    fill(pajamaColor);
    
  }
  noStroke();
  quad(50, 400, 280, 400, 262, 260, 80, 280);
  quad(550, 400, 320, 400, 338, 260, 520, 280);
  
  if (isPajama) {
    fill(pajamaColor);
    quad(265, 300, 335, 300, 321, 400, 279, 400);
    if (pajamaColor === '#97D8E0') {
      fill('#388E3C');
      circle(145, 320, 40);
      circle(395, 302, 40);
      circle(302, 366, 40);
      circle(502, 370, 40);
      fill(255, 0, 0);
      triangle(73, 365, 126, 356, 107, 397);
      triangle(443, 315, 496, 306, 477, 340);
      fill('#FFD400');
      quad(403, 357, 439, 346, 457, 377, 419, 387);
      quad(203, 307, 239, 296, 257, 327, 219, 337);
    }
  }  
  
  if (!isPajama) {
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
  }
  fill(255, 220, 200);
  noStroke();
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
  
  fill(255, 255, 0);
  noStroke();
  square(225, 222, 8); 
  square(225, 216, 6);
  square(370, 222, 8);
  square(372, 216, 6);  
  
  noFill();
  stroke(50);
  strokeWeight(2);
  
  rect(255 - gW/2, 200 - gH/2, gW, gH);
  rect(345 - gW/2, 200 - gH/2, gW, gH);
  line(255 + gW/2, 200, 345 - gW/2, 200);
  line(255 - gW/2, 200, 215, 195);
  line(345 + gW/2, 200, 385, 195);
  
  noStroke();
  fill(255);
  circle(255, 200, eSize);
  circle(345, 200, eSize);
  
  fill(50);
  circle(255, 199, pSize); 
  circle(345, 199, pSize); 
  
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
  
  noStroke();
  fill(255, 255, 0, 150);
  circle(mouseX, mouseY, 30);
}

function mousePressed(){
  isNight = !isNight;
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    isPajama = !isPajama;
    
    if (isPajama) {
      let r = int(random(10));
      
      if (r<5) {
        pajamaColor = 150;
      } else {
        pajamaColor = '#97D8E0';
      }
    }
  }
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10); 
  }
}