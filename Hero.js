/* 주인공 정의*/
class Hero extends GameObject {
    constructor(container, src, width, height, x, y, velX, velY, herospeed) {
        super(container, src, width, height, x, y, velX, velY);

        this.leftSensor = new LeftSensor(this.container, 3, 40, this.x - 3, this.y + 10, "red");
        this.rightSensor = new RightSensor(this.container, 3, 40, this.x + this.width, this.y + 10, "red");
        this.topSensor = new TopSensor(this.container, 40, 3, this.x + 5, this.y - 3, "red");
        this.bottomSensor = new BottomSensor(this.container, 40, 3, this.x + 5, this.y + this.height, "red");

        this.herospeed = herospeed;


    }
    hitCheck() {
        for (let i = 0; i < enemyArray.length; i++) {
            let result = collisionCheck(this, enemyArray[i]);
            if (result) {
                console.log(i + " 번째 적과 충돌");

                playBox.removeChild(enemyArray[i].leftSensor.div);
                playBox.removeChild(enemyArray[i].rightSensor.div);
                playBox.removeChild(enemyArray[i].topSensor.div);
                playBox.removeChild(enemyArray[i].bottomSensor.div);

                //화면에서 제거
                playBox.removeChild(enemyArray[i].img);

                let youIndex = enemyArray.indexOf(enemyArray[i]);
                enemyArray.splice(youIndex, 1);

                //lifeBox.removeChild(boxlifeArray[0]);
                //boxlifeArray.splice(0,1);
            }

            break;

        }
        for (let i = 0; i < speedArray.length; i++) {
            let result = collisionCheck(this, speedArray[i]);
            if (result) { //speed 아이템과 주인공이 충골했다면
                console.log(i + "번째 speed UP");
                //hero의 스피드 증가
                hero.herospeed = 10;

                //화면에서 제거
                this.container.removeChild(speedArray[i].img);
                //배열에서 제거할 인덱스 조사
                let youIndex = speedArray.indexOf(speedArray[i]);
                //배열에서 제거
                speedArray.splice(youIndex, 1);



                break;
            }

        }
        for (let i = 0; i < coinArray.length; i++) {
            let result = collisionCheck(this, coinArray[i]);
            // let a = coinArray.indexOf(coinArray[0]);
            // playBox.removeChild(coinArray[0].img);
            // coinArray.splice(a,1); 

            if (result) { //coin 아이템과 주인공이 충골했다면
                console.log(i + "번째 coin UP");
                console.log(coinArray.length);


                //배열에서 제거할 인덱스 조사
                let youIndex = coinArray.indexOf(coinArray[i]);
                //화면에서 제거
                this.container.removeChild(coinArray[i].img);
                //배열에서 제거
                coinArray.splice(youIndex, 1);

                scorenum += 10;
                createScore();



                break;
            }
        }
        for (let i = 0; i < lifeArray.length; i++) {
            let result = collisionCheck(this, lifeArray[i]);
            if (result) { //life 아이템과 주인공이 충골했다면
                console.log(i + "번째 life UP");


                //화면에서 제거
                this.container.removeChild(lifeArray[i].img);
                //배열에서 제거할 인덱스 조사
                let youIndex = lifeArray.indexOf(lifeArray[i]);
                //배열에서 제거
                lifeArray.splice(youIndex, 1);







                break;
            }
        }
        for (let i = 0; i < clockArray.length; i++) {
            let result = collisionCheck(this, clockArray[i]);
            if (result) { //clock 아이템과 주인공이 충골했다면
                console.log(i + "번째 clock UP");


                //화면에서 제거
                this.container.removeChild(clockArray[i].img);
                //배열에서 제거할 인덱스 조사
                let youIndex = clockArray.indexOf(clockArray[i]);
                //배열에서 제거
                clockArray.splice(youIndex, 1);

                createTime();




                break;
            }
        }




        
        
    }
    
    hitStar(){
        for(let i=0;i<endingArray.length; i++){

            if (collisionCheck(this, endingArray[i])) {
                console.log("엔딩");
                this.container.removeChild(endingArray[i].img);
                endingArray.splice(i,1);
                level++;
                removeLevel();
                nextLevel();
                
            }
        }
    }

    tick() {
       
        
        this.leftSensor.tick(this);
        this.leftSensor.render();

        this.rightSensor.tick(this);
        this.rightSensor.render();
        
        this.topSensor.tick(this);
        this.topSensor.render();
        
        this.bottomSensor.tick(this);
        this.bottomSensor.render();

        //override 를 했기 때문에 gameObject 의 tick 메서드에서 설정을 해주더라도
        //적용이 되지 않는다.
        //hero 와 enemy에서 각각 hero.x, enemy.x 의 범위를 설정해주어야한다.
        if (this.x >= 2445) {
            this.x = 2445;
        } 
        if (this.x <= 0) {
            this.x = 0;
            
        }

        if(this.y >= 1445){
            this.y = 1445;
        }
        if(this.y <= 0){
            this.y = 0;
        }
        
        this.x += this.velX;
        
        this.y += this.velY;
        
        
        
    }
    render(){        
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";        

        //배열에서 지운다음에 호출하면 에러가 날 수 있다.
        //this.img의 left, top 값을 설정해준 후, 다음 메서드를 호출한다.
        this.hitCheck();
        this.hitStar();

        //showMiniMap();
        moveMiniMap();
        moveMap();
    }
}