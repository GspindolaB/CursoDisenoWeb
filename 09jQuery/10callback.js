$(document).ready(function(){
    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1500, function(){
            $(this).slideDown(1500);
        });
    });

    /*$('#ejecutar').on('click', function(){
        $('.caja').slideUp(500);
        alert('Animacion iniciada');
        $('.caja').slideDown(500);
    });*/
});