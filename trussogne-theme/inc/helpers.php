<?php
/**
 * Helpers partagés.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * URL d'un asset image du thème.
 *
 * Remplace les chemins « /assets/... » codés en dur dans le React,
 * qui ne résolvent pas sous un thème WordPress.
 *
 * @param string $rel Chemin relatif dans assets/images/ (ex. 'logo.webp', 'quatreChambres/diane2.webp').
 * @return string URL absolue.
 */
function trussogne_asset( $rel ) {
	return get_template_directory_uri() . '/assets/images/' . ltrim( $rel, '/' );
}

/**
 * Echo direct (échappé) de trussogne_asset() pour les attributs src.
 *
 * @param string $rel Chemin relatif dans assets/images/.
 */
function trussogne_asset_url( $rel ) {
	echo esc_url( trussogne_asset( $rel ) );
}

/**
 * Marque la page comme « light hero » : pas d'image sombre en haut, donc
 * la nav transparente doit garder le logo vert (pas d'inversion).
 *
 * Un template appelle trussogne_light_hero() avant get_header() ; le flag
 * est ensuite traduit en classe body via le filtre body_class ci-dessous.
 */
function trussogne_light_hero() {
	$GLOBALS['trussogne_is_light_hero'] = true;
}

/**
 * Ajoute is-light-hero sur <body> quand le template l'a demandé.
 *
 * @param array $classes Classes existantes.
 * @return array
 */
function trussogne_body_class( $classes ) {
	if ( ! empty( $GLOBALS['trussogne_is_light_hero'] ) ) {
		$classes[] = 'is-light-hero';
	}
	return $classes;
}
add_filter( 'body_class', 'trussogne_body_class' );

/**
 * Affiche le grand hero d'image plein cadre (porté depuis PageHero.jsx).
 *
 * Le responsive (padding/min-height mobile/tablet) est géré par les classes
 * .page-hero / .page-hero__* dans theme.css.
 *
 * @param array $args {
 *     @type string $image          Chemin relatif image (assets/images/...).
 *     @type string $alt            Texte alternatif.
 *     @type string $title          Titre H1.
 *     @type string $subtitle       Sous-titre (optionnel).
 *     @type string $image_position object-position CSS (défaut 'center').
 * }
 */
function trussogne_page_hero( $args = array() ) {
	$args = wp_parse_args(
		$args,
		array(
			'image'          => '',
			'alt'            => '',
			'title'          => '',
			'subtitle'       => '',
			'image_position' => 'center',
		)
	);
	?>
	<div class="page-hero">
		<img class="page-hero__img" src="<?php trussogne_asset_url( $args['image'] ); ?>" alt="<?php echo esc_attr( $args['alt'] ); ?>" style="object-position: <?php echo esc_attr( $args['image_position'] ); ?>;" />
		<div class="page-hero__veil" aria-hidden="true"></div>
		<div class="page-hero__gradient" aria-hidden="true"></div>
		<div class="page-hero__content">
			<div class="page-hero__inner">
				<h1 class="serif page-hero__title"><?php echo esc_html( $args['title'] ); ?></h1>
				<?php if ( $args['subtitle'] ) : ?>
					<p class="serif page-hero__subtitle"><?php echo esc_html( $args['subtitle'] ); ?></p>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<?php
}
