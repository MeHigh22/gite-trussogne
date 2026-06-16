<?php
/**
 * Trussogne theme bootstrap.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access.
}

/**
 * Lien de réservation Elloha (porté depuis site/src/components/BookingWidget.jsx).
 * En v1 c'est une constante ; pourra devenir une option Carbon Fields plus tard.
 */
if ( ! defined( 'TRUSSOGNE_ELLOHA_URL' ) ) {
	define( 'TRUSSOGNE_ELLOHA_URL', 'https://reservation.elloha.com/?idPublication=854566e1-2fb8-485c-abbd-fbf732e92e88&idoi=fcd24dc1-911a-41a4-a5cd-c8588ad41007&TypeOi=3&searchFirstAvailableDates=1&culture=fr-FR' );
}

/** Coordonnées affichées dans la nav et le footer. */
if ( ! defined( 'TRUSSOGNE_PHONE' ) ) {
	define( 'TRUSSOGNE_PHONE', '+32 476 222 707' );
}
if ( ! defined( 'TRUSSOGNE_EMAIL' ) ) {
	define( 'TRUSSOGNE_EMAIL', 'trussogne@gmail.com' );
}

require_once get_template_directory() . '/inc/helpers.php';
require_once get_template_directory() . '/inc/enqueue.php';
require_once get_template_directory() . '/inc/booking-shortcode.php';
require_once get_template_directory() . '/inc/contact-form.php';

/**
 * Supports de thème.
 */
function trussogne_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'trussogne_setup' );
