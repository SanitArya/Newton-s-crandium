class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
    
        var options = {
    
            bodyA: bodyA,
            bodyB: bodyB,
            posB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
            length: 400
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    
    }
    display(){
    
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
    
        strokeWeight(3);

        var posiA = posA.x
        var posiB = posA.y
        var posiC = posB.x+this.offsetX
        var posiD = posB.y+this.offsetY

        line(posiA,posiB,posiC,posiD);
    }
    }

    