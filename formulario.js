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

function sumar(aroma){
  puntos[aroma]++;
}

function mostrarResultado(){
  let ganador = Object.keys(puntos).reduce((a,b) =>
    puntos[a] > puntos[b] ? a : b
  );

  let aroma = aromas[ganador];

  document.getElementById("resultado").innerHTML = `
    <div class="resultado-box">
      <h3>${aroma.emoji} Eres ${aroma.nombre}</h3>
      <p>${aroma.descripcion}</p>
    </div>
  `;
}