/*  */

const miLib = (function(){
    const raya = "-";
    const punto = ".";
    const barra = "|";

    function nVeces(veces, char){
        return char.repeat(veces);
    }

    function hacerLineaH(len=0, char=raya){
        console.log(nVeces(len, char));
    }

    function hacerLineasV(espaciado=0, char=barra){
        console.log(`${char}${nVeces(espaciado, " ")}${char}`);
    }

    return {
        hacerLineaH,
        hacerLineasV
    };

})();