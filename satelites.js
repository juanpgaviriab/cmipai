function Satelites(boton,dim1,rad1,pos){
  this.b = createButton(boton);
  this.dim = dim1;
  this.rad = rad1;
  this.num = pos;
  this.angle1 = 0 + (random(20,100) * this.num);
  this.angle2 = 0 + (random(20,100) * this.num);
  this.movimiento = true;

}

Satelites.prototype.display = function() {
  this.b.style('font-size: 15px');
  this.b.style('border: 0px');
  this.b.style('background-color: rgba(0, 0, 0, 0);');
  this.b.style('color: rgb(154, 154, 154);');
  this.b.style('font-family: Archivo-Regular;');
  //this.b.mouseOver(()=>this.b.style('color: rgb(210, 0, 0)'));
  //this.b.mouseOut(()=>this.b.style('color: rgba(0, 6, 144)'));
  //this.b.mousePressed(()=>this.b.style('color: #b90641;'));

}

Satelites.prototype.position = function(x,y,mx,my) {

  this.posx = x;
  this.posy = y;
  this.radiansButtonX = radians(this.angle1);
  this.radiansButtonY = radians(this.angle1);
  this.x = this.posx + (this.rad * sin(this.radiansButtonX));
  this.y = this.posy + (this.rad * cos(this.radiansButtonY));
  // this.b.position(this.posx, this.posy - 10);
  this.b.position(this.x, this.y - 30);

this.distancia = dist(mx,my,this.x,this.y);
if (this.distancia < 10) {
  this.angle1 = this.angle1 + 0;
  this.angle2 = this.angle2 + 0;
  //puntos menu
  fill(200);
  stroke(200);
  line(this.x, this.y,windowWidth/2, windowHeight/2);
}else {
  this.angle1 = this.angle1 + 0.2;
  this.angle2 = this.angle2 + 0.2;
}
  // this.b.mouseOver(function() {
  //  this.movimiento = false;
  // });

}
