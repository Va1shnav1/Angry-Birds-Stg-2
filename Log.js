class Log extends Base{
    constructor(x, y, h, a){
        var options={
            restitution:0.8,
            density:0.5,
            friction:1.5
        }
        super(x, y, 20, h, a);
        this.img=loadImage("Sprites/wood2.png");
        Matter.Body.setAngle(this.body,a);
    }
}
