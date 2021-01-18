class Drop {
    constructor(x, y, r){
        
        var options = {
            restitution:0.04
        }
        this.r=r
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255));
        World.add(wold, this.body);
    }

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.drop, {x:random(0,400)}, {y:random(0,400)})
        }
    }

    showDrop(){
        fill(rgb(random(0,255),random(0,255),random(0,255)))
        ellipseMode(CENTER);
        ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
    }
/*    display() {
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }*/

};
