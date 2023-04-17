reparteTarjetas()

let mostrar = document.querySelectorAll(".centrarTarjeta")

mostrar.forEach(
    function (e) {
        e.addEventListener("click", ver)
    }
)

iniciarContador();