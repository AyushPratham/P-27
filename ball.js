class ball {
constructor(x,y,r){
    var options = {
        restitution: 1,
        friction: 0,
        density: 0.8,
        isStatic:false
    }
    this.radius = r
    this.body = Bodies.circle(x,y,r,options)
    World.add(world, this.body)

}

    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}
