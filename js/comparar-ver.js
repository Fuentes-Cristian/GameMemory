function ver() {
    let descubiertas;

    let tarjetasVolteadas = document.querySelectorAll(".ver:not(.acertaste)")
        if (tarjetasVolteadas.length > 1) {
            return;
        }

    this.classList.add("ver");

    descubiertas = document.querySelectorAll(".ver");
   comparar(descubiertas);
   contador();
}




function comparar(compararTarjetas) {
    if (compararTarjetas[0].dataset.valor === compararTarjetas[1].dataset.valor) {
        exito(compararTarjetas)
    }else{
        sinExito(compararTarjetas)
    }
}