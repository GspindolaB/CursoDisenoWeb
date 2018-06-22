<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php bloginfo('template_url');//Con esta función obtenemos la url del template actual ?>/css/bootstrap.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url') ?>/css/estilos.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400,500,700" rel="stylesheet">
    <title><?php if(is_home()){
        echo get_bloginfo('name');
    }elseif (is_single()) {
        echo the_title();
    }else{
        echo get_bloginfo('name');
    } ?></title>
    <?php wp_head(); ?>
</head>

<body>
    <header>
        <div class="container">
            <div class="row">
                <div class="logo col-xs-12 col-sm-6">
                    <a href="<?php bloginfo('url') ?>"><img src="<?php bloginfo('template_url') ?>/img/logo.png" alt="Logo de la página"></a>
                </div>
                <div class="redes-sociales col-xs-12 col-sm-6">
                    <a class="facebook" href="#"><i class="fab fa-facebook"></i></a>
                    <a class="youtube" href="#"><i class="fab fa-youtube"></i></a>
                    <a class="twitter" href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <nav class="menu">
            <div class="container">
                <div class="row">
                    <ul class="col-md-12">
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">JAVASCRIPT</a></li>
                        <li><a href="#">PHP</a></li>
                        <li><a href="#">SQL</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="ad container hidden-xs">
            <div class="row">
                <div class="col-md-12">
                    <img src="<?php bloginfo('template_url') ?>/img/ad.jpg" alt="Publicidad">
                </div>
            </div>
        </div>
    </header>