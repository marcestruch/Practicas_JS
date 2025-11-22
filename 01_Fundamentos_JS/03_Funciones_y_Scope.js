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