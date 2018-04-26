//Estamos accediendo al documento y le estamos indicando que cuando todo el documento html este listo
//ejecutara las siguientes líneas.
$(document).ready(function(){
    /*Esta es la forma de escribir jquery
    $(selector).accion();*/

    /*
        $ - Indicamos que vamos a acceder a jquery
        selector - Accedemos al elemento que queramos trabajar
        accion - Lo que queremos hacer con el elemento seleccionado
    */
   $('h1').hide();
});


//Esto es exactamente lo mismo que indicar $(document).ready(function(){
$(function(){

});