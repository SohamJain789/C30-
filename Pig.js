class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //Visibility is between 0 and 255 
    //O=1 fully OFF byte(8 bit)= 0000 0000 = completely invisible
    //255=1 fully ON byte(8 bit)= 1111 1111 = completely visible
    this.Visibility = 255;

  }
 display(){

  //super.display();
  //study the speed of the pig while it is hit by the bird
  console.log(this.body.speed);
  //make the pig visible if the speed is below 3
  if(this.body.speed<3){

  super.display();

  }
  //make the pig dissapear gradually if the speed is greater than 3 
  else{
  //remove the body from the physics world to make it dissapear
  //removing it from the world make it dissapear abruptly
  //Hence use tint function with the image to make the efect gradually disappearing 
World.remove(world,this.body);
//include push and pop so that changes do not apply to the entire game and it does not hang 
push()
//decrease the visibility by 5 
this.Visibility = this.Visibility-5;
//tint function in the p5 creates a vanishing effect by adding a transparent layer to the image 
tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop()  
  }


 }
};