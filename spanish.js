// spanish.js — Archivo en Español

const saludo = "¡Hola, Mundo!";
const despedida = "¡Adiós!";

const diasDeLaSemana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const mesesDelAño = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const colores = {
  rojo: "red",
  azul: "blue",
  verde: "green",
  amarillo: "yellow",
  blanco: "white",
  negro: "black",
};

const numeros = {
  uno: 1,
  dos: 2,
  tres: 3,
  cuatro: 4,
  cinco: 5,
  seis: 6,
  siete: 7,
  ocho: 8,
  nueve: 9,
  diez: 10,
};

function saludar(nombre) {
  return `¡Hola, ${nombre}! ¿Cómo estás?`;
}

function despedir(nombre) {
  return `¡Hasta luego, ${nombre}! ¡Que tengas un buen día!`;
}

console.log(saludo);
console.log(saludar("Mundo"));
console.log(despedir("Amigo"));
console.log("Días de la semana:", diasDeLaSemana.join(", "));
console.log("Meses del año:", mesesDelAño.join(", "));
