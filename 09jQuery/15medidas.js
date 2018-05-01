$(document).ready(function(){
    var titulo = $('#titulo');
    var info = $('#info');

    /** ANCHO */

    //Calcular el ancho de un elemento
    info.append('Ancho: ' + titulo.width() + '<br>');
    //Calcular el ancho de un elemento más el padding
    info.append('Ancho Interno: ' + titulo.innerWidth() + '<br>');
    //Calcular el ancho del elemento más el padding mas el borde
    info.append('Ancho Externo: ' + titulo.outerWidth() + '<br>');
    //Calcular el ancho del elemento más el padding mas el borde más el margen
    info.append('Ancho Externo: ' + titulo.outerWidth(true) + '<br>');

    /**ALTO */
    //Calcular el ancho de un elemento
    info.append('Alto: ' + titulo.height() + '<br>');
    //Calcular el ancho de un elemento más el padding
    info.append('Alto Interno: ' + titulo.innerHeight() + '<br>');
    //Calcular el ancho del elemento más el padding mas el borde
    info.append('Alto Externo: ' + titulo.outerHeight() + '<br>');
    //Calcular el ancho del elemento más el padding mas el borde más el margen
    info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br>');
});