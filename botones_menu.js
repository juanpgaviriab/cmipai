function Botones(boton,dim1,rad1,pos,cb){
  this.n = boton;
  this.colorBotones = cb;
  this.dim = dim1;
  this.rad = rad1;
  this.num = pos;
  this.angle1 = 0 + (random(20,100) * this.num);
  this.angle2 = 0 + (random(20,100) * this.num);
  this.switchOn = false;
  this.fondoDimensiones = false;
  this.ondaRadio = 10;
  this.ondaRadio2 = 10;
  this.ondaOpacidad = 100;
}

Botones.prototype.display = function(x,y,mx,my) {
  this.pos = {
    'x' : x,
    'y' : y
  };
  this.posy = y;
  this.radiansButtonX = radians(this.angle1);
  this.radiansButtonY = radians(this.angle2);
  this.x = this.pos.x + (this.rad * sin(this.radiansButtonX));
  this.y = this.pos.y + (this.rad * cos(this.radiansButtonY));

  this.distancia = dist(mx,my,this.x,this.y);
  if (this.distancia < 10) {
    this.angle1 = this.angle1 + 0;
    this.angle2 = this.angle2 + 0;
    //puntos menu
    this.colorBotones = colorBotonesActivos;
    this.colorPuntos = colorBotonesActivos;
    stroke(200, 6, 0,50);
    line(this.x, this.y,centroX/2, centroY/2);
    this.ondas();
  }else {
    this.angle1 = this.angle1 + (val*0.1);
    this.angle2 = this.angle2 + (val*0.1);
    this.colorBotones = color(0, 6, 144);
    this.colorPuntos = color(0, 6, 144,100);
  }

  fill(this.colorPuntos);
  stroke(this.colorPuntos);
  ellipse(this.x, this.y, 10, 10);
  noFill();


  textAlign(LEFT,CENTER);
  textSize(20);
  textFont(font_regular);
  fill(this.colorBotones);
  noStroke();
  text(this.n,this.x + 20, this.y -5);
}

Botones.prototype.ondas = function(){
if (this.ondaRadio > 70) {
  this.ondaRadio = 10;
  this.ondaRadio2 = 10;

  this.ondaOpacidad = 100;
}

noFill();
stroke(200,6,0,this.ondaOpacidad);
ellipse(this.x, this.y, this.ondaRadio2, this.ondaRadio2);

  noFill();
  stroke(200,6,0,this.ondaOpacidad);
  ellipse(this.x, this.y, this.ondaRadio, this.ondaRadio);

  this.ondaRadio = this.ondaRadio + 0.5;
  this.ondaRadio2 = this.ondaRadio2 + 1;
  this.ondaOpacidad --;

}

Botones.prototype.interruptor = function(mx,my){
  this.distanciaInterruptor = dist(mx,my,this.x,this.y);
  if (this.distanciaInterruptor < 10) {
    if (this.switchOn) {
      //fondoDimensiones = false;
      //this.switchOn = false;
      //console.log('switch ' + this.n + 'off');
    }else{
      fondoDimensiones = true;
      this.switchOn = true;
      console.log('switch ' + this.n + 'on');
    }
  // }else if (this.distanciaEscape < 20) {
  //   this.intAllOff();
}
}

Botones.prototype.intOn = function(){
  if (this.switchOn) {
    fill(colorGeneral);
    rect(windowWidth/2,0,centroX, centroY);
    this.escapeContenidos(mouseX,mouseY);
    //TITULO
    textAlign(LEFT,TOP);
    textSize(100);
    textFont(font_bold);
    fill(255);
    this.textTituloX = windowWidth/2 + 50;
    this.textTituloY = 30;
    this.lineaDtitulo = textAscent();
    this.refSubtitulo = this.textTituloY + this.lineaDtitulo;
    //lineas referencia TITULO
    // stroke(255);
    // line(windowWidth/2,this.refSubtitulo,windowWidth,this.refSubtitulo);
    // stroke(255,0,0);
    // line(windowWidth/2,this.textTituloY,windowWidth,this.textTituloY);
    // noStroke();
    //texto TITULO
    text(data[this.num].titulo, this.textTituloX, this.textTituloY);

    //SUBTITULO
    textFont(font_italic);
    textSize(35);
    this.textSubtituloX = windowWidth/2 + 50;
    this.textSubtituloY = this.refSubtitulo + (this.lineaDtitulo/3);
    this.lineaDsubtitulo = textAscent();
    this.refCuerpo = this.textSubtituloY + this.lineaDsubtitulo;
    //lineas referencia SUBTITULO
    // stroke(255);
    // line(windowWidth/2,this.refCuerpo,windowWidth,this.refCuerpo);
    // stroke(255,0,0);
    // line(windowWidth/2,this.textSubtituloY,windowWidth,this.textSubtituloY);
    // noStroke();
    //texto SUBTITULO
    text(data[this.num].dna, this.textSubtituloX,this.textSubtituloY);

    //CUERPO
    textFont(font_regular);
    textSize(20);
    this.textCuerpoX = windowWidth/2 + 50;
    this.textCuerpoY = this.refCuerpo + (this.lineaDsubtitulo);
    this.lineaDcuerpo = textAscent();
    this.refCierre = this.textCuerpoY + this.lineaDcuerpo;
    //lineas referencia SUBTITULO
    // stroke(255);
    // line(windowWidth/2,this.refCierre,windowWidth,this.refCierre);
    // stroke(255,0,0);
    // line(windowWidth/2,this.textCuerpoY,windowWidth,this.textCuerpoY);
    // noStroke();
    //texto SUBTITULO
    textWrap(WORD);
    text(data[this.num].description, this.textCuerpoX,this.textCuerpoY,(windowWidth/2 - 100));
    // textSize(17);
    // text(data[this.num].name, this.textTituloX, 200);
    //this.switchOn = false;
  }else{
  }
}

Botones.prototype.intAllOff = function(){
  fondoDimensiones = false;
  this.switchOn = false;
  console.log('switch ' + this.n + 'off');
}

Botones.prototype.escapeContenidos = function(mx,my){
  this.distanciaEscape = dist(mx,my,windowWidth - 50,52);
  if (this.distanciaEscape < 20) {
    noFill();
    strokeWeight(2);
    stroke(255);
    ellipse(windowWidth - 50,52,40,40);
    strokeWeight(1);
  }
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(20);
  textFont(font_regular);
  fill(255);
  text('X', windowWidth - 50, 50);
}
