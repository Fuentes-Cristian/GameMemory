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
    if (compararTarjetas[0].textContent === compararTarjetas[1].textContent) {
        exito(compararTarjetas)
    }else{
        sinExito(compararTarjetas)
    }
}