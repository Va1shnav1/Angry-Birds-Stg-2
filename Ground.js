class Ground{
    constructor(x, y, w, h){
        var options={
            isStatic:true
        }
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.img=loadImage("Sprites/ground.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, 0, 0, this.w, this.h);
        pop();
    }
}
