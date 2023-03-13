let tarjetas1 =  ["🐶", "🐰", "🐹", "🐭", "🐱","🐪" ];

let totalTarjetas = tarjetas1.concat(tarjetas1)

function reparteTarjetas() {
    
    let mesa = document.querySelector("#mesa")

    mesa.innerHTML = ""

    totalTarjetas.forEach( function(e) {
         let tarjeta = document.createElement( "div" )

        tarjeta.innerHTML = 
        '<div id="mesa">' + 

            '<div class="centrarTarjeta">' +
                 '<div class="tarjetaContenido">' + e + '</div>'
            '</div>'
        '</div>' 
        ;
    
        mesa.appendChild(tarjeta);
    }
)
}

function descubrir() {
    this.classlist.add("descubierta")
}
reparteTarjetas()

