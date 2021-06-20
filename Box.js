class Box1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("cyan");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  class Box2{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("orange");
        rect(pos.x, pos.y, this.width, this.height);
      }
  }
  class Box3{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
      }
  }
  class Box4{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("magenta");
        rect(pos.x, pos.y, this.width, this.height);
      }
  }
