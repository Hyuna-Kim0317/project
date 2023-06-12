class BottomSensor extends Sensor{
    tick(){
        this.x = hero.x+5;
        this.y = hero.y+hero.height;
    }
}