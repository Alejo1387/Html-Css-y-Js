// esta es la funcion con js
function accion() {
    // Aqui mostramos una alerta para ver si funciona
    // alert("Le diste click")

    // Aqui guardamos cada clase del enlace del html
    var ancla = document.getElementsByClassName('nav-enlace');

    // aqui lo que hacemos es recorrer cada enlace y si no tiene la clase desaparece la pone y si la tiene la quita
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}