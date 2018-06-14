<?php


function materialis_defaults_dark($defaults)
{

    if (get_theme_mod('theme_default_preset') !== 'dark') {
        return $defaults;
    }

    $defaults = array_merge($defaults, array(
        'header_overlay_color'   => '#181818',
        'header_nav_style'       => 'simple-text-buttons',
        'header_overlay_opacity' => '0.4',

        'inner_header_overlay_color'   => '#181818',
        'inner_header_nav_style'       => 'simple-text-buttons',
        'inner_header_overlay_opacity' => '0.4',
    ));

    return $defaults;
}

add_filter('materialis_defaults', 'materialis_defaults_dark');
