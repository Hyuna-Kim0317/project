/* 주인공 정의*/
class Hero extends GameObject{
 constructor(container,src,width,height,x,y,velX,velY){
    super(container,src,width,height,x,y,velX,velY);

    this.leftSensor = new LeftSensor(this.container,3,40,this.x-3,this.y+10,"red");
    this.rightSensor = new RightSensor(this.container, 3, 40, this.x+this.width, this.y+10, "red");
    this.topSensor=new TopSensor(this.container, 40, 3, this.x+5, this.y-3, "red");
    this.bottomSensor=new BottomSensor(this.container, 40, 3, this.x+5, this.y+this.height, "red");

   //his.sensorArray=new Array(4);
}
hitCheck(){
    // for(let i=0;i<brickArray.length;i++){
    //     let result = collisionCheck(this,brickArray[i]);
    //     if(result){
    //         this.x=brickArray[i].x-this.width;
    //         this.y=brickArray[i].y-this.height;
    //         //this.x=checkX;
    //         //this.y=checkY;
    //     } 
    // }
}



tick(){
    this.x+=this.velX;
    this.y+=this.velY;  

    this.leftSensor.tick(this);
    this.leftSensor.render();

    this.rightSensor.tick(this);
    this.rightSensor.render();

    this.topSensor.tick(this);
    this.topSensor.render();

    this.bottomSensor.tick(this);
    this.bottomSensor.render();

    this.hitCheck();
    


}
}