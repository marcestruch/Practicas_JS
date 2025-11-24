//Declaro la variable GLOBAL (se puede ver en todo el script)

var mensajeGlobal = "Aqui me puedes ver";

//Funcion para demostrar hositing y scope

function mostrarMensajes(){
    
    //Declaro variable LOCAL ()

    var mensajeLocal = "Solo dentro de la funcion";

    console.log("Dentro de la funcion:");
    console.log("Global:", mensajeGlobal);
    console.log("Local:", mensajeLocal);
}


//llamada a la funcion para mostrar mensajes

mostrarMensajes();

console.log("\nFuera de la funcion:");

//Intento acceder a la variable LOCAL desde fuera de la funcion

console.log("Global:", mensajeGlobal);

try {
    console.log("Local:", mensajeLocal);
} catch (error) {
    console.log("Local: Error -", error.message);
}

//Demostracion de hoisting

console.log("\nDemostracion de Hoisting:");

//Uso de variable antes de su declaracion

console.log("Valor de hoistedVar antes de declararla:", hoistedVar);

var hoistedVar = "Ahora estoy declarada";

console.log("Valor de hoistedVar despues de declararla:", hoistedVar);

//Uso de funcion antes de su declaracion

hoistedFunction();

function hoistedFunction(){
    console.log("Funcion hoistedFunction llamada antes de su declaracion.");
}