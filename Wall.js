class Wall {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where wall will be created  
      this.ry = height-random([550,350])  //setting y position where wall will be created 
      this.spt=createSprite(this.rx, random(100,200)); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",wallAnimation);
      this.spt.scale=0.10;
      if(frameCount%20===0){
        this.ry = random(500,200);
      }
    
    }
  
  
}
  


