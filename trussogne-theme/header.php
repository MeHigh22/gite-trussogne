<?php
/**
 * En-tête : <head> + barre de navigation (porté de Nav.jsx).
 *
 * Le comportement (ouverture du drawer, état scrollé, inversion du logo)
 * est géré par assets/js/main.js. Les pages avec un hero sombre laissent
 * la nav transparente (logo blanc) ; les pages « light hero » ajoutent la
 * classe is-light-hero sur <body> via body_class (voir filtre plus bas).
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$trussogne_nav_links = array(
	array( 'path' => '/',          'label' => 'Accueil' ),
	array( 'path' => '/le-gite',   'label' => 'Le gîte' ),
	array( 'path' => '/activites', 'label' => 'Activités' ),
	array( 'path' => '/galerie',   'label' => 'Galerie' ),
	array( 'path' => '/a-propos',  'label' => 'À propos' ),
	array( 'path' => '/contact',   'label' => 'Contact' ),
);

// Chemin de la requête courante, pour marquer le lien actif dans le drawer.
$trussogne_current_path = trailingslashit( wp_parse_url( home_url( add_query_arg( array() ) ), PHP_URL_PATH ) );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="trussogne-nav" id="site-nav">
	<div class="trussogne-nav__inner">
		<a class="trussogne-nav__logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Accueil — Trussogne">
			<img src="<?php trussogne_asset_url( 'logo.webp' ); ?>" alt="Trussogne" />
		</a>

		<button class="trussogne-nav__menu-btn" id="nav-open" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav-drawer">
			<span class="mono-label">Menu</span>
			<span class="trussogne-nav__burger" aria-hidden="true">
				<span></span>
				<span></span>
			</span>
		</button>
	</div>
</nav>

<div class="trussogne-overlay" id="nav-overlay" tabindex="-1" aria-hidden="true"></div>

<aside class="trussogne-drawer" id="nav-drawer" role="dialog" aria-modal="true" aria-label="Menu de navigation" aria-hidden="true">
	<div class="trussogne-drawer__head">
		<span class="mono-label">Navigation</span>
		<button class="trussogne-drawer__close" id="nav-close" type="button" aria-label="Fermer le menu">✕</button>
	</div>

	<div class="trussogne-drawer__links">
		<?php
		foreach ( $trussogne_nav_links as $link ) :
			$href       = home_url( $link['path'] );
			$link_path  = trailingslashit( wp_parse_url( $href, PHP_URL_PATH ) );
			$is_current = ( $link_path === $trussogne_current_path );
			?>
			<a href="<?php echo esc_url( $href ); ?>"<?php echo $is_current ? ' class="is-current" aria-current="page"' : ''; ?>>
				<?php echo esc_html( $link['label'] ); ?>
			</a>
		<?php endforeach; ?>
	</div>

	<a class="btn-primary trussogne-drawer__cta" href="<?php echo esc_url( TRUSSOGNE_ELLOHA_URL ); ?>" target="_blank" rel="noopener noreferrer">
		Réserver en direct →
	</a>

	<div class="trussogne-drawer__contact">
		<div class="mono-label">Contact</div>
		<div><?php echo esc_html( TRUSSOGNE_PHONE ); ?></div>
		<div><?php echo esc_html( TRUSSOGNE_EMAIL ); ?></div>
	</div>
</aside>
