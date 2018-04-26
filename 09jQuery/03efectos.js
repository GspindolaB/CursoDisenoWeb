//$(function() {
//HIDE: Nos permite ocultar un elemento
function oculto() {
    //$(seelctor).efecto(velocidad, callback);
    $('.caja').hide(3000, function() {
        //Tardare en ejecutarse 3 segundos y cuando termine se elecuta el alert
        alert('oculto');
    });
}
//SHOW: Nos permite mostrar un elemento
function visible() {
    $('.caja').show(3000, function() {
        alert('visible');
    });
}
//TOGGLE: Es una combinación de los dos anteriores, es decir lo oculta y lo muestra sucesivamente.
function alternar() {
    $('.caja').toggle(3000);
}
//FADEIN: Es similar a show, funciona solamente cuando un elemento esta oculto
function dentro() {
    $('.caja').fadeIn(1500);
}
//FADEOUT: Es similar a hide, funciona solamente para elementos visibles
function fuera() {
    $('.caja').fadeOut(1500);
}
//FADETOGGLE: Es similar a toggle.
function fade() {
    $('.caja').fadeToggle(1500);
}
//SLIDEDOWN: Funciona solo para elementos ocultos, muestra un elemento con un efecto de arriba hacia abajo
function arriba() {
    $('.caja').slideDown();
}
//SLIDEUP: Funciona solo para elementos visibles y oculta el elemento con un efecto de arriba hacia abajo
//});
function abajo() {
    $('.caja').slideUp();
}
//SLIDETOGGLE: Es una combinación de los dos anteriores
function arribaAbajo() {
    $('.caja').slideToggle();
}

//Link para todos los efectos disponibles en jQuery
//https://api.jquery.com/category/effects/