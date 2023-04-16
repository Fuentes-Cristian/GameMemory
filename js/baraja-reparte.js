
function reparteTarjetas() {
    
    let mesa = document.querySelector("#mesa")

    let tarjetasBarajadas = barajar()

    mesa.innerHTML = ""

    tarjetasBarajadas.forEach( function(e) {
         let tarjeta = document.createElement( "div" )

        tarjeta.innerHTML = 
        '<div id="mesa">' + 

            '<div class="centrarTarjeta" data-valor = ' + e + '>' + 
                    '<div id="mirar" class="tarjetaContenido">' + e + '</div>'
            '</div>'
            
        '</div>' ;
    
        mesa.appendChild(tarjeta);
    }
)
}



function barajar() {
    let resultado;

    resultado = totalTarjetas.sort(
        function () {
            return 0.5 - Math.random()
        }
    )
    return resultado;

}
