class LeftSensor extends Sensor{
    tick(){
        this.x=hero.x-3;
        this.y=hero.y+10;
    }
}