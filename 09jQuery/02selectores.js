$(document).ready(function(){
    //Accedemos a todos los elementos h1 de nuestra página y el metodo hide nos permite ocultar el elemento
    //$('h1').hide();
    //Seleccionamos varios elementos
    //$('h1,h2').hide();

    //Para acceder a una clase lo hacemos de la misma manera que con CSS
    //se pone un punto antes del nombre de la clase
    $('.encabezado').hide();
    //Para los id pasa exactamente lo mismo, accedemos a el poniendo el simbolo # antes del id
    //$('#primero').hide();
    //Accedemos a los parrafos que tengan el id primero
    //$('p#primero').hide();
    //Accedemos a los parrafos que tengan la clase primero
    //$('p.primero').hide();
    //Accedemos a los enlaces que esten dentro de la clase primero
    $('.primero a').hide();
});