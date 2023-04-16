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