function contador() {
    let movimientosTexto;
    let movidas = document.querySelector("#movimientos").innerText;

    if (movimientos >= movidas) {
        return(
            Swal.fire({
                icon: 'error',
                title: 'Oh no!!',
                text: 'te has quedado sin movimientos 😭!',
                footer: '<a href = "./index.html"><button id = "btn-reiniciar-js" class ="btn-reiniciar-js">Reiniciar</button></a>'
            })
        )
    }
    
    movimientos++;
    movimientosTexto = movimientos
    
    
    if (movimientos < 10) {
        movimientosTexto = '0' + movimientos
    }
   
    document.querySelector("#mov").innerText = movimientosTexto;
   
}

contador()