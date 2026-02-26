
const aromas = {
  fresa: {
    nombre: "Fresa",
    emoji: "🍓",
    descripcion: "Dulce y divertida."
  },
  menta: {
    nombre: "Menta",
    emoji: "🌿",
    descripcion: "Fresca y natural."
  },
  vainilla: {
    nombre: "Vainilla",
    emoji: "🍦",
    descripcion: "Suave y acogedora."
  }
};


let puntos = {
  fresa: 0,
  menta: 0,
  vainilla: 0
};

const preguntas = [
  {
    pregunta: "¿Qué plan prefieres?",
    opciones: ["Salir con amigos", "Hacer deporte", "Netflix y manta"],
    valores: ["fresa", "menta", "vainilla"]
  },
  {
    pregunta: "¿Cuál es tu estación favorita?",
    opciones: ["Primavera", "Verano", "Invierno"],
    valores: ["fresa", "menta", "vainilla"] 
  },
  {
    pregunta: "¿Qué te hace más feliz?",
    opciones: ["Chocolate", "Deporte", "Naturaleza"],
    valores: ["fresa", "menta", "vainilla"]
  }
];

let indicePregunta = 0; 


function empezarTest(){
  puntos = { fresa: 0, menta: 0, vainilla: 0 }; 
  indicePregunta = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("cuestionario").style.display = "block";
  mostrarPregunta();
}


function mostrarPregunta(){
  const div = document.getElementById("cuestionario");
  div.innerHTML = ""; 
  if(indicePregunta < preguntas.length){
    const q = preguntas[indicePregunta];

    
    const p = document.createElement("p");
    p.textContent = q.pregunta;
    div.appendChild(p);

    
    q.opciones.forEach((opcion, i) => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => {
        sumar(q.valores[i]);
        indicePregunta++;
        mostrarPregunta(); 
      };
      div.appendChild(btn);
    });
  } else {
    
    mostrarResultado();
  }
}


function sumar(aroma){
  if(puntos[aroma] !== undefined){
    puntos[aroma]++;
  }
  console.log("Puntos actuales:", puntos);
}


function mostrarResultado(){

  const cuestionario = document.getElementById("cuestionario");
  const resultado = document.getElementById("resultado");

  cuestionario.style.display = "none";
  resultado.style.display = "block";

  // encontrar ganador manualmente
  let ganador = "fresa";
  let maxPuntos = puntos["fresa"];

  for (let aroma in puntos) {
    if (puntos[aroma] > maxPuntos) {
      maxPuntos = puntos[aroma];
      ganador = aroma;
    }
  }

  console.log("Ganador:", ganador);
  console.log("Puntos:", puntos);

  const aromaGanador = aromas[ganador];

  resultado.innerHTML =
    "<h3>" + aromaGanador.emoji + " Eres " + aromaGanador.nombre + "</h3>" +
    "<p>" + aromaGanador.descripcion + "</p>";
}
function sumar(aroma){
  if(puntos[aroma] !== undefined){
    puntos[aroma]++;
  }

  console.log("Se sumó:", aroma);
  console.log("Puntos actuales:", puntos);
}