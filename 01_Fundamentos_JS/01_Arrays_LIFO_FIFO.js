//Array de tareas

let listaTareas = ["Comprar leche", "Pagar facturas", "Estudiar JS"];

//1. Añade una nueva tarea al final de la lista usando push(): "Hacer ejercicio".

listaTareas.push("Hacer ejercicio"); // listaTareas es ahora ["Comprar leche", "Pagar facturas", "Estudiar JS", "Hacer ejercicio"]

// 2. Elimina la última tarea (LIFO: pop)

let tareaEliminadaPop = listaTareas.pop(); //Elimina "Hacer ejercicio"

// 3. Elimina la primera tarea (FIFO: shift)

let tareaEliminadaShift = listaTareas.shift(); // Elimina "Comprar leche"

// 4. Añade una tarea al inicio (unshift)

listaTareas.unshift("Llamar al médico"); // listaTareas es ahora ["Llamar al médico", "Pagar facturas", "Estudiar JS"]

// Resultados

console.log("Array final:", listaTareas);

console.log("Tarea eliminada con pop():", tareaEliminadaPop);

console.log("Tarea eliminada con shift():", tareaEliminadaShift);