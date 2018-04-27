$(function(){
    //FIRST: Accedemos al primer elemento con la clase caja
    $('.caja').first().css({
        background: '#000'
    });
    //LAST: Accedemos a la ultima caja del elemento que tiene la clase caja
    $('.caja').last().css({
        background: '#000'
    });
    //EQ: Accedemos al elemento especifico por su índice, indicandolo en el parámetro de la función
    $('.caja').eq(2).css({
        background: '#f2f2f2'
    });
    //FILTER: Accedemos a todas las cajas que tengan el id segunda y que esten dentro de .caja
    $('.caja').filter('#segunda').css({
        background: '#f9a03f'
    })
    //NOT: Accedemos a todas las cajas que no tengan el id segunda y esten dentro del elemento con la clase caja
    $('.caja').not('#segunda').slideUp(2500);
});