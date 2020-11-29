class Paper{
  
    constructor(x,y,width,height,angle){
        var option = { 
         
          'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic : false
         
       }
        this.body = Bodies.rectangle(x,y,width,height,angle,option); 
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
        } 
        display(){
             var pos = this.body.position
             var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
              rectMode(CENTER); 
              fill("brown"); 
              rect(0,0,this.width,this.height);
              pop();
            }
}