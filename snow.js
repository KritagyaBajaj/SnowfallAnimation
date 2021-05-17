class Snow{
    constructor(x,y,r)
    {
        
        var options={
            restituition:1,
            friction:0,
            density:0.8
        }

        this.r=r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       image(this.image,pos.x,pos.y,this.r,this.r+50);
       pop();
     }
    }