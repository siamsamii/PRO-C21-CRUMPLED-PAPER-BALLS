class Wall{
    constructor(x,y,w,h){

 var walloptions = {
       isStatic:true
        }


        this.body = Bodies.rectangle(x,y,w,h,walloptions);
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        World.add(world,this.body)
    }

display(){
    var pos = this.body.position;
    push ();
    //push captures all the new settings
rectMode(CENTER)
stroke (255)
fill ("blue")
rect(pos.x,pos.y,this.w,this.h)
pop ()

}

}