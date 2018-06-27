<footer>
        <!--<div class="ad container hidden-xs">
            <div class="row">
                <div class="col-md-12">
                    <img src="<//?php bloginfo('template_url') ?>/img/ad.jpg" alt="">
                </div>
            </div>
        </div>-->
        <?php if(!function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer')) : endif; ?>
        <nav class="menu">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <!--<ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                        </ul>-->
                        <?php wp_nav_menu(array(
                        'container' => false,
                        'menu_class' => '',
                        'items_wrap' => '<ul>%3$s</ul>',
                        'theme_location' => 'menu-footer'
                    )); ?>
                    </div>
                </div>
            </div>
        </nav>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p>Sitio creado por Guillermo Ricardo Spindola Brisuela</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <?php wp_footer(); ?>
    </body>

</html>