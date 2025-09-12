//https://www.youtube.com/watch?v=WiTP0_c-O0w //video explicativo

let referencia;
let cantidadLineas = 10;
let maxDist = 200;
let colorBase;
let invertirColor = false;

function preload() {
  referencia = loadImage("arte.png"); // Carga la imagen antes de setup()
}

function setup() {
  createCanvas(800, 400);
  if (!referencia) {
    console.error("⚠️ Imagen no encontrada. Sube 'arte.png' en el editor de p5.js.");
  }
  colorBase = color(0);
}
 {
  createCanvas(800, 400);           
  colorBase = color(0);
}
          
          function draw() {
            background(255);
            
            // Parte izquierda: imagen de referencia
            image(referencia, 0, 0, 400, 400);
            
            // Parte derecha: obra 
            push();
            translate(400, 0);
            mostrarOpArt(cantidadLineas);
            pop();
            
            mostrarInstrucciones();
          }
          
          function mostrarOpArt(cantidad) {
            for (let i = 0; i < cantidad; i++) {
              for (let j = 0; j < cantidad; j++) {
                let x = map(i, 0, cantidad, 0, 400);
                let y = map(j, 0, cantidad, 0, 400);
                let d = dist(mouseX - 400, mouseY, x, y);
                let r = map(d, 0, maxDist, 20, 2);
                r = constrain(r, 2, 20);
                strokeWeight(1);
                noFill();
                
                if (invertirColor) {
                  stroke(255);
                } else {
                  stroke(colorBase);
                }
                
                dibujarCirculos(x, y, r);
              }
            }
          }
          
          //  Función propia con parámetro que NO retorna
          function dibujarCirculos(cx, cy, radio) {
            for (let i = 0; i < 5; i++) {
              ellipse(cx, cy, radio * i, radio * i);
            }
          }
          
          // ✅ Función propia con parámetro que SÍ retorna un valor
          function calcularTamañoBase(cantidad) {
            return map(cantidad, 5, 50, 40, 5);
          }
          
          // Mostrar instrucciones en pantalla
          function mostrarInstrucciones() {
            fill(0);
            textSize(12);
            textAlign(LEFT);
            text("↑/↓ : Aumentar / Disminuir líneas\nESPACIO: Cambiar color\nC: Invertir color\nR: Reiniciar", 410, 20);
          }
          
          // ✅ Eventos de teclado
          function keyPressed() {
            if (keyCode === UP_ARROW) {
              cantidadLineas = min(50, cantidadLineas + 1);
            } else if (keyCode === DOWN_ARROW) {
              cantidadLineas = max(5, cantidadLineas - 1);
            } else if (key === ' ') {
              colorBase = color(random(255), random(255), random(255));
            } else if (key === 'c' || key === 'C') {
              invertirColor = !invertirColor;
            } else if (key === 'r' || key === 'R') {
              reiniciar();
            }
          }  
            
            // Función que reinicia las variables
          function reiniciar() {
            cantidadLineas = 10;
            colorBase = color(0);
            invertirColor = false;
          }
