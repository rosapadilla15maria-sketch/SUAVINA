
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
  },
  maracuya: {
    nombre: "Maracuya",
    emoji: "🥭",
    descripcion: "Vibrante y exótica."
  }
};


let puntos = {
  fresa: 0,
  menta: 0,
  vainilla: 0,
  maracuya: 0
};

const preguntas = [
  {
    pregunta: "¿Qué plan prefieres?",
    opciones: ["Salir con amigos", "Netflix y manta", "Salir de compras","Caminar por la playa"],
    valores: ["fresa", "menta", "vainilla","maracuya"]
  },
  {
    pregunta: "¿Cuál es tu estación favorita?",
    opciones: ["Primavera", "Verano", "Invierno","Otoño"],
    valores: ["fresa", "menta", "vainilla","maracuya"] 
  },
  {
    pregunta: "¿Qué te hace más feliz?",
    opciones: ["Chocolate", "Deporte", "Naturaleza", "Aventura"],
    valores: ["fresa", "menta", "vainilla","maracuya"]
  }
];

let indicePregunta = 0; 


function empezarTest(){
  // Reiniciar puntos y preguntas
  puntos = { fresa: 0, menta: 0, vainilla: 0, maracuya: 0 }; 
  indicePregunta = 0;

  // Esconder resultado y mostrar cuestionario
  const resultado = document.getElementById("resultado");
  const cuestionario = document.getElementById("cuestionario");

  resultado.style.display = "none"; 
  resultado.innerHTML = "";           

  cuestionario.style.display = "block"; 
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