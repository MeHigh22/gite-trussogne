<?php
/**
 * Shortcode du widget de réservation [trussogne_booking].
 *
 * Port de BookingWidget.jsx. Le HTML rend la version « pill » desktop ;
 * la version mobile (grille 2×2) est obtenue par CSS (.booking-widget en
 * media-query). assets/js/main.js gère les compteurs, la date et le bouton
 * « Vérifier » qui ouvre l'URL Elloha construite côté client.
 *
 * Usage : [trussogne_booking] ou do_shortcode('[trussogne_booking]') ;
 * également utilisable dans un widget texte / Elementor.
 *
 * @package Trussogne
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Un segment compteur (Nuits / Adultes / Enfants).
 *
 * @param string $key   Clé du compteur (nights|adults|kids).
 * @param string $label Libellé affiché.
 * @param int    $start Valeur initiale.
 */
function trussogne_booking_counter( $key, $label, $start ) {
	?>
	<div class="bw-seg">
		<div class="mono-label bw-seg__label"><?php echo esc_html( $label ); ?></div>
		<div class="bw-counter">
			<button type="button" class="bw-counter__btn" data-dec="<?php echo esc_attr( $key ); ?>" aria-label="Diminuer">−</button>
			<span class="bw-counter__val" data-value="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $start ); ?></span>
			<button type="button" class="bw-counter__btn" data-inc="<?php echo esc_attr( $key ); ?>" aria-label="Augmenter">+</button>
		</div>
	</div>
	<?php
}

/**
 * Rendu du widget de réservation.
 *
 * @param array $atts Attributs du shortcode (non utilisés en v1).
 * @return string HTML.
 */
function trussogne_booking_shortcode( $atts = array() ) {
	ob_start();
	?>
	<div class="booking-widget" data-elloha-url="<?php echo esc_url( TRUSSOGNE_ELLOHA_URL ); ?>">
		<div class="bw-pill">
			<div class="bw-seg">
				<div class="mono-label bw-seg__label">Arrivée</div>
				<input type="date" class="bw-date" data-field="arrival" />
			</div>
			<?php
			trussogne_booking_counter( 'nights', 'Nuits', 2 );
			trussogne_booking_counter( 'adults', 'Adultes', 2 );
			trussogne_booking_counter( 'kids', 'Enfants', 0 );
			?>
			<div class="bw-action">
				<button type="button" class="btn-primary bw-verify" data-action="verify">
					Vérifier les disponibilités →
				</button>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}
add_shortcode( 'trussogne_booking', 'trussogne_booking_shortcode' );
