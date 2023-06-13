/* 주인공 정의*/
class Hero extends GameObject{
 constructor(container,src,width,height,x,y,velX,velY){
    super(container,src,width,height,x,y,velX,velY);

    this.leftSensor = new LeftSensor(this.container,3,40,this.x-3,this.y+10,"red");
    this.rightSensor = new RightSensor(this.container, 3, 40, this.x+this.width, this.y+10, "red");
    this.topSensor=new TopSensor(this.container, 40, 3, this.x+5, this.y-3, "red");
    this.bottomSensor=new BottomSensor(this.container, 40, 3, this.x+5, this.y+this.height, "red");

   
}
hitCheck(){
    for(let i=0; i<enemyArray.length;i++){
        let result= collisionCheck(this, enemyArray[i]);
        if(result){
            console.log(i+" 번째 적과 충돌");
            
            playBox.removeChild(enemyArray[i].leftSensor.div);
            playBox.removeChild(enemyArray[i].rightSensor.div);
            playBox.removeChild(enemyArray[i].topSensor.div);
            playBox.removeChild(enemyArray[i].bottomSensor.div);
            
            //화면에서 제거
            playBox.removeChild(enemyArray[i].img);

            let youIndex = enemyArray.IndexOf(enemyArray[i]);
            enemyArray.splice(youIndex,1);
            break;
            
            lifeBox.removeChild(boxlifeArray[0]);
            boxlifeArray.splice(0,1);
        }


    }
    for(let i=0; i<speedArray.length;i++){
        let result= collisionCheck(this, speedArray[i]);
        if(result){ //speed 아이템과 주인공이 충골했다면
            console.log(i+"번째 speed UP");

            //화면에서 제거
            this.container.removeChild(speedArray[i].img);
            //배열에서 제거할 인덱스 조사
            let youIndex = speedArray.IndexOf(speedArray[i]);
            //배열에서 제거
            speedArray.splice(youIndex,1);


            this.velX=10;
           
        }

    }   


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