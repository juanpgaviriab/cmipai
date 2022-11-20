let button1;
let bgraficos;
let font1, font2;
let fondo;
let data;
let distanciaOrbitas;


let dim = 450;
let rad = dim/2;

let onG = false;

let logo;
let lw = 400;
let lh = 400;
let indexButton;
let proyectosButton;
let menuBotones = [];
let participante = [];
let menu = ["índice", "Yamulemao","trópicos","canales","cancer"];
let satelite = ["Juan Pablo Gaviria Bedoya", "Paulina Escobar","Ahmed Isamaldin","Natalia Rivera","Sebastian Sandoval","Ana Nuñez"];
let titulo = "  /  Centro Móvil de Investigación y Creación Artística Intratropical";
//centros pagina principal
let centroX, centroY;

//colores
let colorGeneral;
let colorGraficos;
let colorGraficosT;
let colorBotones;
let colorBotonesActivos;


//Contenidos
let fondoDimensiones = false;
let contenido = false;

let p;


function preload() {
  font_narrowRegular = loadFont('fonts/ArchivoNarrow-Regular.otf');
  font_regular = loadFont('fonts/IBMPlexMono-Regular.otf');
  font_italic = loadFont('fonts/IBMPlexMono-Italic.otf');
  font_bold = loadFont('fonts/IBMPlexMono-Bold.otf');
  logo = loadImage('imagenes/logo_blanco.gif');
  data = loadJSON('contenido/contenido.json');
}

function setup() {
  centroX = windowWidth;
  centroY = windowHeight;
  createCanvas(centroX, centroY);
     //color(0, 6, 144);
  colorGeneral = color(222,222,222);
  colorBotones = color(222,222,222);
  colorGraficos = color(222,222,222,100);
  colorGraficosT = color(222,222,222,5);
  colorBotonesActivos = color(255, 100, 100);
  //menu
  for (let i = 0; i < menu.length; i++) {
    menuBotones[i] = new Botones(menu[i],random(100,500),random(100,500),i,colorBotones);
  }

  //boton graficos
  bgraficos = createButton(" Graphics ");
  bgraficos.style('font-size: 18px');
  bgraficos.style('border: 0px');
  bgraficos.style('background-color: rgba(0, 0, 0, 0);');
  bgraficos.style('color: rgba(222,222,222);');
  bgraficos.style('font-family: IBMPlexMono-Regular;');
  bgraficos.mouseOver(()=>bgraficos.style('color: rgba(255,100,100);'));
  bgraficos.mouseOut(()=>bgraficos.style('color: rgba(222,222,222);'));
  bgraficos.mousePressed(()=>bgraficos.style('color: rgba(255,100,100);'));
  bgraficos.mousePressed(onGraficos);

}


function onGraficos(){
  if (onG === true) {
    onG = false;
  }else {
    onG = true;
  }
}

function dimensiones(){
  if (fondoDimensiones) {
    centroX = windowWidth/2;
    centroY = windowHeight;
  }else{
    centroX = windowWidth;
    centroY = windowHeight;
  }
}

function mousePressed(){
if (fondoDimensiones) {
  for (let i = 0; i < menu.length; i++) {
    if (menuBotones[i].switchOn === true) {
      if(mouseX < windowWidth/2 && mouseY < windowHeight - 50 || menuBotones[i].distanciaEscape < 20) {
       fondoDimensiones = false;
       menuBotones[i].intAllOff();
     }
    }
  }
}
  for (let i = 0; i < menu.length; i++) {
    menuBotones[i].interruptor(mouseX,mouseY);
  }
}

function draw() {
  //background(221, 221, 221);
  background(30,30,30);
  dimensiones();

  //posicion titulo
  textAlign(LEFT,CENTER);
  textSize(20);
  textFont(font_italic);
  fill(colorGraficos);
  noStroke();
  // if (centroX < centroX/2 + textWidth(titulo)+100) {
    text(titulo,10,30);
  // }else{
  //   text(titulo, centroX/2 + 100,centroY/2);
  // }

  //posicion boton graficos
  bgraficos.position(centroX - 110, centroY - 40);

  //posicion botones menu
  for (let i = 0; i < menu.length; i++) {
    menuBotones[i].display(centroX/2, centroY/2,mouseX,mouseY);
    menuBotones[i].intOn();
  }

  //graficos
  graficosOn();

  //logo central
  //imageMode(CENTER);
  image(logo, centroX/2 - lw/2,centroY/2 - lh/2,lw,lh);

}

function graficosOn(){

  if (onG === true) {
    for (let i = 0; i < menu.length; i++) {
      //distanciaOrbitas = dist(menuBotones[i].x,menuBotones[i].y,centroX/2, centroY/2);
      stroke(colorGraficos);
      noFill();
      ellipse(centroX/2,centroY/2, dist(menuBotones[i].x,menuBotones[i].y,centroX/2, centroY/2)*2, dist(menuBotones[i].x,menuBotones[i].y,centroX/2, centroY/2)*2);
    }
    //punto central
    noStroke();
    fill(colorGraficos);
    ellipse(centroX/2, centroY/2, 10, 10);

    beginShape();
    for (let i = 0; i < menu.length; i++) {
      fill(colorGraficosT);
      stroke(colorGraficos);
      vertex(menuBotones[i].x, menuBotones[i].y);
      //vertex(windowWidth/2,windowHeight/2);
    }
    endShape(CLOSE);

  }else {
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centroX = windowWidth;
  centroY = windowHeight;
}
