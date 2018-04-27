$(document).ready(function(){
    //PARENT: Nos permite conocer el elemento padre de el elemento que tiene el id tercera
    $('#tercera').parent();
    //Cambiar los estilos css del elemento padre de tercera
    $('#tercera').parent().css({
        background: '#1b3d82',
        height: 'auto'
    });
    //PARENTS: Nos permite conocer todos los elementos padre del elemento tercera
    $('#tercera').parents();

    //CHILDREN: Accede a todos los elementos hijo
    //$('#padre').children().fadeOut(1000);
    //Accedemos al elemento especifico
    //$('#padre').children('#tercera').slideUp(1000);
    //FIND: Nos permite encontrar un elemento, en este caso buscamos dentro del elemento div que tiene el id contenedor.
    //Todos aquellos elementos que tienen la clase caja
    //$('#contenedor').find('.caja').slideUp();
    //SIBLINGS: Selecciona los elementos hermanos, es decir que estan en el mismo nivel
    //$('#tercera').siblings().fadeOut(500);
    //NEXT Accede al elemento siguiente - PREV Accede al elemento anterior
    /*$('#tercera').prev().css({
        background: 'red'
    });
    $('#tercera').next().css({
        background: 'yellow'
    });*/
    //NEXTALL Accede a todos los elementos siguientes - PREVALL Accede a todos los elementos anteriores
    $('#tercera').prevAll().css({
        background: 'red'
    });
    $('#tercera').nextAll().css({
        background: 'yellow'
    });

});