class Pendulam{

    constructor(x,y,s){

        var options={
            restitution: 0.8,

            density:1.2,
            isStatic:s
            }
            this.body = Bodies.circle(x,y,25,options);
             
            this.r = 25;
           
           World.add(world,this.body);
        }
    
         display(){
    
         var pos = this.body.position;

         fill("cyan");
         ellipseMode(RADIUS)
         ellipse(pos.x,pos.y,this.r,this.r);
    }
}

