$(function(){
    //Utilizaremos varias veces este selector, lo mejor es declararlo en una variable,
    //Para que cada vez ue lo utilicemos sea más facil
    var boton = $('#boton');

    /*$(boton).click(function(){
        alert('Hola');
    });*/

    //Esta es otra alternativa a ejecutar la función de arriba
    //boton.click(saludar);

    //Esta es una de las formas más utilizadas de hacerlo ultimamente.
    //El primer parametro es el tipo de evento y el segundo la funcion a ejecutar
    boton.on('click', saludar);

    //mouseenter: evento que se ejecutara al momento de pasar el mouse por encima del elemento
    boton.on('mouseenter', function(){
        boton.css({
            background: 'blue',
            border: 'none',
        })
    });

    //mouseleave: se ejecutara este evento cuando el puntero del mouse salga del elemento
    boton.on('mouseleave', function(){
        boton.css({
            background: 'grey'
        })
    });

    function saludar(){
        alert('Hola putos');
    }

    boton.on('click', function(){
        alert('Saludos');
        console.log('Saludos');
    });

    //Eliminando eventos: Para eliminar eventos ocuparemos el metofo off y recibira como parametro el tipo de evento a eliminar.
    $('#desactivar').on('click', function(){
        boton.off('click');
    });

    //Previniendo el comportamiento de los enlaces. La función anonima recibe un parametro que posteriormente de va a utilizar
    //para ejecutar el preventDeafult()
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link caído');
    });
});