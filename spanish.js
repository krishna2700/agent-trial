// spanish.js - Módulo de frases en español

const frases = {
  saludo: "¡Hola! ¿Cómo estás?",
  bienvenida: "Bienvenido",
  despedida: "Adiós",
  gracias: "Muchas gracias",
  deBienvenida: "De nada",
  porFavor: "Por favor",
  perdon: "Perdón",
  siNo: ["Sí", "No"],
};

function saludar(nombre) {
  return `¡Hola, ${nombre}! ¿Cómo estás?`;
}

function despedirse(nombre) {
  return `¡Adiós, ${nombre}! ¡Hasta luego!`;
}

function presentarse(nombre, edad) {
  return `Me llamo ${nombre} y tengo ${edad} años.`;
}

console.log(saludar("Mundo"));
console.log(despedirse("Amigo"));
console.log(presentarse("Carlos", 30));
console.log("Frase del día:", frases.bienvenida);

module.exports = { frases, saludar, despedirse, presentarse };
