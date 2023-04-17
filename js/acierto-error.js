
function exito(tarjets) {
    tarjets.forEach(
        function (elemento) {
            elemento.classList.add("acertaste")
        }
    )
}
function sinExito(tarjets) {
    tarjets.forEach(function (elemento) {
            elemento.classList.add("error")
    });


    setTimeout(function () {
      tarjets.forEach(function(elemento) {
        elemento.classList.remove("ver");
        elemento.classList.remove("error")
      })
    }, 1000)
}




 
 

