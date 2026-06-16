<?php
/**
 * Enqueue des styles et scripts front-end.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Charge les polices Google, le CSS du thème et le JS front.
 *
 * Polices identiques au site React (voir site/index.html) :
 * Playfair Display, DM Sans, Tenor Sans.
 */
function trussogne_enqueue_assets() {
	$theme_version = wp_get_theme()->get( 'Version' );

	// Polices Google (un seul appel, comme index.html).
	wp_enqueue_style(
		'trussogne-fonts',
		'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&family=Tenor+Sans&display=swap',
		array(),
		null
	);

	// CSS du thème (porté de site/src/index.css + classes extraites).
	wp_enqueue_style(
		'trussogne-theme',
		get_template_directory_uri() . '/assets/css/theme.css',
		array( 'trussogne-fonts' ),
		$theme_version
	);

	// JS front (nav, scroll, booking, galerie, scroll-reveal) — chargé en footer.
	wp_enqueue_script(
		'trussogne-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		$theme_version,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'trussogne_enqueue_assets' );

/**
 * Précharge les domaines de polices (équivaut aux <link rel=preconnect> du index.html React).
 */
function trussogne_resource_hints( $urls, $relation_type ) {
	if ( 'preconnect' === $relation_type ) {
		$urls[] = array(
			'href'        => 'https://fonts.gstatic.com',
			'crossorigin' => 'anonymous',
		);
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'trussogne_resource_hints', 10, 2 );
