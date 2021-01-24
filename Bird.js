class Bird extends Base{
   constructor(x, y){
        super(x, y, 50, 50);
        this.img = loadImage("Sprites/bird.png");
    }
    display(){
        super.display();
        var pos=this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        
    }
}
