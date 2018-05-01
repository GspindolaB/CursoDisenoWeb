$(document).ready(function(){
    //Agregamos una variable que valdra lo que tengamos en nuestro div con el id contenedor
    var contenedor = $('#contenedor');
    //Agregamos una variable para el contador
    var contador = 1;
    //Agregamos el metodo click al boton
    $('#agregar').on('click', function(){
        //Agregamos el nuevo elemento y lo guardamos en una variable
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;
        //Indicamos que el nuevo elemento estara dentro del div con el id contenedor
        //contenedor.append(caja);
        //contenedor.prepend(caja);
        //contenedor.before(caja);
        contenedor.after(caja);
    });
});