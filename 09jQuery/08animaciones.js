$(document).ready(function(){

    //$(selector).animate({parametros}, velocidad, callback)
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '+=200px',
            //opacity: '0.2'
        }, 1500, function(){
            //alert('Fin de la animación');
        });
        $('.caja').toggleClass('animacion');
        $('#caja').animate({
            marginLeft: '-=50px'
        }, 500);
    });
});