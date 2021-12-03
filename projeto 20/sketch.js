var bgImg,bg;
var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3;

function preload() {
    //carregue as imagens aqui
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png")

    mouse3 = loadAnimation("images/mouse4.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse1 = loadAnimation("images/mouse1.png");

    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(800,800);
    //crie os sprites de gato e rato aqui
    cat = createSprite(600,600,0,0);
    cat.addAnimation("gatosentado", cat1);
    cat.addAnimation("gatoandando", cat2);
    cat.addAnimation("ultimaImagemGato", cat3);
    cat.scale = 0.2;
  

    mouse = createSprite(200,600,0,0);
    mouse.addAnimation("ratosentado", mouse1);
    mouse.addAnimation("ratoProvocando", mouse2);
    mouse.addAnimation("ultimaImagemRato", mouse3);

    mouse.scale = 0.2;

    // bg = addImage(bgImg);
    
}

function draw() {
    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(cat.x -mouse.x < (cat.width -mouse.width)/2){
        cat.velocityX= 0;
        cat.changeAnimation("ultimaImagemGato", cat3);
        mouse.changeAnimation("ultimaImagemRato", mouse3);
        cat.x=300;
        cat.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){
  //Para mover e alterar a animação, escreva o código aqui
  if(keyCode === LEFT_ARROW){
    mouse.changeAnimation("ratoProvocando", mouse2);
    
    cat.velocityX = -5;
    cat.changeAnimation("gatoandando", cat2);
  }

}
