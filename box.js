class Box
{
    constructor(x,y,w,h)
    {

        var options = { restitution :1.0,density :1.0, friction :0.7}

        
        this.box=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.box);
        this.width=w;
        this.height=h;

    }

    display()
    {

    var pos = this.box.position 
    var angle = this.box.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
   // rect(this.box.position.x,this.box.position.y,this.width,this.height);
   rect(0,0,this.width,this.height);
   pop();
    }


}