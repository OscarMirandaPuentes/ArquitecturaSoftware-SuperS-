document.addEventListener('DOMContentLoaded', function() {
    const cartas = new Cartas();

    function reemplazarURLCarta(identificadorMazo, cartaR) {
        var ruta = cartas.obtenerRuta(cartaR);
        var elementoCarta = document.getElementById(identificadorMazo);
        if (elementoCarta) {
            elementoCarta.src = ruta;
        }
    }

    reemplazarURLCarta("Carta 1", "Sin gasolina");
});