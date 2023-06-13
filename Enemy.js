class Enemy extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);
    
        this.leftSensor = new LeftSensor(this.container,3,40,this.x-3,this.y+10,"green");
        this.rightSensor = new RightSensor(this.container, 3, 40, this.x+this.width, this.y+10, "red");
        this.topSensor=new TopSensor(this.container, 40, 3, this.x+5, this.y-3, "red");
        this.bottomSensor=new BottomSensor(this.container, 40, 3, this.x+5, this.y+this.height, "red");
    
     //  this.sensorArray=new Array(4);
    }

    hitCheck(){
        for(let i=0; i<digArray.length;i++){
            let result= collisionCheck(this, digArray[i]);
            if(result){
                console.log(i+" 번째 함정과 충돌");
                
                //화면에서 적 제거
                this.container.removeChild(this.img);

                let myIndex = enemyArray.indexOf(this); //적 제거
                enemyArray.splice(myIndex,1);   //적이 소속된 배열에서 제거

                //화면에서 함정 제거
                this.container.removeChild(digArray[i].img);
    
                let youIndex = digArray.indexOf(digArray[i]);
                digArray.splice(youIndex,1);
                

            }
            
            break;
    
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