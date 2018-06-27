<?php
//Agregamos el soporte para imágenes en nuestro tema
add_theme_support('post-thumbnails');
//Declaramos las medidas de la imagén y si la imagén es más grande la cortara
add_image_size('homepage-thumb', 745, 732, true);
//Registrar los menus
register_nav_menus(array(
    'menu-top' => 'Menu Principal',
    'menu-footer' => 'Menu Footer' 
));
//Registrar un nuevo sidebar
register_sidebar(array(
    'name'=> 'Header',//Nombre
    'before_widget' => '<div>',//Etiqueta de inicio
    'after_widget' => '</div>',//Etiqueta de cierre
    'before_title' => '<h3>',//Etiqueta de inicio del titulo
    'after_title' => '</h3>'//Etiqueta de cierre del titulo
));
register_sidebar(array(
    'name'=> 'Sidebar',//Nombre
    'before_widget' => '<div class="widget"><div class="titulo-seccion">',//Etiqueta de inicio
    'after_widget' => '</div></div>',//Etiqueta de cierre
    'before_title' => '<h3>',//Etiqueta de inicio del titulo
    'after_title' => '</h3>'//Etiqueta de cierre del titulo
));
register_sidebar(array(
    'name'=> 'Footer',//Nombre
    'before_widget' => '<div>',//Etiqueta de inicio
    'after_widget' => '</div>',//Etiqueta de cierre
    'before_title' => '<h3>',//Etiqueta de inicio del titulo
    'after_title' => '</h3>'//Etiqueta de cierre del titulo
));
?>