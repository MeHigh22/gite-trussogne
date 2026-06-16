<?php
/**
 * Pied de page (porté de Footer.jsx).
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$trussogne_footer_links = array(
	array( 'path' => '/',                      'label' => 'Accueil' ),
	array( 'path' => '/le-gite',               'label' => 'Le gîte' ),
	array( 'path' => '/activites',             'label' => 'Activités' ),
	array( 'path' => '/galerie',               'label' => 'Galerie' ),
	array( 'path' => '/a-propos',              'label' => 'À propos' ),
	array( 'path' => '/contact',               'label' => 'Contact' ),
	array( 'path' => '/conditions-generales',  'label' => 'Conditions générales' ),
);

// Logos partenaires (porté de Footer.jsx:119).
$trussogne_partner_logos = array(
	'1.webp',
	'Logo-Gites-et-Chambre-dhotes-de-Wallonie.png',
	'4-1.webp',
	'3.webp',
	'5-1.webp',
);
?>

<footer class="site-footer" id="contact">
	<div class="site-footer__inner">
		<div class="site-footer__top">

			<div class="site-footer__brand">
				<img src="<?php trussogne_asset_url( 'logo.webp' ); ?>" alt="Trussogne" />
				<p>Gîte de charme dans les Ardennes belges. Un havre de paix pour 6 à 9 voyageurs.</p>
			</div>

			<div class="site-footer__mobile-cols">
				<div class="site-footer__col">
					<div class="mono-label">Liens</div>
					<ul>
						<?php foreach ( $trussogne_footer_links as $link ) : ?>
							<li><a href="<?php echo esc_url( home_url( $link['path'] ) ); ?>"><?php echo esc_html( $link['label'] ); ?></a></li>
						<?php endforeach; ?>
					</ul>
				</div>

				<div class="site-footer__col">
					<div class="mono-label">Contact</div>
					<ul>
						<li><?php echo esc_html( TRUSSOGNE_PHONE ); ?></li>
						<li><?php echo esc_html( TRUSSOGNE_EMAIL ); ?></li>
						<li class="site-footer__addr">Grande Trussogne, 9C<br />5561 Houyet, Belgique</li>
					</ul>
				</div>
			</div>

			<div class="site-footer__col">
				<div class="mono-label">Suivez-nous</div>
				<img class="site-footer__map" src="<?php trussogne_asset_url( 'footer/Design-sans-titre-38.webp' ); ?>" alt="Carte de Belgique" />
				<a class="site-footer__social" href="https://www.instagram.com/trussogne/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
						<circle cx="12" cy="12" r="4" />
						<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
					</svg>
				</a>
			</div>

		</div>

		<div class="site-footer__partners">
			<div class="mono-label">Partenaires</div>
			<?php foreach ( $trussogne_partner_logos as $logo ) : ?>
				<div class="site-footer__partner">
					<img src="<?php trussogne_asset_url( 'footer/' . $logo ); ?>" alt="" />
				</div>
			<?php endforeach; ?>
		</div>

		<div class="site-footer__legal">
			<div>© <?php echo esc_html( date( 'Y' ) ); ?> Gîte de Trussogne · Tous droits réservés</div>
			<div class="mono-label">50.2064°N · 5.0889°E · Houyet, BE</div>
		</div>

	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
