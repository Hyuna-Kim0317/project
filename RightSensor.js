class RightSensor extends Sensor{
    tick(){
        this.x = hero.x+hero.width;
        this.y = hero.y+10;
    }    
}