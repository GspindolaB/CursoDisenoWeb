$(document).ready(function(){
    //text(): Nos permite manipular el texto
   $('#titulo').text('Modificado'); 
   //html(): Nos permite modificar el contenido html
   $('#titulo').html('<ul><li>Jotos todos</li></ul>'); 
    //El encabezado será igual a lo que se ingrese en el input cada que se detecte un cambio
   var nombre = $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });
    //Cambiando el texto del enlace
    $('#enlace').text('GitHub');
    //Cambiando la rutaa del enlace
    $('#enlace').attr('href', 'https://github.com');
    //Modifcanco varios atributos 
    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });
});