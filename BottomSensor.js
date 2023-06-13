class BottomSensor extends Sensor{
    tick(who){
        this.x = who.x+5;
        this.y = who.y+who.height;
    }
}