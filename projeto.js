var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;


function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(100,580,200,30);
    bloco1.shapeColor = "#00CED1";

    bloco2 = createSprite(300,580,200,30);
    bloco2.shapeColor = "#FF4500";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(500,580,200,30);
    bloco3.shapeColor = "#FF0000";

    bloco4 = createSprite(700,580,200,30);
    bloco4.shapeColor = "#00FF00";

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 7;
    bola.velocityY = 7;

}

function draw() {
    background(rgb(169,169,169));
    arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "#00CED1";
        music.play();
    }

    if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
        bola.shapeColor = "#FF4500";
        music.play();
    }

    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "#FF0000";
        music.play();
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "#00FF00";
        music.play();
    }

    if(bloco1.isTouching(bola)){
        bola.shapeColor = "#00CED1";
        bola.velocityX = 0;
        bola.velocityY = 0;
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "#FF4500";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0;
        bola.velocityY = 0;
        //escreva o código para parar a música
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola)){
        bola.shapeColor = "#FF0000";
        bola.velocityX = 0;
        bola.velocityY = 0;
    }
    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola)){
        bola.shapeColor = "#00FF00";
        bola.velocityX = 0;
        bola.velocityY = 0;
    }
    drawSprites();
}