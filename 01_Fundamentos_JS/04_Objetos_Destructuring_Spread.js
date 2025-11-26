// Objeto principal con información de un estudiante
const estudiante = {
  nombre: "Maria",
  edad: 22,
  curso: "Desarrollo Web",
  calificaciones: {
    html: 9,
    css: 8,
    js: 9.5,
  },
};

// 1. Destructuring (Desestructuración)
// Extraemos propiedades directamente en variables
const {
  nombre,
  curso,
  calificaciones: { js },
} = estudiante;

console.log("--- Destructuring ---");
console.log("Nombre:", nombre);
console.log("Curso:", curso);
console.log("Nota JS:", js); // Accedimos a la propiedad anidada

// 2. Spread Operator (Operador de propagación) ...
// Copiar objetos y combinar propiedades

const infoAdicional = {
  ciudad: "Valencia",
  becado: true,
};

// Creamos un nuevo objeto combinando el estudiante original con la info adicional
// y sobrescribiendo la edad
const estudianteCompleto = {
  ...estudiante,
  ...infoAdicional,
  edad: 23, // Sobrescribe la edad de 22 a 23
};

console.log("\n--- Spread Operator ---");
console.log("Estudiante Completo:", estudianteCompleto);

// 3. Property Shorthand (Atajo de propiedades)
// Si la variable tiene el mismo nombre que la propiedad, no hace falta poner nombre: valor

const marca = "Toyota";
const modelo = "Corolla";
const year = 2022;

const coche = {
  marca, // equivale a marca: marca
  modelo, // equivale a modelo: modelo
  year, // equivale a year: year
  arrancar() {
    // Método conciso (sin function keyword)
    console.log("El coche está arrancando...");
  },
};

console.log("\n--- Property Shorthand ---");
console.log(coche);
coche.arrancar();
