class Pensil extends BaseClass {
  constructor(x, y, width, height,angle){
    super(x,y,width,height);
    this.image = loadImage("sprites/pensil.png");
    Matter.Body.setAngle(this.body,angle);
    //Matter.Body.setStatic(this.body,true)
    
  }

}
