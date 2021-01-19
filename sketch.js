var gameState="start";
var bg="#F7DE08";
var tick, cross;

var mrsurvivaltext, mrsurvivaltextImage, logo;
var z = "released";
var ground, road;

var happyBoyS1L1, chocoS1L1, strangerS1L1;
var randomS1L1 = Math.random(0,1);

var ans=null;

var sadBoyS1L2, crowdS1L2, strangerS1L2;
var randomS1L2 = Math.random(0,1);

var boyS1L3, strangerS1L3, addressS1L3;
var randomS1L3 = Math.random(0,1);

var boyS1L4, strangerS1L4;
var randomS1L4 = Math.random(0,1);

var boyS1L5, posterS1L5, strangerS1L5;
var randomS1L5 = Math.random(0,1);

var boyS2L1, dogS2L1 ,crowdS2L1;
var randomS2L1 = Math.random(0,1);

var boyS2L2, snakeS2L2;
var randomS2L2 = Math.random(0,1);

var carS2L3, cowS2L3;
var randomS2L3 = Math.random(0,1);

var ratS2L4, trainS2L4;
var randomS2L4 = Math.random(0,1);

var boyS2L5, monkeyS2L5, signS2L5, snacksS2L5;
var randomS2L5 = Math.random(0,1);

var crowdS3L1, hurtmanS3L1;
var randomS3L1 = Math.random(0,1);

var stealingS3L2;
var randomS3L2 = Math.random(0,1);

var roadS3L3, oldmanS3L3;
var randomS3L3 = Math.random(0,1);

var hurtdogS3L4;
var randomS3L4 = Math.random(0,1);

var carS3L5, hurtmanS3L5;
var randomS3L5 = Math.random(0,1);

function preload(){

  ground = loadImage("images/ground.png");
  tick = loadImage("images/tick.png");
  cross = loadImage("images/cross.png");

  //for start page
  mrsurvivaltextImage = loadImage("images/Mr. survival.png");
  playbuttonImageR = loadImage("images/play_released.png");
  playbuttonImageP = loadImage("images/play_pressed.png");
  logo = loadImage("images/logo.png");

  //for STAGE 1 LEVEL 1
  happyBoyS1L1 = loadImage("images/STAGE 1/lvl 1/boy.png");
  chocoS1L1 = loadImage("images/STAGE 1/lvl 1/chocolate.png");
  strangerS1L1 = loadImage("images/STAGE 1/lvl 1/stranger.png");

  //for STAGE 1 LEVEL 2
  sadBoyS1L2 = loadImage("images/STAGE 1/lvl 2/boy.png");
  crowdS1L2 = loadImage("images/STAGE 1/lvl 2/crowd.png");
  strangerS1L2 = loadImage("images/STAGE 1/lvl 2/stranger.png");

  //for STAGE 1 LEVEL 3
  boyS1L3 = loadImage("images/STAGE 1/lvl 3/boy.png");
  strangerS1L3 = loadImage("images/STAGE 1/lvl 3/stranger.png");
  addressS1L3 = loadImage("images/STAGE 1/lvl 3/address.png");

  //for STAGE 1 LEVEL 4
  boyS1L4 = loadImage("images/STAGE 1/lvl 4/boy.png");
  strangerS1L4 = loadImage("images/STAGE 1/lvl 4/stranger.png");

  //for STAGE 1 LEVEL 5
  boyS1L5 = loadImage("images/STAGE 1/lvl 5/boy.png");
  posterS1L5 = loadImage("images/STAGE 1/lvl 5/poster.png");
  strangerS1L5 = loadImage("images/STAGE 1/lvl 5/stranger.png");

  //for STAGE 2 LEVEL 1
  boyS2L1 = loadImage("images/STAGE 2/lvl 1/boy.png");
  dogS2L1 = loadImage("images/STAGE 2/lvl 1/dog.png");

  //for STAGE 2 LEVEL 2
  boyS2L2 = loadImage("images/STAGE 2/lvl 2/boy.png");
  snakeS2L2 = loadImage("images/STAGE 2/lvl 2/snake.png");

  //for STAGE 2 LEVEL 3
  carS2L3 = loadImage("images/STAGE 2/lvl 3/car.png");
  cowS2L3 = loadImage("images/STAGE 2/lvl 3/cow.png");

  //for STAGE 2 LEVEL 4
  ratS2L4 = loadImage("images/STAGE 2/lvl 4/rat.png");
  trainS2L4 = loadImage("images/STAGE 2/lvl 4/train.png");

  //for STAGE 2 LEVEL 5
  boyS2L5 = loadImage("images/STAGE 2/lvl 5/boy.png");
  monkeyS2L5 = loadImage("images/STAGE 2/lvl 5/monkey.png");
  signS2L5 = loadImage("images/STAGE 2/lvl 5/sign.png");
  snacksS2L5 = loadImage("images/STAGE 2/lvl 5/snacks.png");

  //for STAGE 3 LEVEL 1
  crowdS3L1 = loadImage("images/STAGE 3/lvl 1/crowd.png");
  hurtmanS3L1 = loadImage("images/STAGE 3/lvl 1/hurt man.png");
  road = loadImage("images/STAGE 3/lvl 1/road.png");

  //for STAGE 3 LEVEL 2
  stealingS3L2 = loadImage("images/STAGE 3/lvl 2/stealing.png");

  //for STAGE 3 LEVEL 3
  oldmanS3L3 = loadImage("images/STAGE 3/lvl 3/old man.png");
  roadS3L3 = loadImage("images/STAGE 3/lvl 3/road.png");

  //for STAGE 3 LEVEL 4
  hurtdogS3L4 = loadImage("images/STAGE 3/lvl 4/hurt dog.png");

  //for STAGE 3 LEVEL 5
  carS3L5 = loadImage("images/STAGE 3/lvl 5/car.png");
  hurtmanS3L5 = loadImage("images/STAGE 3/lvl 5/hurt man.png");

}

function setup() {
  createCanvas(800,400);

  //for start page
  mrsurvivaltext = createSprite(-300,190,40,40);
  mrsurvivaltext.addImage(mrsurvivaltextImage);
  mrsurvivaltext.scale=0.4;

  playbutton=createSprite(600,200,30,30);

}

function draw() {
  background(bg);

  start();

  S1L1();
  S1L2();
  S1L3();
  S1L4();
  S1L5();

  S2L1();
  S2L2();
  S2L3();
  S2L4();
  S2L5();

  S3L1();
  S3L2();
  S3L3();
  S3L4();
  S3L5();

  comingSoon();

  drawSprites();

}


function start(){
  if(gameState==="start"){
    bg="#F7DE08";
    mrsurvivaltext.visible = true;
    playbutton.visible = true;
    if(mousePressedOver(playbutton)){
      playbutton.addImage(playbuttonImageP);
    }
    else{
      playbutton.addImage(playbuttonImageR);
    }
    playbutton.scale=0.7;
    mrsurvivaltext.velocityX=10;
    imageMode(CENTER);
      image(logo,50,50,100,100);
    if(mrsurvivaltext.x>220){
      mrsurvivaltext.velocityX=0;
      strokeWeight(0.7);
      stroke("black");
      fill("black");
      textSize(30);
      textFont("Freestyle Script Regular");
      text("lets see if you can",270,307);
      if(mousePressedOver(playbutton)){
        playbutton.addImage(playbuttonImageP);
        z = "pressed";
      }
      else{
        playbutton.addImage(playbuttonImageR);
        if(z==="pressed"){
          gameState="S1L1";
          z = "released";
        }
      }
    }
  }
  else{
    mrsurvivaltext.visible = false;
    playbutton.visible = false;

    mrsurvivaltext.x = -300;
    mrsurvivaltext.y =  190;
  }
}


function S1L1(){
  if(gameState==="S1L1"){
    bg="skyblue";

    imageMode(CENTER);
    image(ground,400,350,800,100);

    imageMode(CENTER);
    image(happyBoyS1L1,330,280,160,160);

    imageMode(CENTER);
    image(strangerS1L1,200,250,250,250);

    imageMode(CENTER);
    image(chocoS1L1,215,260,50,50);

    push();
    textSize(30);
    fill(255,255,255);
    text("A STRANGER IS OFFERING YOU A CHOCOLATE",50,50);
    text("Press A or B to choose",250,390);
    pop();

    if(randomS1L1<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Get That",550,150)

      text("B. Don't Get That",550,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S1L1done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S1L1done"
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Don't Get That",550,150)

      text("B. Get That",550,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S1L1done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S1L1done"
      }
    }

  }
  if(gameState==="S1L1done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Getting anything from strangers",50,250)
      text("isn't good",300,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L2";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Its better not getting anything",60,250)
      text("from strangers",210,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L2";
        ans=null;
      }
    }
  }
}


function S1L2(){
  if(gameState==="S1L2"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A STRANGER IS Trying To Catch You",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);

    imageMode(CENTER);
    image(crowdS1L2,100,270,250,250);
    imageMode(CENTER);
    image(crowdS1L2,330,270,250,250);

    imageMode(CENTER);
    image(strangerS1L2,150,290,250,250);

    imageMode(CENTER);
    image(sadBoyS1L2,220,338,150,150);

    if(randomS1L2<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Stay Calm",550,150)

      text("B. Get Attention From",550,250);
      text("The Crowd",550,275);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S1L2done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S1L2done"
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Get Attention From",550,150)
      text("The Crowd",550,175);

      text("B. Stay Calm",550,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S1L2done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S1L2done"
      }
    }
  }
  if(gameState==="S1L2done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Staying calm is not a good idea",50,250)

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L3";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("It was a good idea",200,250)

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L3";
        ans=null;
      }
    }
  }
}


function S1L3(){
  if(gameState==="S1L3"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A STRANGER IS Asking You a Address",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);
    
    imageMode(CENTER);
    image(strangerS1L3,200,280,250,250);

    imageMode(CENTER);
    image(addressS1L3,220,290,50,50);

    imageMode(CENTER);
    image(boyS1L3,320,320,150,150);

    if(randomS1L3<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Go with him to show",500,150)

      text("B. Maintain distance and",500,250);
      text("tell the route",500,275);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S1L3done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S1L3done"
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Maintain distance and",500,150)
      text("tell the route",500,175);

      text("B. Go with him to show",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S1L3done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S1L3done"
      }
    }
  }
  if(gameState==="S1L3done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("You must know that no adult",70,250);
      text("asks a child any help",150,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L4";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("We can't assure if anyone is good",30,250);
      text("or bad person, so maintaining",70,300);
      text("distance is best",240,350);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L4";
        ans=null;
      }
    }
  }
}


function S1L4(){
  if(gameState==="S1L4"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A STRANGER is following you",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);
    
    imageMode(CENTER);
    image(boyS1L4,100,280,200,200);

    imageMode(CENTER);
    image(strangerS1L4,300,270,150,250);

    if(randomS1L4<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Go and talk to him",500,150);

      text("B. Go by safer place",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S1L4done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S1L4done"
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Go by safer place",500,150)

      text("B. Go and talk to him",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S1L4done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S1L4done";
      }
    }
  }
  if(gameState==="S1L4done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("He might attack you sometimes",50,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L5";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Its a good answer",200,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S1L5";
        ans=null;
      }
    }
  }
}


function S1L5(){
  if(gameState==="S1L5"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A STRANGER is asking you to help him find his pet",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);
    
    imageMode(CENTER);
    image(boyS1L5,300,280,200,200);

    imageMode(CENTER);
    image(strangerS1L5,120,270,250,250);

    imageMode(CENTER);
    image(posterS1L5,150,300,100,100);

    if(randomS1L5<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Help him",500,150)

      text("B. Tell him to ask other",500,250);
      text("adults",500,275);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S1L5done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S1L5done"
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Tell him to ask other",500,150)
      text("adults",500,175);

      text("B. Help him",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S1L5done"
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S1L5done"
      }
    }
  }
  if(gameState==="S1L5done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("First know that adults only ask",50,250);
      text("other adult's help",200,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L1";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Its a good answer",200,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L1";
        ans=null;
      }
    }
  }
}


function S2L1(){
  if(gameState==="S2L1"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A dog is barking at you",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);
    
    imageMode(CENTER);
    image(boyS2L1,150,280,200,200);

    imageMode(CENTER);
    image(dogS2L1,300,300,100,100);

    if(randomS2L1<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Attack that dog",500,150);

      text("B. Get help from nearby",500,250);
      text("adult",500,275);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S2L1done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S2L1done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Get help from nearby",500,150);
      text("adult",500,175);

      text("B. Attack that dog",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S2L1done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S2L1done";
      }
    }
  }
  if(gameState==="S2L1done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Attacking will make it worser",70,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L2";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Adults have experience",110,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L2";
        ans=null;
      }
    }
  }
}


function S2L2(){
  if(gameState==="S2L2"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A snake is on the path",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);
    
    imageMode(CENTER);
    image(boyS2L2,60,280,150,200);

    imageMode(CENTER);
    image(snakeS2L2,300,300,100,100);

    fill("skyblue");noStroke();
    rect(328,270,10,10);

    if(randomS2L2<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Attack that snake",500,150);

      text("B. Avoid it",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S2L2done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S2L2done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Avoid it",500,150);

      text("B. Attack that snake",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S2L2done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S2L2done";
      }
    }
  }
  if(gameState==="S2L2done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Attacking will make it worser",70,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L3";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Actually snake attacks because it",30,250);
      text("is scared",270,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L3";
        ans=null;
      }
    }
  }
}


function S2L3(){
  if(gameState==="S2L3"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A cow is on the road while you are driving",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);

    rectMode(CENTER);fill("grey");noStroke();
    rect(400,400,800,200);fill("white");rect(400,350,800,20);
    
    imageMode(CENTER);
    image(cowS2L3,100,330,150,100);

    imageMode(CENTER);
    image(carS2L3,500,330,200,100);

    if(randomS2L3<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Don't stop the car",500,150);

      text("B. Stop the car",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S2L3done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S2L3done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Stop the car",500,150);

      text("B. Don't stop the car",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S2L3done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S2L3done";
      }
    }
  }
  if(gameState==="S2L3done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Even a cow's life is important",70,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L4";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("you have a pure heart",150,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L4";
        ans=null;
      }
    }
  }
}


function S2L4(){
  if(gameState==="S2L4"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A rat is on the track where you are riding a train on it",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);

    imageMode(CENTER);
    image(trainS2L4,735,323,250,150);

    rectMode(CENTER);fill("grey");
    rect(400,395,805,15);

    imageMode(CENTER);
    image(ratS2L4,100,375,100,50);

    if(randomS2L4<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Apply sudden break",500,150);
      text("(has risk)",500,180);

      text("B. Don't stop",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S2L4done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S2L4done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Don't stop",500,150);

      text("B. Apply sudden break",500,250);
      text("(has risk)",500,280);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S2L4done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S2L4done";
      }
    }
  }
  if(gameState==="S2L4done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("If you apply sudden breaks ,it",70,250);
      text("may cause damage to passengers",20,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L5";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("you are a right, sacrificing one life",20,250);
      text("instead of many life is better",70,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S2L5";
        ans=null;
      }
    }
  }
}


function S2L5(){
  if(gameState==="S2L5"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("A monkey wants your snacks in a zoo",50,50);
    pop();

    imageMode(CENTER);
    image(ground,400,350,800,100);

    imageMode(CENTER);
    image(boyS2L5,300,323,150,150);

    imageMode(CENTER);
    image(monkeyS2L5,120,290,200,200);

    imageMode(CENTER);
    image(snacksS2L5,240,290,50,50);

    imageMode(CENTER);
    image(signS2L5,440,330,110,130);

    if(randomS2L5<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Give it",500,150);

      text("B. Dont give it",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S2L5done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S2L5done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Don't give it",500,150);

      text("B. Give it",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S2L5done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S2L5done";
      }
    }
  }
  if(gameState==="S2L5done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("There is a board informing",100,250);
      text("Do not feed animals",170,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L1";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("I think you have good",160,250);
      text("reading habit",230,300);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L1";
        ans=null;
      }
    }
  }
}


function S3L1(){
  if(gameState==="S3L1"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("a person is badly hurt on road and people are just watching",10,50);
    pop();

    imageMode(CENTER);
    image(road,400,250,800,300);

    imageMode(CENTER);
    image(crowdS3L1,300,300,170,170);

    imageMode(CENTER);
    image(hurtmanS3L1,120,330,100,100);

    if(randomS3L1<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Don't help him",500,150);

      text("B. Help him",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S3L1done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S3L1done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Help him",500,150);

      text("B. Don't help him",500,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S3L1done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S3L1done";
      }
    }
  }
  if(gameState==="S3L1done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("You don't have a pure heart",90,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L2";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("You really have a pure heart",90,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L2";
        ans=null;
      }
    }
  }
}


function S3L2(){
  if(gameState==="S3L2"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("a person is badly hurt on road and people are just watching",10,50);
    pop();

    imageMode(CENTER);
    image(road,400,250,800,300);

    imageMode(CENTER);
    image(stealingS3L2,200,290,170,170);

    if(randomS3L2<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Don't interfere",450,150);

      text("B. Shout for other adults help",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S3L2done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S3L2done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Shout for other adults help",450,150);

      text("B. Don't interfere",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S3L2done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S3L2done";
      }
    }
  }
  if(gameState==="S3L2done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Atleast you could have tried",90,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L3";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Appreciate it",250,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L3";
        ans=null;
      }
    }
  }
}


function S3L3(){
  if(gameState==="S3L3"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("a old person is stuck in middle of road while crossing",50,50);
    pop();

    imageMode(CENTER);
    image(road,400,250,800,300);

    imageMode(CENTER);
    image(roadS3L3,400,250,800,300);

    imageMode(CENTER);
    image(oldmanS3L3,360,290,170,230);

    if(randomS3L3<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Don't interfere",450,150);

      text("B. Help him",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S3L3done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S3L3done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Help him",450,150);

      text("B. Don't interfere",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S3L3done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S3L3done";
      }
    }
  }
  if(gameState==="S3L3done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Atleast you could have tried",90,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L4";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Appreciate it",250,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L4";
        ans=null;
      }
    }
  }
}


function S3L3(){
  if(gameState==="S3L3"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("a old person is stuck in middle of road while crossing",50,50);
    pop();

    imageMode(CENTER);
    image(road,400,250,800,300);

    imageMode(CENTER);
    image(roadS3L3,400,250,800,300);

    imageMode(CENTER);
    image(oldmanS3L3,360,290,170,230);

    if(randomS3L3<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Don't interfere",450,150);

      text("B. Help him",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S3L3done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S3L3done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Help him",450,150);

      text("B. Don't interfere",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S3L3done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S3L3done";
      }
    }
  }
  if(gameState==="S3L3done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("Atleast you could have tried",90,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L4";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("Appreciate it",250,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L4";
        ans=null;
      }
    }
  }
}


function S3L4(){
  if(gameState==="S3L4"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("a stray dog is hurt on the road",50,50);
    pop();

    imageMode(CENTER);
    image(road,400,250,800,300);

    imageMode(CENTER);
    image(hurtdogS3L4,360,290,170,200);

    if(randomS3L4<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Hurt the dog again",450,150);

      text("B. Inform Blue Cross",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S3L4done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S3L4done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Inform Blue Cross",450,150);

      text("B. Hurt the dog again",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S3L4done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S3L4done";
      }
    }
  }
  if(gameState==="S3L4done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("You are really mean",180,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L5";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("You are the real man",170,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="S3L5";
        ans=null;
      }
    }
  }
}


function S3L5(){
  if(gameState==="S3L5"){
    bg="skyblue";

    push();
    textSize(30);
    fill(255,255,255);
    text("you dashed a person by mistake",50,50);
    pop();

    imageMode(CENTER);
    image(road,400,250,800,300);

    imageMode(CENTER);
    image(hurtmanS3L5,100,330,100,100);

    imageMode(CENTER);
    image(carS3L5,230,340,150,70);

    if(randomS3L5<0.5){

      fill(255,255,255);
      textSize(25);

      text("A. Don't help him",450,150);

      text("B. Help him at any cost",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "wrong";
        gameState="S3L5done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "correct";
        gameState="S3L5done";
      }
    }
    else{

      fill(255,255,255);
      textSize(25);

      text("A. Help him at any cost",450,150);

      text("B. Don't help him",450,250);

      if(keyDown("a")||keyDown("A")){
        ans = "correct";
        gameState="S3L5done";
      }
      else if(keyDown("b")||keyDown("B")){
        ans = "wrong";
        gameState="S3L5done";
      }
    }
  }
  if(gameState==="S3L5done"){
    if(ans==="wrong"){
      bg="red";

      textSize(100);
      fill("white");
      text("WRONG",255,100);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(cross,200,60,90,90);

      textSize(50);noStroke();
      text("You are really mean",180,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="comingSoon";
        ans=null;
      }
    }
    else if(ans==="correct"){
      bg="#46CB18";

      textSize(77);
      fill("white");
      text("CORRECT",255,90);

      stroke("white");
      strokeWeight(5);
      noFill();
      rectMode(CENTER);
      rect(400,60,500,100);

      fill("white");
      rectMode(CENTER);
      rect(200,60,100,100);

      imageMode(CENTER);
      image(tick,200,60,90,90);

      textSize(50);noStroke();
      text("You are the real man",170,250);

      textSize(20);
      text("press space to continue",550,370);
      if(keyDown("space")){
        gameState="comingSoon";
        ans=null;
      }
    }
  }
}


function comingSoon(){
  if(gameState==="comingSoon"){
    bg="#F7DE08";

    textSize(120);
    textFont("Forte regular");
    fill("white");
    noStroke();
    text("Coming Soon...",20,220);
  }
}