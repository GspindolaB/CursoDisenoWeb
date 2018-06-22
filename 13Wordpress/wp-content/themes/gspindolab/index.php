<?php get_header();//Se incluye la página de header.php con esta función ?>
<div class="container">
        <div class="row">
            <section class="main col-md-8">
                <div class="row titulo-seccion">
                    <div class="col-md-12">
                        <h3>Lo más reciente</h3>
                    </div>
                </div>
                <div class="row posts">
                    <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <a href="#"><img src="<?php bloginfo('template_url') ?>/img/1.jpg" alt="1" width="700px"></a>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                                <p class="fecha">Junio 19 2018</p>
                                <p class="extracto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde illo aperiam atque pariatur officiis?</p>
                                <div class="categorias">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <a href="#"><img src="<?php bloginfo('template_url') ?>/img/2.jpg" alt="1" width="700px"></a>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                                <p class="fecha">Junio 19 2018</p>
                                <p class="extracto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde illo aperiam atque pariatur officiis?</p>
                                <div class="categorias">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <a href="#"><img src="<?php bloginfo('template_url') ?>/img/3.jpg" alt="1" width="700px"></a>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                                <p class="fecha">Junio 19 2018</p>
                                <p class="extracto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde illo aperiam atque pariatur officiis?</p>
                                <div class="categorias">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <a href="#"><img src="<?php bloginfo('template_url') ?>/img/4.jpg" alt="1" width="700px"></a>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                                <p class="fecha">Junio 19 2018</p>
                                <p class="extracto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde illo aperiam atque pariatur officiis?</p>
                                <div class="categorias">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <a href="#"><img src="<?php bloginfo('template_url') ?>/img/5.jpg" alt="1" width="700px"></a>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                                <p class="fecha">Junio 19 2018</p>
                                <p class="extracto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde illo aperiam atque pariatur officiis?</p>
                                <div class="categorias">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="col-md-6 post">
                        <div class="contenedor">
                            <div class="thumb">
                                <a href="#"><img src="<?php bloginfo('template_url') ?>/img/6.jpg" alt="1" width="700px"></a>
                            </div>
                            <div class="info">
                                <h2 class="titulo"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                                <p class="fecha">Junio 19 2018</p>
                                <p class="extracto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat unde illo aperiam atque pariatur officiis?</p>
                                <div class="categorias">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <section class="row paginacion">
                    <div class="col-md-12">
                        <ul>
                            <li class="disabled">Página 1 de 6</li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">Última >></a></li>
                        </ul>
                    </div>
                </section>
            </section>
            <?php get_sidebar();//Se incluye la página de sidebar.php con esta función ?>
        </div>
    </div>

<?php get_footer();//Se incluye la página de footer.php con esta función ?>