var ball;
var database, position;

function setup(){
    createCanvas(500,500);
    
    database = firebase.database()
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //ref() --> it refers to the database

    //on() --> creates a listener which listens to all the changes going on

    database.ref("balls/position").on("value" , readPosition)  //readPosition --> is an user defined function's call statement
}

function draw(){
    background("white");
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x1,y1){

    //set() --> helps to set the latest data to the database

    database.ref("balls/position").set({
        'x' : position.x + x1,
        'y' : position.y + y1
    })      
    
}


function readPosition(data){

    //position --> is the variable which holds the value of x & y from the database
    position = data.val()    

    ball.x = position.x
    ball.y = position.y

}


