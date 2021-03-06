class Ball {
    constructor(x,y,radius) {
      this.image = loadImage("sprites/paper.png");
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2

      }
      this.body = Bodies.circle(x,y,20,options);
      this.radius = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS)
      image(this.image, pos.x, pos.y,this.radius, this.radius);
    }
  };
