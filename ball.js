class Ball{
    constructor(x,y,r){
    var options={
        isStatic:false,
       'restitution':0.3,
       'friction':0.5,
        'density':1.2
    }
       //this.image = loadImage("paper.png");
    
    
    this.body = Bodies.circle(x,y,r,options);
    this.r=r;
   //this.r=10;
    
    World.add(world,this.body);

}
display(){
ellipseMode(RADIUS);
fill("cyan")
ellipse(this.body.position.x,this.body.position.y,this.r);
}
    
};