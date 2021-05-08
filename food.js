class Food{
    constructor(x, y, w, h) {
        var options = {
             isStatic:false,
            'restitution':0,
            'friction':0,
            'density':1.2
        }
        this.Food = loadImage("Milk.png")
        this.body = Bodies.rect(x, y, w, h, options);
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        World.add(world, this.body);
      }
      display(){
        Image("Milk.png");
        //console.log("paper");
        push();
        translate(this.body.position.x, this.body.position.y);
        radiusMode(CENTER);
        radius( this.Food,0, 0, this.w,this.h);
        pop();
      }
}