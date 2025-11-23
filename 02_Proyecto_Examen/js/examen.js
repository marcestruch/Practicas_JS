/* Pon aquí tu nombre y apellido, por favor */

// Marc Estruch Malonda

/*
++ salida en la variable salP1
*/
function tratarDatosEntrada(cadena, sepLinea, sepCampos) {
    // 1. Separar la cadena en un array de líneas.

    let lineas = cadena.split(sepLinea); 

    // 2. Limpiar y filtrar líneas no válidas para obtener la matriz limpia.
    
    let matrizLimpia = lineas
        .map(linea => linea.trim()) // Limpia los espacios en blanco iniciales/finales de cada línea 
        .filter(linea => linea.length > 0); // Elimina registros (líneas) vacíos 

    // La primera línea contiene los nombres de los campos (encabezado)
    
    const nombresCampos = matrizLimpia[0].split(sepCampos).map(campo => campo.trim()); // Limpia también los nombres de campo
    
    // Eliminamos la línea de encabezado del array para quedarnos solo con los datos
    
    const registros = matrizLimpia.slice(1);

    // 3. Convertir cada línea de datos en un array de campos y limpiar esos campos.
    
    const arrayDeArrays = registros.map(registro => {
        return registro.split(sepCampos)
                       .map(campo => campo.trim()); // Limpia espacios iniciales/finales de cada campo 
    });

    // 4. Filtrar los registros que no tienen el número correcto de campos.
    
    const registrosValidos = arrayDeArrays.filter(registro => {
    
      // Solo conservamos elementos cuya longitud sea igual al número de campos 
    
        return registro.length === nombresCampos.length;
    });
    
    // 5. Convertir cada registro válido a objeto usando la función auxiliar aObjeto
    
    // Esta parte ya enlaza con el Paso 2
    
    const arrayDeObjetos = registrosValidos.map(registro => {
        return aObjeto(registro, nombresCampos); // aObjeto creará el objeto {clave: valor}
    });

    // Esta función debe devolver el array de objetos final, listo para el siguiente paso.
    
    return arrayDeObjetos;
}

function aObjeto(array,nomCampos) {}


/*
++ salida en la variable salP3 
*/
function filtarPorFecha(array, campo, fecha) {}



function objetosConCampos(arrayObj, campos) {}


/*
++ salida en la variable salP5 
*/
function realizarTablaIncidencias(arrayObj) {
  // Las fórmulas son:

  // Para 7 días
  // Si hay un valor en cases_PCR_7days, utilizarlo. Si no, utilizar el valor de cases_7days
  // La incidencia se calcula con el valor anterior dividido entre la población y multiplicado por 1000000

  // Para 14 días
  // Si hay un valor en cases_PCR_14days, utilizarlo. Si no, utilizar el valor de cases_14days
  // La incidencia se calcula con el valor anterior dividido entre la población y multiplicado por 1000000

}


function crearTablaHTML(arrayObj) {
/*
  table
    caption 
    thead
      tr
        th
    tbody
      tr
        td
    tfoot
      tr
        td
*/

}

