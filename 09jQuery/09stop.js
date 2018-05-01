$(function(){
    //Agregamos el evento click al boton con el id ejecutar
    $('#ejecutar').on('click', function(){
        //Agregamos la animacion el div con la clase caja
        $('.caja').animate({
            marginLeft: '500px'
            //Declaramos el tiempo que durara la animación
        }, 5000);
        $('.caja').animate({
            marginLeft: '0px'
        }, 5000);
    });
    //Agregamos el evento click al boton con el id detener
    $('#detener').on('click', function(){
        //.stop(limpiarAnimaciones, saltarAlFinal);
        $('.caja').stop(true, false);
    });
});