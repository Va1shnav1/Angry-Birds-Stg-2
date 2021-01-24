class Base{
    constructor(x, y, w, h, a){
        var options={
            restitution:0.5,
            density:1,
            friction:1
        }
        this.w=w;
        this.h=h;
        this.img=loadImage("Sprites/base.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }
}
