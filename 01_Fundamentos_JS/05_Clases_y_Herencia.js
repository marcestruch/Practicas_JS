// 1. Definición de una Clase básica
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido genérico.`);
    }

    describir() {
        return `Soy un ${this.tipo} y me llamo ${this.nombre}.`;
    }
}

// Instancia de la clase Animal
const miMascota = new Animal("Pelusa", "Gato");

console.log("--- Clase Básica ---");
console.log(miMascota.describir());
miMascota.hacerSonido();


// 2. Herencia (extends)
// Creamos una clase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        // Llamamos al constructor de la clase padre (Animal) con super()
        super(nombre, "Perro");
        this.raza = raza;
    }

    // Sobrescritura de método (Polimorfismo)
    hacerSonido() {
        console.log(`${this.nombre} ladra: ¡Guau!`);
    }

    // Método específico de Perro
    traerPelota() {
        console.log(`${this.nombre} está trayendo la pelota.`);
    }
}

// Instancia de la clase Perro
const miPerro = new Perro("Rex", "Pastor Alemán");

console.log("\n--- Herencia ---");
console.log(miPerro.describir()); // Usa el método heredado de Animal
miPerro.hacerSonido(); // Usa el método sobrescrito de Perro
miPerro.traerPelota(); // Usa el método propio de Perro
