let tarjetas1 =  ["🐶", "🐰", "🐹", "🐭", "🐱","🐪" ];


let totalTarjetas = tarjetas1.concat(tarjetas1)
//console.log(totalTarjetas);

function reparteTarjetas() {
    
    let mesa = document.querySelector("#mesa")

    mesa.innerHTML = ""

    totalTarjetas.forEach( function(e) {
         let tarjeta = document.createElement( "div" )

        tarjeta.innerHTML = 
        '<div id="mesa">' + 

            '<div class="centrarTarjeta">' + 
                    '<div id="mirar" class="tarjetaContenido">' + e + '</div>'
            '</div>'
            
        '</div>' ;
    
        mesa.appendChild(tarjeta);
    }
)
}


function ver() {
    this.classList.add("ver")
}
reparteTarjetas()

let mostrar = document.querySelectorAll(".centrarTarjeta")

mostrar.forEach(
    function (e) {
        e.addEventListener("click", ver)
    }
)




 

