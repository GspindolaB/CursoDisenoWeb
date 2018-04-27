$(document).ready(function(){
    $('.caja').on('click', function(){
        //Con toggle class podemos alternar entre la clase, si ya la tiene se la quita y si no la tiene, se la pone
        //$('.caja').toggleClass('color');
        $(this).toggleClass('color');
    });
});