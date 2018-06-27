<?php get_header();//Se incluye la página de header.php con esta función ?>
<div class="container">
        <div class="row">
            <section class="main col-md-8">
                <div class="row titulo-seccion">
                    <div class="col-md-12">
                        <h3><?php the_title(); ?></h3>
                    </div>
                </div>
                <div class="row posts">
                <!-- Mientras existan post, estos se iran cargando -->
                <?php if(have_posts()):while(have_posts()) : the_post(); ?>
                <article class="col-md-12 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <?php if(has_post_thumbnail()){the_post_thumbnail('homepage-thumb');} ?>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><?php the_title(); ?></h2>
                                <p class="fecha"><?php echo get_the_date(); ?></p>
                                <div class="categorias">
                                    <?php the_category(); ?>
                                </div>
                                <div class="texto"><?php echo the_content(); ?></div>
                            </div>
                        </div>
                    </article>
                    <section class="comentarios col-sm-12">
                        <?php comments_template(); ?>
                    </section>
                     <!-- Cerramos el while -->
                <?php endwhile; else : ?>
                <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="info">
                                <h2 class="titulo">El Post que buscas no existe</h2>
                                <div class="extracto"><p>Revisa que la URL sea correcta</p></div>
                            </div>
                        </div>
                    </article>
                <!-- Cerramos el if -->
                <?php endif; ?>
                </div>
            </section>
            <?php get_sidebar();//Se incluye la página de sidebar.php con esta función ?>
        </div>
    </div>

<?php get_footer();//Se incluye la página de footer.php con esta función ?>