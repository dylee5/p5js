let lastColorChangeTime = 0;
let spongeColor;//스폰지 색
let starfishAngle = 0;//불가사리 회전각도
let skyColorDay;//낮 하늘
let skyColorSunset;//저녁 노을
let lerpAmount = 0;//0.0부터 시작하는 혼합 비율
let lerpSpeed = 0.01;//한 프레임당 변하는속도

function setup() {
  createCanvas(600,400);
  spongeColor = color(255, 255, 0);
  
  skyColorDay = color(0,200,240);//파란색의 낮 하늘
  skyColorSunset = color(255, 150, 100);//붉은색의 저녁 노을
}

function draw() {
  if (millis() - lastColorChangeTime > 500) {
    spongeColor = color(random(200, 255), random(200, 255), 0); 
    lastColorChangeTime = millis(); // 색이 바뀐 시간 갱신
  }
  
  //하늘의 색 변화
  lerpAmount += lerpSpeed; 
  if (lerpAmount >= 1.0 || lerpAmount <= 0.0) {
    lerpSpeed *= -1; // 0.0 또는 1.0에 도달하면 증감 방향을 반대로 뒤집음
  }
  let currentSkyColor = lerpColor(skyColorDay, skyColorSunset, lerpAmount);
  background(currentSkyColor);
  //background(0, 200, 240);
  
  fill('#407B58');
  arc(15, 150, 100, 100, HALF_PI, radians(0));
  arc(200, 100, 100, 100, HALF_PI, radians(20));
  arc(100, 110, 100, 100, HALF_PI, radians(0));
  arc(300, 100, 100, 100, 0, radians(360));
  
  push();//배경의 주황색 산호의 크기 변화
  
  translate(200, 250); 
  let orangeCoralScale = map(sin(frameCount * 0.05), -1, 1, 1.0, 1.15);// 1.0부터 1.15 사이로 부드럽게 변하는 스케일 값 생성
  scale(orangeCoralScale); 
  
  fill('#FF912F');
  ellipse(0, 0, 500, 300);
  pop();
  
  strokeWeight(50);
  stroke('#878787');
  line(0, 100, 600, 380);
  stroke('#0000CD');
  strokeWeight(5);
  
  fill('#885430');
  arc(80, 200, 100, 900, 0, PI, CHORD);
    
  stroke(0, 0, 0);
  strokeWeight(1);
  fill('#620055');
  
  push();//배경의 보라색 바위의 크기 변화
  translate(500, 300);
  
  //0.9에서 1.1 사이로 크기 변화
  let purpleRockScale = map(sin(frameCount * 0.03), -1, 1, 0.9, 1.1);
  scale(purpleRockScale);
  
  circle(0, 0, 300);
  pop();
  
  //fill(255, 255, 0);
  fill(spongeColor);//스폰지색 0.5초마다 바뀌도록
  
  rect(80, 130, 100, 100, 10, 20, 30, 5);
  fill('#FFFFFF');
  ellipse(90, 200, 10, 20);
  ellipse(160, 200, 20, 10);
  fill('#CFCC00');
  ellipse(120, 160, 25, 15);
  ellipse(170, 150, 13, 28);
  strokeWeight(4);
  stroke(240, 0, 0);
  point(100, 180);
  point(105, 180);
  point(102, 184);
  point(150, 180);
  point(155, 180);
  point(152, 184);
  noFill();
  strokeWeight(30);
  arc(520, 50, 200, 200, radians(30), radians(240));
  arc(580, 20, 180, 180, radians(30), radians(240));
  
  push();//불가사리 회전 부분 시작
  // 마우스 X좌표에 따라 회전 속도 조절
  let starfishSpeed = map(mouseX, 0, width, 0.01, 0.2);
  starfishAngle += starfishSpeed;
  
  // 불가사리의 대략적인 중심점(360, 140)으로 영점(0,0)을 이동
  translate(360, 140);
  rotate(starfishAngle); // 이동한 영점을 기준으로 회전
  
  fill('#FCBACB');
  strokeWeight(3);
  stroke('#FD5DA8');
  
  // 중심점이 (360, 140)으로 바뀌었으므로, 기존 좌표에서 모두 x-360, y-140을 해준 값들로 변경
  triangle(-40, -50, -2, -120, 26, -50); 
  quad(-90, -50, 90, -50, 20, 10, -30, 10); 
  triangle(-65, 110, -30, 10, 20, 10); 
  triangle(55, 110, -30, 10, 20, 10); 
  stroke('#FCBACB');
  line(-37, -50, 23, -50);
  
  pop();//불가사리 회전 부분 끝
  /*fill('#FCBACB');
  strokeWeight(3);
  stroke('#FD5DA8');
  triangle(320, 90, 358, 20, 386, 90);
  quad(270, 90, 450, 90, 380, 150, 330, 150);
  triangle(295, 250, 320, 200, 340, 200);
  triangle(415, 250, 370, 200, 400, 200);
  stroke('#FCBACB');
  line(323, 90, 383, 90);*/
  
  
  fill('#33FF47');
  stroke(0, 0, 0);
  strokeWeight(3);
  // frameCount와 sin, cos를 이용해 각 원마다 조금씩 다른 리듬으로 움직이게 설정
  let offset1X = sin(frameCount * 0.05) * 10;
  let offset1Y = cos(frameCount * 0.03) * 10;
  let offset2X = sin(frameCount * 0.04 + 1) * 12;
  let offset2Y = cos(frameCount * 0.06 + 1) * 8;
  let offset3X = sin(frameCount * 0.06 + 2) * 8;
  let offset3Y = cos(frameCount * 0.04 + 2) * 12;
  let offset4X = sin(frameCount * 0.03 + 3) * 15;
  let offset4Y = cos(frameCount * 0.05 + 3) * 10;
  /*circle(230, 170, 100);
  circle(280, 170, 90);
  circle(330, 170, 80);  
  circle(380, 170, 65);*/
  circle(230 + offset1X, 170 + offset1Y, 100);
  circle(280 + offset2X, 170 + offset2Y, 90);
  circle(330 + offset3X, 170 + offset3Y, 80);  
  circle(380 + offset4X, 170 + offset4Y, 65);
  
  stroke('#FFFF99');
  line(290, 0, 200, 400);
  stroke(0, 0, 255);
  fill(0, 100, 100);
  rect(0, 350, 600, 400);
  square(0, 344, 55, 0, 0, 20, 20);
  square(112, 344, 55, 0, 0, 20, 20);
  square(224, 344, 55, 0, 0, 20, 20);
  square(336, 344, 55, 0, 0, 20, 20);
  square(448, 344, 55, 0, 0, 20, 20);
  fill('#0D98DA');
  square(56, 344, 55, 0, 0, 20, 20);
  square(168, 344, 55, 0, 0, 20, 20);
  square(280, 344, 55, 0, 0, 20, 20);
  square(392, 344, 55, 0, 0, 20, 20);
  fill('#008000');
  square(420, 320, 55, 0, 0, 20, 20);
  square(308, 320, 55, 0, 0, 20, 20);
  square(196, 320, 55, 0, 0, 20, 20);
  square(84, 320, 55, 0, 0, 20, 20);
  square(-28, 320, 55, 0, 0, 20, 20);
  fill(150, 200, 0);
  square(364, 320, 55);
  square(252, 320, 55);
  square(140, 320, 55);
  square(28, 320, 55);
  stroke('#4B6478');
  
  colorMode(HSB, 360, 100, 100); // 색상 체계를 HSB로 일시 변경
  
  // frameCount를 사용해서 각도가 0~360까지 계속 순환하도록 하기
  let greyrock = (frameCount * 1) % 360; 
  
  
  fill(greyrock, 30, 85); 
  ellipse(540, 300, 175, 100);
  ellipse(540, 370, 180, 100);
  strokeWeight(35);
  
  stroke(greyrock, 30, 85);
  line(495, 335, 600, 335);
  colorMode(RGB, 255); //다시 RGB로 복구
  /*fill('#CED4DA');
  ellipse(540, 300, 175, 100);
  ellipse(540, 370, 180, 100);
  strokeWeight(35);
  stroke('#CED4DA');
  line(495, 335, 600, 335);*/  

  fill('#142F99');
  strokeWeight(2);
  stroke(0, 0, 0);
  triangle(540, 270, 525, 370, 555, 370);
  ellipse(540, 370, 30, 20);
  
  noStroke();
  fill(255, 0, 255, 200);
  circle(mouseX, mouseY, 30);//현재 마우스 위치 표시
}

function keyPressed() { //gif 저장
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10); 
  }
}