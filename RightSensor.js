class RightSensor extends Sensor{
    tick(who){
        this.x = who.x+who.width;
        this.y = who.y+10;
    }    
}