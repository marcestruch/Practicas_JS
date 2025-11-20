const usuarios = [
    { nombre: 'Ana', edad: 25, activo: true },
    { nombre: 'Pedro', edad: 35, activo: false },
    { nombre: 'Marta', edad: 22, activo: true },
    { nombre: 'Juan', edad: 40, activo: false }
];

//Iteración (forEach): Recorre el array e imprime en consola solo el nombre y la edad de cada usuario con un mensaje para saber si esta activo o no

usuarios.forEach(usu => {
    
    //Verifica el estado del booleano activo para determinar el mensaje
    
   let mensaje = usu.activo ? "Activo" : "Inactivo";

    //Muestra mensaje por consola de cada usuario del array

    console.log("Nombre: ",usu.nombre," Edad: ",usu.edad," Estado: ",mensaje);
    
});

// Array de nombres

const nombresCompletos = [
    {nombre: 'Marc'},
    {nombre: 'Pau'},
    {nombre: 'Salva'}
];

//map devuelve cada posicion con el formato o modificacion que desees realizar entre {}

const nombreMayus = nombresCompletos.map(nom => {
    return nom.nombre.toUpperCase();
});

//Muestra todas las posiciones del array de copia nombreMayus

console.log(nombreMayus);
