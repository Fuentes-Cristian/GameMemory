
function exito(tarjets) {
    tarjets.forEach(
        function (elemento) {
            elemento.classList.add("acertaste")

            document.querySelector("#acierto").play()
        }
    )
}
function sinExito(tarjets) {
    tarjets.forEach(function (elemento) {
            elemento.classList.add("error");
            document.querySelector("#error").play()
    });


    setTimeout(function () {
      tarjets.forEach(function(elemento) {
        elemento.classList.remove("ver");
        elemento.classList.remove("error")
      })
    }, 1000)
}




 
 
