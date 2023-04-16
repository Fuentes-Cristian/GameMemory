let tarjetas1 =  ["🐶", "🐰", "🐹", "🐭", "🐱","🐪", "👺", "🤣", "👽" ];


let totalTarjetas = tarjetas1.concat(tarjetas1)
//console.log(totalTarjetas);

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


function ver() {
    let descubiertas;

    let tarjetasVolteadas = document.querySelectorAll(".ver:not(.acertaste)")
        if (tarjetasVolteadas.length > 1) {
            return;
        }

    this.classList.add("ver");

    descubiertas = document.querySelectorAll(".ver");
   comparar(descubiertas)
}

function comparar(compararTarjetas) {
    if (compararTarjetas[0].dataSet.valor === compararTarjetas[1].dataSet.valor) {
        exito(compararTarjetas)
    }else{
        sinExito(compararTarjetas)
    }
}
function exito(tarjets) {
    tarjets.forEach(
        function (elemento) {
            elemento.classList.add("acertaste")
        }
    )
}
function sinExito(tarjets) {
    tarjets.forEach(
        function (elemento) {
            elemento.classList.remove("ver")
        }
    )
}
reparteTarjetas()

let mostrar = document.querySelectorAll(".centrarTarjeta")

mostrar.forEach(
    function (e) {
        e.addEventListener("click", ver)
    }
)

function barajar() {
    let resultado;

    resultado = totalTarjetas.sort(
        function () {
            return 0.5 - Math.random()
        }
    )
    return resultado;

}



 
 

