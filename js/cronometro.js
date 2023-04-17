function iniciarContador(params) {
    let segundos = 0;
    let minutos = 0;
    let segundosTexto;
    let minutosTexto;

    function actualizaContdor(params) {
        segundos++;

        if (segundos > 59 ) {
            segundos = 00
            minutos++
        }
    }

    setInterval(actualizaContdor, 1000)
}


