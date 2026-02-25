// Definición de aromas
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

// Inicialización de puntos
let puntos = {
  fresa: 0,
  menta: 0,
  vainilla: 0
};

// Preguntas del test
const preguntas = [
  {
    pregunta: "¿Qué plan prefieres?",
    opciones: ["Salir con amigos", "Hacer deporte", "Netflix y manta"],
    valores: ["fresa", "menta", "vainilla"]
  },
  {
    pregunta: "¿Cuál es tu estación favorita?",
    opciones: ["Primavera", "Verano", "Invierno"],
    valores: ["floral", "cítrico", "vainilla"] // Puedes ajustar aromas si quieres
  },
  {
    pregunta: "¿Qué te hace más feliz?",
    opciones: ["Chocolate", "Deporte", "Naturaleza"],
    valores: ["fresa", "menta", "vainilla"]
  }
];

let indicePregunta = 0; // Para saber en qué pregunta estamos

// Función que inicia el test
function empezarTest(){
  puntos = { fresa: 0, menta: 0, vainilla: 0 }; // Reiniciar puntos
  indicePregunta = 0;
  document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
  document.getElementById("cuestionario").style.display = "block";
  mostrarPregunta();
}

// Función que muestra la pregunta actual
function mostrarPregunta(){
  const div = document.getElementById("cuestionario");
  div.innerHTML = ""; // Limpiar contenido del cuestionario

  if(indicePregunta < preguntas.length){
    const q = preguntas[indicePregunta];

    // Mostrar la pregunta
    const p = document.createElement("p");
    p.textContent = q.pregunta;
    div.appendChild(p);

    // Crear botones para cada opción
    q.opciones.forEach((opcion, i) => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => {
        sumar(q.valores[i]); // Sumar puntos
        indicePregunta++;
        mostrarPregunta(); // Pasar a la siguiente pregunta
      };
      div.appendChild(btn);
    });
  } else {
    // Si ya no hay más preguntas, mostrar resultado
    mostrarResultado();
  }
}

// Función para sumar puntos
function sumar(aroma){
  if(puntos[aroma] !== undefined){
    puntos[aroma]++;
  }
  console.log("Puntos actuales:", puntos);
}

// Función para mostrar resultado final
function mostrarResultado(){
  const div = document.getElementById("cuestionario");
  div.style.display = "none"; // Ocultar cuestionario

  // Obtener aroma con más puntos
  let ganador = Object.keys(puntos).reduce((a,b) =>
    puntos[a] >= puntos[b] ? a : b
  );

  const aroma = aromas[ganador];

  document.getElementById("resultado").innerHTML = `
    <h3>${aroma.emoji} Eres ${aroma.nombre}</h3>
    <p>${aroma.descripcion}</p>
  `;
}