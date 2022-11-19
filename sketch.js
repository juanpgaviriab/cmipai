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
let menu = ["índice", "proyectos","trópicos","canales","cancer"];
let satelite = ["Juan Pablo Gaviria Bedoya", "Paulina Escobar","Ahmed Isamaldin","Natalia Rivera","Sebastian Sandoval","Ana Nuñez"];
let titulo = "  /   Centro Móvil de Investigación y Creación Artística Intratropical";
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

let d;
let slider;
let val;

function preload() {
  font_narrowRegular = loadFont('fonts/ArchivoNarrow-Regular.otf');
  font_regular = loadFont('fonts/Archivo-Regular.otf');
  font_italic = loadFont('fonts/Archivo-Italic.otf');
  font_bold = loadFont('fonts/Archivo-Bold.otf');
  logo = loadImage('imagenes/logo_azul.gif');
  data = loadJSON('contenido/contenido.json');
}

function setup() {
  centroX = windowWidth;
  centroY = windowHeight;
  createCanvas(centroX, centroY);

  colorGeneral = color(0, 6, 144);
  colorBotones = color(0, 6, 144);
  colorGraficos = color(0, 6, 144,100);
  colorGraficosT = color(0, 6, 144,5);
  colorBotonesActivos = color(200, 6, 0);
  //menu
  for (let i = 0; i < menu.length; i++) {
    menuBotones[i] = new Botones(menu[i],random(100,500),random(100,500),i,colorBotones);
  }

  //boton graficos
  bgraficos = createButton(" Graphics ");
  bgraficos.style('font-size: 18px');
  bgraficos.style('border: 0px');
  bgraficos.style('background-color: rgba(0, 0, 0, 0);');
  bgraficos.style('color: rgba(0, 6, 144);');
  bgraficos.style('font-family: Archivo-Regular;');
  bgraficos.mouseOver(()=>bgraficos.style('color: #fffd37;'));
  bgraficos.mouseOut(()=>bgraficos.style('color: rgba(0, 6, 144);'));
  bgraficos.mousePressed(()=>bgraficos.style('color: #b90641;'));
  bgraficos.mousePressed(onGraficos);


  d = createDiv();
  d.style('color: rgba(0, 6, 144);');
  d.style('border: 0px;');
  d.position(10, windowHeight - 30);
  slider = createSlider(1, 50, 2,);
  d.child(slider);




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
  background(221, 221, 221);
  dimensiones();
  d.position(10, windowHeight - 30);
  val = slider.value();
  //posicion titulo
  textAlign(LEFT,CENTER);
  textSize(20);
  textFont(font_narrowRegular);
  fill(colorGraficos);
  noStroke();
  if (centroX < centroX/2 + textWidth(titulo)+100) {
    text(titulo,10,30);
  }else{
    text(titulo, centroX/2 + 100,centroY/2);
  }

  //posicion boton graficos
  bgraficos.position(centroX - 100, centroY - 40);

  //posicion botones menu
  for (let i = 0; i < menu.length; i++) {
    menuBotones[i].display(centroX/2, centroY/2,mouseX,mouseY);
    menuBotones[i].intOn();
  }

  //graficos
  graficosOn();

  //logo central
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
