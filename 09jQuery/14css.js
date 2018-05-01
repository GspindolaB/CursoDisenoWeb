$(function(){
    $('#boton').on('click', function(){
        //Agregando una clase
        //$(this).addClass('naranja');
        //Quitando una clase
        //$(this).removeClass('boton');
        //Mezcla de ambas (Quitar y poner)
        $(this).toggleClass('naranja');

        $(this).css({
            'width': '200px',
            'height': '200px'
        });
    });
});