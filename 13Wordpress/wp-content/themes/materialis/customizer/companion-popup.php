<div id="materialis_homepage" style="display:none; ">
    <div class="materialis-popup" style="background-image: url(<?php echo esc_url(get_template_directory_uri() . "/customizer/images/admin-onboarding.jpg"); ?>)">
        <div>
            <div class="materialis_cp_column">
                <h3 class="materialis_title"><?php esc_html_e('Please Install the Materialis Companion Plugin to Enable All the Theme Features', 'materialis') ?></h3>
                <h4><?php esc_html_e('Here\'s what you\'ll get:', 'materialis'); ?></h4>
                <ul class="materialis-features-list">
                    <li><?php esc_html_e('Beautiful ready-made homepage', 'materialis'); ?></li>
                    <li><?php esc_html_e('Drag and drop page customization', 'materialis'); ?></li>
                    <li><?php esc_html_e('25+ predefined content sections', 'materialis'); ?></li>
                    <li><?php esc_html_e('Live content editing', 'materialis'); ?></li>
                    <li><?php esc_html_e('5 header types', 'materialis'); ?></li>
                    <li><?php esc_html_e('3 footer types', 'materialis'); ?></li>
                    <li><?php esc_html_e('and many other features', 'materialis'); ?></li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <label class="disable-popup-cb">
                <input type="checkbox" id="disable-popup-cb"/>
                <?php esc_html_e("Don't show this popup in the future", 'materialis'); ?>
            </label>
            <script type="text/javascript">
                jQuery('#disable-popup-cb').click(function () {
                    jQuery.post(
                        ajaxurl,
                        {
                            value: this.checked ? 1 : 0,
                            action: "companion_disable_popup",
                            companion_disable_popup_wpnonce: '<?php echo wp_create_nonce("companion_disable_popup"); ?>'
                        }
                    )
                });
            </script>
            <a class="button button-large button-link materialis-popup-cancel" onclick="tb_remove();"> <?php esc_html_e('Maybe later', 'materialis') ?> </a>
            <?php
            if (\Materialis\Companion_Plugin::$plugin_state['installed']) {
                $link  = \Materialis\Companion_Plugin::get_activate_link();
                $label = esc_html__('Activate now', 'materialis');
            } else {
                $link  = \Materialis\Companion_Plugin::get_install_link();
                $label = esc_html__('Install now', 'materialis');
            }
            printf('<a class="install-now button button-large button-orange" href="%1$s">%2$s</a>', esc_url($link), $label);
            ?>
        </div>
    </div>
</div>
