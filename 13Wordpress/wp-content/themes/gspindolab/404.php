<?php get_header();//Se incluye la página de header.php con esta función ?>
<div class="container">
        <div class="row">
            <section class="main col-md-12">
                <div class="row titulo-seccion">
                    <div class="col-md-12">
                        <h3><?php the_title(); ?></h3>
                    </div>
                </div>
                <div class="row posts">
                <article class="col-sm-12 post">
                        <div class="contenedor">
                            <div class="info">
                                <h2 class="titulo">Error 404</h2>
                                <div class="extracto"><p>La página no fue encontrada, verifica que la URL sea correcta</p></div>
                                <br>
                                <a href="<?php bloginfo('url'); ?>">Regresar a la página de inicio</a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <?php get_sidebar();//Se incluye la página de sidebar.php con esta función ?>
        </div>
    </div>

<?php get_footer();//Se incluye la página de footer.php con esta función ?>